import { CreditCard, RotateCcw, Star, Truck } from "lucide-react";

const BADGES = [
  { icon: CreditCard, label: "Secure Payments" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: Truck, label: "On-time Delivery" },
];

export function TrustBar() {
  return (
    <section className="border-t border-dark/8 bg-background">
      <div className="container-luxury flex items-center justify-between gap-1 py-2.5 text-[8px] sm:flex-wrap sm:gap-4 sm:py-6 sm:text-sm">
        <span className="shrink-0 font-medium text-dark/70">
          <span className="hidden sm:inline">Trusted by </span>
          <span className="font-semibold text-dark">10,000+ families</span>
          <span className="hidden sm:inline"> across India</span>
        </span>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-2 fill-success text-success sm:size-3.5" strokeWidth={0} />
            ))}
          </div>
          <span className="text-dark/60">
            Trustpilot
            <span className="hidden sm:inline"> (<span className="font-semibold text-dark">2,345+ Reviews</span>)</span>
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:flex-wrap sm:gap-6">
          {BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="flex shrink-0 items-center gap-0.5 text-dark/60 sm:gap-2">
              <Icon className="size-2.5 sm:size-4" strokeWidth={1.6} />
              <span className="hidden min-[460px]:inline">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
