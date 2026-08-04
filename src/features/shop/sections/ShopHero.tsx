import { ArrowRight } from "lucide-react";
import bedroomCleanImg from "@/assets/images/hero/bedroom-clean.jpg";

export function ShopHero() {
  return (
    <section className="overflow-hidden rounded-xl bg-gradient-to-r from-primary-50 via-secondary-50 to-background sm:rounded-3xl">
      <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col gap-1 px-3 py-3 sm:gap-3 sm:px-8 sm:py-8 md:px-10 md:py-9">
          <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-secondary-600 sm:text-xs sm:tracking-[0.25em]">
            Crafted for Generations
          </span>
          <h1 className="text-balance font-heading text-[11px] font-medium leading-[1.2] text-dark sm:text-2xl sm:leading-[1.15] md:text-3xl">
            Premium Furniture. Verified in Every Detail.
          </h1>
          <p className="hidden max-w-sm text-sm leading-relaxed text-dark/60 sm:block">
            Real materials. Real photos. Real transparency.
            <br />
            Only on Sharma Furnitures.
          </p>
          <button className="group mt-1 inline-flex h-6 w-fit items-center gap-1 rounded-full bg-dark px-2 text-[7px] font-semibold tracking-wider text-white transition-colors hover:bg-primary-700 sm:h-11 sm:gap-2.5 sm:px-5 sm:text-xs">
            Explore Our Collection
            <ArrowRight className="size-2 transition-transform group-hover:translate-x-1 sm:size-4" strokeWidth={2} />
          </button>
        </div>
        <div className="h-[100px] w-full sm:h-[230px] sm:w-full md:h-[270px] lg:h-[308px]">
          <img
            src={bedroomCleanImg}
            alt="A Sharma bed styled in a sunlit bedroom"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
