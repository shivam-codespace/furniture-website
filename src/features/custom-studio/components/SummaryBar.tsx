import { Boxes, Layers, Palette, Ruler, Sparkles, Sofa } from "lucide-react";
import {
  BED_SIZES,
  FINISHES,
  HEADBOARDS,
  STORAGE_TYPES,
  UPHOLSTERY,
  WOOD_TYPES,
} from "@/features/custom-studio/data/options";
import type { CustomizationState } from "@/features/custom-studio/types";

export function SummaryBar({ value }: { value: CustomizationState }) {
  const wood = WOOD_TYPES.find((w) => w.id === value.woodType);
  const finish = FINISHES.find((f) => f.id === value.finish);
  const headboard = HEADBOARDS.find((h) => h.id === value.headboard);
  const storage = STORAGE_TYPES.find((s) => s.id === value.storage);
  const size = BED_SIZES.find((s) => s.id === value.size);
  const upholstery = UPHOLSTERY.find((u) => u.id === value.upholstery);

  const items = [
    { icon: Layers, label: "Wood", value: wood?.label ?? "—" },
    { icon: Palette, label: "Finish", value: finish?.label ?? "—" },
    { icon: Sofa, label: "Headboard", value: headboard?.label ?? "—" },
    { icon: Boxes, label: "Storage", value: storage?.label ?? "—" },
    { icon: Ruler, label: "Size", value: size?.label.split(" (")[0] ?? "—" },
    { icon: Sparkles, label: "Upholstery", value: upholstery?.label ?? "—" },
    { icon: Boxes, label: "Add-ons", value: `${value.addons.length} Add-ons` },
  ];

  return (
    <div className="rounded-2xl border border-dark/8 bg-white p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-dark">Your Custom Bed Summary</h3>
      <div className="mt-4 flex flex-nowrap gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-y-5 sm:overflow-visible sm:pb-0 lg:grid-cols-7">
        {items.map(({ icon: Icon, label, value: v }) => (
          <div key={label} className="flex shrink-0 flex-col items-center gap-1.5 text-center sm:gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary sm:size-10">
              <Icon className="size-3.5 sm:size-5" strokeWidth={1.6} />
            </span>
            <div className="flex w-14 flex-col sm:w-auto">
              <span className="truncate text-[9px] font-semibold text-dark sm:text-xs">{label}</span>
              <span className="truncate text-[8px] text-dark/50 sm:text-[11px]">{v}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
