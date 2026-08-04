import { Hammer, PackageCheck, ShieldCheck, Sparkles, Users } from "lucide-react";

const REASONS = [
  { icon: Sparkles, title: "Made Just for You", desc: "Designed as per your style and requirements." },
  { icon: PackageCheck, title: "Premium Materials", desc: "Handpicked, verified & quality checked." },
  { icon: Hammer, title: "Expert Craftsmanship", desc: "Skilled artisans with 75+ years of legacy." },
  { icon: ShieldCheck, title: "Complete Transparency", desc: "See every material & process we use." },
  { icon: Users, title: "Lifetime Relationship", desc: "We are with you for the life of your furniture." },
];

export function WhyCustomMade() {
  return (
    <section className="border-t border-dark/8 bg-background py-14">
      <div className="container-luxury">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-medium text-dark sm:text-3xl">Why Choose Custom Made?</h2>
          <p className="mt-2 text-sm text-dark/55">Every detail is crafted as per your preference</p>
        </div>

        <div className="mt-8 flex flex-nowrap gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:grid sm:grid-cols-5 sm:gap-8 sm:overflow-visible sm:pb-0">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex w-24 shrink-0 flex-col items-center gap-1.5 text-center sm:w-auto sm:gap-2.5">
              <Icon className="size-5 text-primary sm:size-7" strokeWidth={1.4} />
              <h3 className="text-[10px] font-semibold leading-tight text-dark sm:text-sm">{title}</h3>
              <p className="hidden text-xs leading-relaxed text-dark/50 sm:block">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
