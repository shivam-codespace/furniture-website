import { Gift, Heart, Home, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Heart,
    title: "Lifetime Support",
    description: "We're with you for the entire life of your furniture.",
  },
  {
    icon: Users,
    title: "Dedicated Experts",
    description: "Our team of furniture experts is always ready to assist.",
  },
  {
    icon: Gift,
    title: "Hassle Free Experience",
    description: "We make sure your experience is smooth and worry-free.",
  },
  {
    icon: Home,
    title: "Your Satisfaction Matters",
    description: "We go the extra mile to make you happy.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-t border-dark/8 py-10 md:py-12">
      <div className="container-luxury">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-semibold text-dark">{title}</h3>
                <p className="text-xs leading-snug text-dark/55">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
