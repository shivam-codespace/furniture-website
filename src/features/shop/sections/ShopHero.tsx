import { ArrowRight } from "lucide-react";
import bedroomCleanImg from "@/assets/images/hero/bedroom-clean.jpg";

export function ShopHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-50 via-secondary-50 to-background">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="flex flex-col gap-3 px-8 py-8 sm:px-10 sm:py-9">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
            Crafted for Generations
          </span>
          <h1 className="text-balance font-heading text-2xl font-medium leading-[1.15] text-dark sm:text-3xl">
            Premium Furniture. Verified in Every Detail.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-dark/60">
            Real materials. Real photos. Real transparency.
            <br />
            Only on Sharma Furnitures.
          </p>
          <button className="group mt-1 inline-flex h-11 w-fit items-center gap-2.5 rounded-full bg-dark px-5 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-primary-700">
            Explore Our Collection
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </button>
        </div>
        <div className="h-[230px] w-full sm:h-[270px] lg:h-[308px]">
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
