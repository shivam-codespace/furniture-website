import { BadgeCheck, Camera, ShieldCheck, Truck } from "lucide-react";

const ANNOUNCEMENTS = [
  { icon: BadgeCheck, label: "100% Verified Materials" },
  { icon: Camera, label: "Real Photos, No Stock Images" },
  { icon: ShieldCheck, label: "Lifetime Support" },
  { icon: Truck, label: "Secure Delivery" },
];

export function AnnouncementBar() {
  return (
    <div className="hidden bg-dark md:block">
      <div className="container-luxury flex items-center justify-center gap-8 py-2.5">
        {ANNOUNCEMENTS.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-white/70">
            <Icon className="size-3.5 text-gold" strokeWidth={1.6} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
