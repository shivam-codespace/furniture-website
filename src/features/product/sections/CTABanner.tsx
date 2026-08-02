import { ArrowRight, Award, Clock, ShieldCheck } from "lucide-react";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";

const STATS = [
  { icon: Award, label: "75+ Years", sub: "of Trust" },
  { icon: ShieldCheck, label: "100%", sub: "Verified Materials" },
  { icon: Clock, label: "Lifetime", sub: "Support" },
];

export function CTABanner() {
  return (
    <section className="bg-background pb-16 md:pb-20">
      <div className="container-luxury">
        <div className="relative overflow-hidden rounded-3xl bg-dark">
          <img
            src={workshopCraftsmanImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/50" />

          <div className="relative flex flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-between md:py-14">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                75 Years of Craftsmanship
              </span>
              <h2 className="text-balance font-heading text-2xl font-medium leading-[1.2] text-white sm:text-3xl">
                Handcrafted for your home.
                <br />
                Built for generations.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              {STATS.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="size-5 text-gold" strokeWidth={1.5} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">{label}</span>
                    <span className="text-[11px] text-white/55">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="group inline-flex h-12 w-fit shrink-0 items-center gap-2.5 rounded-full bg-white px-6 text-sm font-semibold text-dark transition-colors hover:bg-white/90">
              Order Your Bed Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
