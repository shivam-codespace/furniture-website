import { CreditCard, RotateCcw, Star, Truck } from "lucide-react";

const BADGES = [
  { icon: CreditCard, label: "Secure Payments" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: Truck, label: "On-time Delivery" },
];

export function TrustBar() {
  return (
    <section className="border-t border-dark/8 bg-background">
      <div className="container-luxury flex flex-wrap items-center justify-between gap-4 py-6 text-sm">
        <span className="font-medium text-dark/70">
          Trusted by <span className="font-semibold text-dark">10,000+ families</span> across India
        </span>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-success text-success" strokeWidth={0} />
            ))}
          </div>
          <span className="text-dark/60">
            Trustpilot <span className="font-semibold text-dark">(2,345+ Reviews)</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-dark/60">
              <Icon className="size-4" strokeWidth={1.6} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
