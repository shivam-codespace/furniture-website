import { Check } from "lucide-react";
import { BOX_ITEMS, SPECS } from "@/features/product/data/productDetail";
import dimensionDiagramImg from "@/assets/images/passport/dimension-diagram.jpg";

export function SpecsSection() {
  return (
    <section id="specifications" className="scroll-mt-24 bg-background py-16 md:py-20">
      <div className="container-luxury flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-dark/30">06</span>
          <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">Specifications</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr_260px]">
          <div className="flex flex-col divide-y divide-dark/8 rounded-2xl border border-dark/8 bg-white px-5">
            {SPECS.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                <span className="text-dark/50">{row.label}</span>
                <span className="font-medium text-dark">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-dark/8 bg-white p-4">
            <img
              src={dimensionDiagramImg}
              alt="Bed diagram with dimensions 76in length, 60in width, 42in height, and construction callouts"
              className="w-full"
            />
          </div>

          <div className="rounded-2xl border border-dark/8 bg-white p-5">
            <h3 className="mb-4 font-heading text-base text-dark">What&apos;s in the Box</h3>
            <ul className="flex flex-col gap-3">
              {BOX_ITEMS.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 text-dark/70">
                    <Check className="size-3.5 text-success" strokeWidth={2.5} />
                    {item.label}
                  </span>
                  <span className="text-dark/40">{item.qty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
