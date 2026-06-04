import { useState } from "react";
import Samples from "./components/samples";
import ShadowBox from "./components/shadow-box";
import { shadows } from "./lib/shadows";

function App() {
  const [selectedShadow, setSelectedShadow] = useState(shadows[0]);

  return (
    <div className="flex [--remove-height:calc(100vh-var(--header-height)-var(--footer-height))]">
      <div className="hidden lg:block sticky left-0 top-0 h-(--remove-height) w-64 bg-zinc-100 border-r border-dotted border-zinc-300 p-4">
        Total Shadows: {shadows.length}
      </div>
      <ul className="bg-white overflow-y-auto h-(--remove-height) w-full max-w-5xl mx-auto grid min-[240px]:grid-cols-2 min-[350px]:grid-cols-3 min-[468px]:grid-cols-4 min-[578px]:grid-cols-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-12 px-4 lg:px-10 py-4 lg:py-12 justify-items-center">
        {shadows.map((shadow) => (
          <li key={shadow.id}>
            <ShadowBox 
              shadow={shadow} 
              selected={selectedShadow.id === shadow.id}
              onOpen={() => setSelectedShadow(shadow)}
            />
          </li>
        ))}
      </ul>
      <div className="hidden lg:block sticky right-0 top-0 h-(--remove-height) w-md border-l border-dotted border-zinc-300 overflow-y-auto">
        <Samples shadow={selectedShadow} />
      </div>
    </div>
  );
}

export default App;
