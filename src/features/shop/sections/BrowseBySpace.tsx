import { ArrowRight, BedDouble, PenTool, PhoneCall, Sofa, UtensilsCrossed } from "lucide-react";
import { Briefcase, Baby } from "lucide-react";
import bedroomWhiteImg from "@/assets/images/categories/bedroom-white.jpg";
import diningRoomImg from "@/assets/images/categories/dining-room.jpg";

const SPACES = [
  { label: "Bedroom", icon: BedDouble, image: bedroomWhiteImg },
  { label: "Living Room", icon: Sofa, image: null },
  { label: "Dining Room", icon: UtensilsCrossed, image: diningRoomImg },
  { label: "Home Office", icon: Briefcase, image: null },
  { label: "Kids Room", icon: Baby, image: null },
];

export function BrowseBySpace() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
          Browse by Space
        </span>
        <a
          href="/"
          className="group flex items-center gap-1.5 text-xs font-semibold text-dark/60 hover:text-primary"
        >
          View All Spaces
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
          {SPACES.map(({ label, icon: Icon, image }) => (
            <a key={label} href="/" className="group relative aspect-square overflow-hidden rounded-xl bg-primary-100">
              {image ? (
                <img
                  src={image}
                  alt={label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-200">
                  <Icon className="size-5 text-primary-400 sm:size-8" strokeWidth={1.2} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-1 p-1.5 text-white sm:gap-1.5 sm:p-2.5">
                <Icon className="size-2.5 sm:size-3.5" strokeWidth={1.75} />
                <span className="text-[8px] font-medium sm:text-[11px]">{label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grain-overlay relative mx-auto flex w-[88%] flex-col justify-between overflow-hidden rounded-xl bg-dark p-3 sm:mx-0 sm:w-full sm:rounded-2xl sm:p-6">
          <div className="flex flex-col gap-1 sm:gap-3">
            <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-gold sm:text-[11px] sm:tracking-[0.2em]">
              Custom Made for You
            </span>
            <p className="text-[10px] leading-relaxed text-white/75 sm:text-sm">
              Can&apos;t find what you&apos;re looking for? Let&apos;s create something unique.
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-1.5 sm:mt-6 sm:gap-3">
            <button className="inline-flex w-fit items-center gap-1 rounded-full bg-gold px-2.5 py-1.5 text-[9px] font-semibold text-dark transition-colors hover:bg-secondary-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs">
              Design Your Own
              <PenTool className="size-2.5 sm:size-3.5" strokeWidth={2} />
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-1 text-[9px] font-medium text-white/70 hover:text-white sm:gap-2 sm:text-xs"
            >
              <PhoneCall className="size-2.5 sm:size-3.5" strokeWidth={1.75} />
              Book Consultation
              <ArrowRight className="size-2.5 sm:size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
