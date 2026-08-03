import { useState } from "react";
import { Check, ChevronDown, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ADDONS,
  BED_SIZES,
  FINISHES,
  HEADBOARDS,
  STORAGE_TYPES,
  UPHOLSTERY,
  WOOD_TYPES,
} from "@/features/custom-studio/data/options";
import type { CustomizationState } from "@/features/custom-studio/types";

interface CustomizePanelProps {
  value: CustomizationState;
  onChange: (patch: Partial<CustomizationState>) => void;
  onToggleAddon: (id: string) => void;
}

function FieldLabel({ children, hint }: { children: string; hint?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/70">{children}</span>
      {hint && <Info className="size-3.5 text-dark/30" strokeWidth={1.6} />}
    </div>
  );
}

export function CustomizePanel({ value, onChange, onToggleAddon }: CustomizePanelProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex flex-col gap-6 border-t border-dark/8 pt-6">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center justify-between text-left"
      >
        <h2 className="text-sm font-semibold text-dark">2. Customize Your Bed</h2>
        <ChevronDown className={cn("size-4 text-dark/50 transition-transform", expanded ? "" : "-rotate-90")} />
      </button>

      {expanded && (
        <div className="flex flex-col gap-7">
          {/* Wood Type */}
          <div className="flex flex-col gap-3">
            <FieldLabel hint>Wood Type</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Select your preferred wood</p>
            <div className="flex flex-col gap-2">
              {WOOD_TYPES.map((wood) => (
                <button
                  key={wood.id}
                  type="button"
                  onClick={() => onChange({ woodType: wood.id })}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                    value.woodType === wood.id ? "border-primary bg-primary-50" : "border-dark/10 hover:border-dark/25",
                  )}
                >
                  <span className="size-6 shrink-0 rounded-md" style={{ backgroundColor: wood.color }} />
                  <span className="flex-1 text-sm text-dark">{wood.label}</span>
                  {value.woodType === wood.id && (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <button type="button" className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700">
              View Wood Details
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          {/* Finish */}
          <div className="flex flex-col gap-3">
            <FieldLabel>Finish</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Select the finish for your furniture</p>
            <div className="flex flex-wrap gap-4">
              {FINISHES.map((finish) => (
                <button key={finish.id} type="button" onClick={() => onChange({ finish: finish.id })} className="flex flex-col items-center gap-2">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full ring-2 ring-offset-2 transition-all",
                      value.finish === finish.id ? "ring-primary" : "ring-transparent",
                    )}
                  >
                    <span className="size-9 rounded-full border border-dark/10" style={{ backgroundColor: finish.color }} />
                  </span>
                  <span className="text-xs text-dark/60">{finish.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700">
              View Finish Details
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          {/* Headboard Design */}
          <div className="flex flex-col gap-3">
            <FieldLabel hint>Headboard Design</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Choose your headboard style</p>
            <div className="grid grid-cols-4 gap-2.5">
              {HEADBOARDS.map((hb) => (
                <button
                  key={hb.id}
                  type="button"
                  onClick={() => onChange({ headboard: hb.id })}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-lg border-2 p-1.5 transition-colors",
                    value.headboard === hb.id ? "border-primary" : "border-transparent",
                  )}
                >
                  <span className="w-full overflow-hidden rounded-md border border-dark/10">
                    <img src={hb.image} alt={hb.label} className="aspect-square w-full object-cover" />
                  </span>
                  <span className="text-[11px] text-dark/60">{hb.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700">
              View More Designs
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          {/* Storage Type */}
          <div className="flex flex-col gap-3">
            <FieldLabel hint>Storage Type</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Choose storage for your bed</p>
            <div className="flex flex-col gap-2">
              {STORAGE_TYPES.map((storage) => (
                <label
                  key={storage.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition-colors",
                    value.storage === storage.id ? "border-primary bg-primary-50 text-dark" : "border-dark/10 text-dark/70 hover:border-dark/25",
                  )}
                >
                  <input
                    type="radio"
                    name="storage"
                    className="sr-only"
                    checked={value.storage === storage.id}
                    onChange={() => onChange({ storage: storage.id })}
                  />
                  <span
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-full border-2",
                      value.storage === storage.id ? "border-primary" : "border-dark/25",
                    )}
                  >
                    {value.storage === storage.id && <span className="size-2 rounded-full bg-primary" />}
                  </span>
                  {storage.label}
                </label>
              ))}
            </div>
          </div>

          {/* Bed Size */}
          <div className="flex flex-col gap-3">
            <FieldLabel>Bed Size</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Select bed size</p>
            <div className="flex flex-wrap gap-2">
              {BED_SIZES.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => onChange({ size: size.id })}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                    value.size === size.id
                      ? "border-dark bg-dark text-white"
                      : "border-dark/15 text-dark/70 hover:border-dark/35",
                  )}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Upholstery */}
          <div className="flex flex-col gap-3">
            <FieldLabel hint>Upholstery (Headboard)</FieldLabel>
            <p className="-mt-2 text-xs text-dark/45">Choose upholstery material</p>
            <div className="flex flex-wrap gap-4">
              {UPHOLSTERY.map((fabric) => (
                <button key={fabric.id} type="button" onClick={() => onChange({ upholstery: fabric.id })} className="flex flex-col items-center gap-2">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full ring-2 ring-offset-2 transition-all",
                      value.upholstery === fabric.id ? "ring-primary" : "ring-transparent",
                    )}
                  >
                    <span className="size-9 rounded-full border border-dark/10" style={{ backgroundColor: fabric.color }} />
                  </span>
                  <span className="text-xs text-dark/60">{fabric.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700">
              View More Fabrics
              <ChevronRight className="size-3.5" />
            </button>
          </div>

          {/* Additional Options */}
          <div className="flex flex-col gap-3">
            <button type="button" className="flex items-center justify-between text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/70">Additional Options</span>
              <ChevronDown className="size-4 text-dark/50" />
            </button>
            <div className="flex flex-col gap-2.5">
              {ADDONS.map((addon) => (
                <label key={addon.id} className="flex cursor-pointer items-center gap-2.5 text-sm text-dark/75">
                  <input
                    type="checkbox"
                    checked={value.addons.includes(addon.id)}
                    onChange={() => onToggleAddon(addon.id)}
                    className="size-4 shrink-0 rounded border-dark/25 accent-primary"
                  />
                  {addon.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
