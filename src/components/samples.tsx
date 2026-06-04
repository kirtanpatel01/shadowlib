import { useState, useEffect } from "react";
import type { Shadow } from "../lib/shadows";
import { cn } from "../lib/utils";
import { Copy, Check, RotateCcw } from "lucide-react";

interface SamplesProps {
  shadow: Shadow;
}

function Samples({ shadow }: SamplesProps) {
  const [imageUrl] = useState(() => `https://picsum.photos/800/480?random=${Math.floor(Math.random() * 1000)}`);
  
  // Editable states
  const [editableCss, setEditableCss] = useState(shadow.css);
  const [editableTailwind, setEditableTailwind] = useState(shadow.tailwind);

  // Sync state when prop changes
  useEffect(() => {
    setEditableCss(shadow.css);
    setEditableTailwind(shadow.tailwind);
  }, [shadow]);

  // Copy state
  const [copiedKey, setCopiedKey] = useState<"css" | "tailwind" | null>(null);

  const handleCopy = async (text: string, key: "css" | "tailwind") => {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleReset = () => {
    setEditableCss(shadow.css);
    setEditableTailwind(shadow.tailwind);
  };

  // Helper to extract the inner shadow value from something like `box-shadow: VALUE;`
  const getBoxShadowValue = (cssString: string) => {
    const cleaned = cssString.replace(/box-shadow\s*:\s*/i, "").replace(/;+$/, "").trim();
    return cleaned;
  };

  return (
    <div className="p-4 space-y-6">
      {/* Top: Shadow ID */}
      <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
        <span className="text-xs font-semibold text-zinc-400 tracking-wider">Active Preset</span>
        <span className="text-sm font-bold text-zinc-900 bg-zinc-100 px-2 py-1 rounded-md font-mono">
          Shadow - {shadow.id}
        </span>
      </div>

      {/* Card Preview */}
      <div className="flex justify-center">
        <div 
          style={{
            boxShadow: getBoxShadowValue(editableCss)
          }}
          className={cn("bg-white overflow-hidden w-full transition-all duration-300", editableTailwind)}
        >
          <img
            src={imageUrl}
            alt="Abstract Art"
            className="w-full h-48 object-cover border-b border-zinc-100"
          />
          <div className="p-4 bg-zinc-50">
            <h3 className="font-bold text-zinc-900">Minimalist Art</h3>
            <p className="text-sm text-zinc-500 mt-1">
              A curated collection of modern abstract shapes and neutral color
              palettes.
            </p>
          </div>
          <div className="p-4 border-t border-zinc-100 flex justify-end gap-2 items-center">
            {/* Confirm Button is styled with the original shadow per user request */}
            <button
              className={cn("inline-flex items-center justify-center gap-1.5 bg-white text-zinc-800 px-3.5 py-1.5 text-xs font-semibold cursor-pointer rounded-full transition-all duration-300", shadow.tailwind)}
            >
              <span>Confirm</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: CSS and Tailwind Code & Copy Buttons */}
      <div className="space-y-2 pt-4 border-t border-zinc-100">
        {/* CSS Code */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>CSS Code</span>
            <button
              onClick={() => handleCopy(editableCss, "css")}
              className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition cursor-pointer font-medium"
            >
              {copiedKey === "css" ? <Check size={12} /> : <Copy size={12} />}
              <span>{copiedKey === "css" ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <textarea
            value={editableCss}
            onChange={(e) => setEditableCss(e.target.value)}
            className="w-full text-xs bg-zinc-50 p-2.5 rounded-lg font-mono text-zinc-700 border border-zinc-200/60 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-transparent min-h-[60px]"
            rows={4}
          />
        </div>

        {/* Tailwind Class */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Tailwind Class</span>
            <button
              onClick={() => handleCopy(editableTailwind, "tailwind")}
              className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 transition cursor-pointer font-medium"
            >
              {copiedKey === "tailwind" ? <Check size={12} /> : <Copy size={12} />}
              <span>{copiedKey === "tailwind" ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <textarea
            value={editableTailwind}
            onChange={(e) => setEditableTailwind(e.target.value)}
            className="w-full text-xs bg-zinc-50 p-2.5 rounded-lg font-mono text-zinc-700 border border-zinc-200/60 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-transparent min-h-[60px]"
            rows={4}
          />
        </div>

        {/* Reset Button */}
        <div className="flex justify-end">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-600 bg-white border border-zinc-200 rounded-lg shadow-sm hover:bg-zinc-50 transition cursor-pointer active:translate-y-px"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Samples;
