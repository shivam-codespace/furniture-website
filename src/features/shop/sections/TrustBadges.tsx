import { Camera, IdCard, Key, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Verified Materials",
    description: "Every material is inspected and documented",
  },
  {
    icon: Camera,
    title: "Real Workshop Photos",
    description: "What you see is what goes into your furniture",
  },
  {
    icon: IdCard,
    title: "Furniture Passport",
    description: "Each product has a unique identity & warranty",
  },
  {
    icon: Sparkles,
    title: "Quality Inspection",
    description: "Multi-level quality check before delivery",
  },
  {
    icon: Key,
    title: "Lifetime Support",
    description: "We're with you for the life of your furniture",
  },
];

export function TrustBadges() {
  return (
    <section className="rounded-2xl bg-primary-50/60 px-6 py-8 sm:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {ITEMS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <Icon className="size-5" strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-semibold text-dark">{title}</h3>
              <p className="text-xs leading-snug text-dark/55">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
