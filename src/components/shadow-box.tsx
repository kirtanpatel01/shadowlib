import { Check, Copy } from "lucide-react";
import type { Shadow } from "../lib/shadows";
import { cn } from "../lib/utils";
import { useState } from "react";

const codeFields = [
  {
    key: "css",
    label: "CSS",
    color: "sm:bg-sky-500/90 sm:hover:bg-sky-500",
  },
  {
    key: "tailwind",
    label: "Tailwind",
    color: "sm:bg-rose-500/90 sm:hover:bg-rose-500",
  },
] as const;

function ShadowBox({ shadow }: { shadow: Shadow }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copyToClipboard = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className={cn(
        "size-24 sm:size-32 xl:size-48 flex flex-col items-stretch justify-center gap-1 bg-white",
        shadow.tailwind,
      )}
    >
      <div className="flex flex-col gap-2 px-1 items-center">
        {codeFields.map((field) => {
          const value = shadow[field.key];

          return (
            <button
              key={field.key}
              type="button"
              onClick={() => void copyToClipboard(value, field.key)}
              // data-tooltip-id={`shadow-${shadow.id}-${field.key}`}
              // data-tooltip-content={value}
              className={cn(
                "w-fit sm:px-2 sm:py-1 text-xs font-semibold flex items-center gap-1 cursor-pointer ring-1 ring-zinc-900/15 rounded-md transition-all duration-150 active:translate-y-px bg-zinc-100",
              )}
            >
              {copied === field.key ? (
                <Check className="size-3" />
              ) : (
                <Copy className="size-3" />
              )}
              {field.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center gap-0.5 pt-1 text-center">
        <span className="font-medium text-zinc-700">Box - {shadow.id}</span>
        {shadow.by && (
          <span className="text-xs text-indigo-500">by {shadow.by}</span>
        )}
      </div>

      {/* {codeFields.map((field) => {
				const value = shadow[field.key];

				return (
					<Tooltip
						key={field.key}
						id={`shadow-${shadow.id}-${field.key}`}
						className="max-w-88 rounded-2xl border border-white/10 bg-zinc-950/95 px-3 py-2 font-mono text-xs leading-relaxed text-zinc-100 shadow-2xl shadow-black/40 backdrop-blur-md"
						delayShow={120}
						place="right"
						opacity={1}
						arrowColor="#09090b"
						style={{ overflowWrap: "anywhere", wordBreak: "break-word", whiteSpace: "pre-wrap" }}
					>
						{value}
					</Tooltip>
				);
			})} */}
    </div>
  );
}

export default ShadowBox;
