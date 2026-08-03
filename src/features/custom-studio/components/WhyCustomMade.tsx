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

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2.5 text-center">
              <Icon className="size-7 text-primary" strokeWidth={1.4} />
              <h3 className="text-sm font-semibold text-dark">{title}</h3>
              <p className="text-xs leading-relaxed text-dark/50">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
