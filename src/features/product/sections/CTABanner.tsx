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
        <div className="relative overflow-hidden rounded-2xl bg-dark sm:rounded-3xl">
          <img
            src={workshopCraftsmanImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/50" />

          <div className="relative flex flex-col gap-5 px-4 py-6 sm:gap-8 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between md:py-14">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gold sm:text-xs sm:tracking-[0.25em]">
                75 Years of Craftsmanship
              </span>
              <h2 className="text-balance font-heading text-lg font-medium leading-[1.2] text-white sm:text-2xl md:text-3xl">
                Handcrafted for your home.
                <br />
                Built for generations.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              {STATS.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-1.5 sm:gap-2.5">
                  <Icon className="size-4 text-gold sm:size-5" strokeWidth={1.5} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-semibold text-white sm:text-sm">{label}</span>
                    <span className="text-[9px] text-white/55 sm:text-[11px]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="group inline-flex h-9 w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-dark transition-colors hover:bg-white/90 sm:h-12 sm:gap-2.5 sm:px-6 sm:text-sm">
              Order Your Bed Now
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 sm:size-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
