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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="flex flex-col gap-4 rounded-2xl border border-dark/8 bg-white p-5 sm:p-6">
        <div>
          <span className="text-xs text-dark/50">Estimated Price</span>
          <div className="mt-1 font-heading text-3xl font-semibold text-dark">₹{price.toLocaleString("en-IN")}</div>
          <span className="text-xs text-dark/45">Inclusive of all taxes</span>
        </div>
        <div className="rounded-xl bg-primary-50 px-4 py-3">
          <p className="text-sm font-semibold text-dark">EMI starts at ₹{emi.toLocaleString("en-IN")}/month</p>
          <button type="button" className="mt-0.5 text-xs font-semibold text-primary hover:text-primary-700">
            View EMI Options
          </button>
        </div>
        <div className="rounded-xl border border-success/30 bg-success/5 px-4 py-3">
          <p className="text-sm font-semibold text-success">
            You Save ₹{savings.toLocaleString("en-IN")} ({discountPercent}%)
          </p>
          <span className="text-xs text-dark/50">on this custom design</span>
        </div>
      </div>

      <div className="rounded-2xl border border-dark/8 bg-white p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dark/50">What&apos;s Included</span>
        <ul className="mt-4 flex flex-col gap-3">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-dark/75">
              <CircleCheck className="size-4 shrink-0 text-success" strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-dark p-5 text-white sm:p-6">
        <div>
          <h3 className="font-heading text-lg font-medium">Ready to Order?</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/55">
            Your custom furniture will be handcrafted specially for you.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <button className="h-11 rounded-full bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-600">
            Add to Cart
          </button>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 text-sm font-semibold text-white transition-colors hover:border-white/50">
            <Phone className="size-3.5" />
            Request Expert Call
          </button>
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-white/60">
          <Truck className="size-4 shrink-0" strokeWidth={1.6} />
          Delivery in 18-22 Days
        </div>
      </div>
    </div>
  );
}
