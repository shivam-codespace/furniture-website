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
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
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
                  <Icon className="size-8 text-primary-400" strokeWidth={1.2} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-2.5 text-white">
                <Icon className="size-3.5" strokeWidth={1.75} />
                <span className="text-[11px] font-medium">{label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grain-overlay relative flex flex-col justify-between overflow-hidden rounded-2xl bg-dark p-6">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Custom Made for You
            </span>
            <p className="text-sm leading-relaxed text-white/75">
              Can&apos;t find what you&apos;re looking for? Let&apos;s create something unique.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-dark transition-colors hover:bg-secondary-300">
              Design Your Own
              <PenTool className="size-3.5" strokeWidth={2} />
            </button>
            <a href="/" className="inline-flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white">
              <PhoneCall className="size-3.5" strokeWidth={1.75} />
              Book Consultation
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
