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
    <div className="rounded-2xl border border-dark/8 bg-white p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-dark">Your Custom Bed Summary</h3>
      <div className="mt-5 grid grid-cols-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-7">
        {items.map(({ icon: Icon, label, value: v }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary">
              <Icon className="size-5" strokeWidth={1.6} />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-dark">{label}</span>
              <span className="text-[11px] text-dark/50">{v}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
