import { CircleCheck, Phone, Truck } from "lucide-react";

const INCLUDED = [
  "Premium Quality Materials",
  "Expert Craftsmanship",
  "5 Years Warranty",
  "Free Delivery & Installation",
  "Lifetime Support",
];

export function PricingPanel({ price }: { price: number }) {
  const discountPercent = 21;
  const savings = Math.round((price * discountPercent) / (100 - discountPercent));
  const emi = Math.round(price / 27);

  return (
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-1 lg:grid-cols-3">
      {/* Estimated Price — its own row, separate from the cards below */}
      <div className="flex flex-col gap-3 rounded-2xl border border-dark/8 bg-white p-4 sm:gap-4 sm:p-6">
        <div className="flex flex-nowrap items-start gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-col sm:gap-4 sm:overflow-visible sm:pb-0">
          <div className="shrink-0">
            <span className="text-[9px] text-dark/50 sm:text-xs">Estimated Price</span>
            <div className="font-heading text-2xl font-semibold text-dark sm:mt-1 sm:text-3xl">
              ₹{price.toLocaleString("en-IN")}
            </div>
            <span className="hidden text-xs text-dark/45 sm:block">Inclusive of all taxes</span>
          </div>
          <div className="shrink-0 rounded-xl bg-primary-50 px-3 py-2 sm:px-4 sm:py-3">
            <p className="whitespace-nowrap text-[9px] font-semibold text-dark sm:text-sm">
              <span className="hidden sm:inline">EMI starts at </span>₹{emi.toLocaleString("en-IN")}
              <span className="sm:hidden">/mo</span>
              <span className="hidden sm:inline">/month</span>
            </p>
            <button type="button" className="mt-0.5 hidden text-xs font-semibold text-primary hover:text-primary-700 sm:block">
              View EMI Options
            </button>
          </div>
          <div className="shrink-0 rounded-xl border border-success/30 bg-success/5 px-3 py-2 sm:px-4 sm:py-3">
            <p className="whitespace-nowrap text-[9px] font-semibold text-success sm:text-sm">
              <span className="hidden sm:inline">You Save </span>₹{savings.toLocaleString("en-IN")} ({discountPercent}%)
            </p>
            <span className="hidden text-xs text-dark/50 sm:block">on this custom design</span>
          </div>
        </div>
      </div>

      {/* What's Included + Ready to Order — their own separate horizontal row on mobile */}
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:contents sm:overflow-visible sm:pb-0">
        <div className="w-[51%] shrink-0 snap-start rounded-xl border border-dark/8 bg-white p-2 sm:w-auto sm:rounded-2xl sm:p-6">
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-dark/50 sm:text-xs">
            What&apos;s Included
          </span>
          <ul className="mt-1.5 flex flex-col gap-1 sm:mt-4 sm:gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-1 text-[10px] leading-tight text-dark/75 sm:gap-2.5 sm:text-sm">
                <CircleCheck className="size-2.5 shrink-0 text-success sm:size-4" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-[51%] shrink-0 snap-start flex-col gap-1.5 rounded-xl bg-dark p-2 text-white sm:w-auto sm:gap-4 sm:rounded-2xl sm:p-6">
          <div>
            <h3 className="font-heading text-xs font-medium sm:text-lg">Ready to Order?</h3>
            <p className="mt-0.5 hidden text-[10px] leading-snug text-white/55 sm:block sm:text-xs">
              Your custom furniture will be handcrafted specially for you.
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2.5">
            <button className="h-6 rounded-full bg-primary text-[9px] font-semibold text-white transition-colors hover:bg-primary-600 sm:h-11 sm:text-sm">
              Add to Cart
            </button>
            <button className="inline-flex h-6 items-center justify-center gap-1 rounded-full border border-white/25 text-[9px] font-semibold text-white transition-colors hover:border-white/50 sm:h-11 sm:gap-2 sm:text-sm">
              <Phone className="size-2.5 sm:size-3.5" />
              Request Expert Call
            </button>
          </div>
          <div className="flex items-center gap-1 border-t border-white/10 pt-1 text-[8px] text-white/60 sm:gap-2 sm:pt-3 sm:text-xs">
            <Truck className="size-2.5 shrink-0 sm:size-4" strokeWidth={1.6} />
            Delivery in 18-22 Days
          </div>
        </div>
      </div>
    </div>
  );
}
