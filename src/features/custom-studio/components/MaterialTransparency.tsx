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

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {MATERIALS.map((material) => (
          <div key={material.id} className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-xl">
              {material.image ? (
                <img src={material.image} alt={material.name} className="aspect-square w-full object-cover" />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-primary-800">
                  <Paintbrush className="size-8 text-primary-200" strokeWidth={1.4} />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-dark">{material.name}</span>
              <span className="text-xs text-dark/50">{material.spec}</span>
              <span className="text-xs text-dark/40">{material.batch}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
