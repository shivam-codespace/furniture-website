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
    <section className="rounded-xl bg-primary-50/60 px-2 py-3 sm:rounded-2xl sm:px-8 sm:py-8">
      <div className="grid grid-cols-5 gap-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
        {ITEMS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-start sm:gap-3.5 sm:text-left"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-primary sm:size-11">
              <Icon className="size-3 sm:size-5" strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-[8px] font-semibold leading-tight text-dark sm:text-sm">{title}</h3>
              <p className="hidden text-xs leading-snug text-dark/55 sm:block">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
