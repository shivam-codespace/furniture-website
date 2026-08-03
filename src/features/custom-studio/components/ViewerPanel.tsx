import { useState } from "react";
import { ChevronRight, Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRODUCT_VIEWS } from "@/features/custom-studio/data/options";

const MODES = [
  { id: "3d", label: "3D View" },
  { id: "room", label: "Room View" },
  { id: "360", label: "360° View" },
];

export function ViewerPanel() {
  const [mode, setMode] = useState("3d");
  const [activeView, setActiveView] = useState(PRODUCT_VIEWS[0].id);
  const current = PRODUCT_VIEWS.find((v) => v.id === activeView) ?? PRODUCT_VIEWS[0];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-dark/8 bg-white p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-full bg-dark/5 p-1">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                mode === m.id ? "bg-dark text-white" : "text-dark/55 hover:text-dark",
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full border border-dark/15 px-3.5 py-1.5 text-xs font-semibold text-dark/70 transition-colors hover:border-dark/35">
            <Share2 className="size-3.5" />
            Share
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-dark/15 px-3.5 py-1.5 text-xs font-semibold text-dark/70 transition-colors hover:border-dark/35">
            <Download className="size-3.5" />
            Download
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl">
        <img src={current.image} alt={current.label} className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
      </div>

      <div className="relative flex items-center gap-2">
        <div className="flex flex-1 gap-2.5 overflow-x-auto pb-1">
          {PRODUCT_VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActiveView(v.id)}
              className={cn(
                "flex shrink-0 flex-col items-center gap-1.5 rounded-lg border-2 p-1 transition-colors",
                activeView === v.id ? "border-primary" : "border-transparent",
              )}
            >
              <span className="w-20 overflow-hidden rounded-md border border-dark/10 sm:w-24">
                <img src={v.image} alt={v.label} className="aspect-square w-full object-cover" />
              </span>
              <span className="text-[11px] text-dark/60">{v.label}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-dark/15 text-dark/50 transition-colors hover:border-dark/35 hover:text-dark"
          aria-label="Scroll thumbnails"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
