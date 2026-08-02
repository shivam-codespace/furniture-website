import { PhoneCall } from "lucide-react";
import { FilterGroup } from "@/features/shop/components/FilterGroup";

const MATERIALS = [
  { label: "Sheesham Wood", count: 56 },
  { label: "Teak Wood", count: 38 },
  { label: "Mango Wood", count: 28 },
  { label: "Engineered Wood", count: 44 },
  { label: "Pine Wood", count: 19 },
  { label: "Rosewood", count: 12 },
];

const FINISHES = [
  { label: "Natural", count: 28 },
  { label: "Honey", count: 34 },
  { label: "Walnut", count: 40 },
  { label: "Dark Walnut", count: 30 },
  { label: "Wenge", count: 15 },
];

const FEATURES = [
  { label: "Storage", count: 78 },
  { label: "Upholstered", count: 34 },
  { label: "Solid Wood", count: 92 },
  { label: "Customizable", count: 40 },
  { label: "Hand Carved", count: 21 },
];

export function Sidebar() {
  return (
    <aside className="flex w-full flex-col gap-6">
      <div className="rounded-2xl border border-dark/8 bg-white p-5">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-dark/70">Filter By</h3>
          <button className="text-xs font-medium text-dark/40 hover:text-primary">Clear All</button>
        </div>

        <div className="border-t border-dark/8 py-5">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-dark/70">
            Price Range
          </h4>
          <div className="relative h-1 rounded-full bg-dark/10">
            <div className="absolute inset-y-0 left-0 w-[15%] rounded-full bg-primary" />
            <div className="absolute -top-1.5 left-[15%] size-4 -translate-x-1/2 rounded-full border-2 border-primary bg-white shadow" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-medium text-dark/60">
            <span>₹5,000</span>
            <span>₹2,00,000+</span>
          </div>
        </div>

        <FilterGroup title="Material" options={MATERIALS} />
        <FilterGroup title="Finish" options={FINISHES} />
        <FilterGroup title="Features" options={FEATURES} />
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-primary-50 p-5">
        <h4 className="font-heading text-base text-dark">Need Help Choosing?</h4>
        <p className="text-sm leading-relaxed text-dark/60">
          Talk to our furniture expert for personalized recommendations.
        </p>
        <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-dark/20 bg-white px-4 py-2.5 text-xs font-semibold text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white">
          Book Free Consultation
          <PhoneCall className="size-3.5" strokeWidth={2} />
        </button>
      </div>
    </aside>
  );
}
