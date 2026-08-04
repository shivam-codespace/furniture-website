import { ChevronRight, Paintbrush } from "lucide-react";
import { MATERIALS } from "@/features/custom-studio/data/options";

export function MaterialTransparency() {
  return (
    <div className="rounded-2xl border border-dark/8 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-dark">Material Transparency</h3>
        <button type="button" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-700">
          View Details
          <ChevronRight className="size-3.5" />
        </button>
      </div>

      <div className="mt-5 flex flex-nowrap gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-5">
        {MATERIALS.map((material) => (
          <div key={material.id} className="flex w-20 shrink-0 flex-col gap-2 sm:w-auto">
            <div className="overflow-hidden rounded-xl">
              {material.image ? (
                <img src={material.image} alt={material.name} className="aspect-square w-full object-cover" />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-primary-800">
                  <Paintbrush className="size-5 text-primary-200 sm:size-8" strokeWidth={1.4} />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="truncate text-[10px] font-semibold text-dark sm:text-sm">{material.name}</span>
              <span className="truncate text-[9px] text-dark/50 sm:text-xs">{material.spec}</span>
              <span className="hidden text-xs text-dark/40 sm:block">{material.batch}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
