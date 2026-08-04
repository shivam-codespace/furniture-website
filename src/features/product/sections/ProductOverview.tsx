import { useState } from "react";
import { ArrowDown, Check, Play, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/features/shop/types/product";
import { StepperNav } from "@/features/product/components/StepperNav";
import { cn } from "@/lib/utils";
import productFrontImg from "@/assets/images/products/product-front.jpg";
import productSideLeftImg from "@/assets/images/products/product-side-left.jpg";
import productSideRightImg from "@/assets/images/products/product-side-right.jpg";
import productStudioImg from "@/assets/images/products/product-studio.jpg";

const TRUST_POINTS = [
  { full: "100% Verified Materials", short: "Verified" },
  { full: "Lifetime Service Support", short: "Lifetime" },
  { full: "Crafted for Generations", short: "Generations" },
  { full: "Certifications Included", short: "Certified" },
];

function formatINR(value: number) {
  return `₹ ${value.toLocaleString("en-IN")}`;
}

interface ProductOverviewProps {
  product: Product;
  collection: string;
}

export function ProductOverview({ product, collection }: ProductOverviewProps) {
  const gallery = [product.image, productFrontImg, productSideLeftImg, productSideRightImg, productStudioImg].filter(
    (src, i, arr) => arr.indexOf(src) === i,
  );
  const [active, setActive] = useState(0);

  return (
    <section id="overview" className="scroll-mt-24 bg-background pt-8">
      <div className="container-luxury flex gap-10">
        <StepperNav />

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-10 lg:gap-y-6">
            {/* Name + trust points — above the gallery at every size */}
            <div className="order-1 flex flex-col gap-3 sm:gap-5 lg:col-start-1 lg:row-start-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary-600 sm:text-xs sm:tracking-[0.25em]">
                {collection} Collection
              </span>
              <h1 className="text-balance font-heading text-2xl font-medium leading-[1.15] text-dark sm:text-4xl sm:leading-[1.1] lg:text-5xl">
                {product.name}
              </h1>

              <div className="flex flex-nowrap items-center justify-between gap-1 sm:grid sm:grid-cols-2 sm:justify-normal sm:gap-x-4 sm:gap-y-2.5">
                {TRUST_POINTS.map((point) => (
                  <span
                    key={point.full}
                    className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[9px] text-dark/60 sm:gap-2 sm:text-xs"
                  >
                    <Check className="size-2.5 shrink-0 text-success sm:size-3.5" strokeWidth={2.5} />
                    <span className="sm:hidden">{point.short}</span>
                    <span className="hidden sm:inline">{point.full}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery — sits between the name and the price/CTA on mobile,
                spans both rows beside them once the two-column desktop layout kicks in. */}
            <div className="order-2 flex gap-3 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="flex flex-1 flex-col gap-3">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50">
                  <img
                    src={gallery[active]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex w-16 shrink-0 flex-col gap-2.5 sm:w-20">
                {gallery.slice(0, 4).map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActive(i)}
                    className={cn(
                      "aspect-square overflow-hidden rounded-lg border-2 transition-colors",
                      active === i ? "border-dark" : "border-transparent",
                    )}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
                <button className="flex aspect-square items-center justify-center rounded-full border border-dark/15 bg-white text-[10px] font-semibold text-dark/70 shadow-sm hover:border-dark">
                  360°
                </button>
              </div>
            </div>

            {/* Price + CTAs — below the gallery on mobile, below the trust
                points in the left column once desktop's two-column grid kicks in. */}
            <div className="order-3 flex flex-col gap-3 sm:gap-5 lg:col-start-1 lg:row-start-2">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-heading text-xl font-semibold text-dark sm:text-3xl">
                  {formatINR(product.price)}
                </span>
                <span className="flex items-center gap-1 text-xs text-dark/60 sm:gap-1.5 sm:text-sm">
                  <Star className="size-3.5 fill-gold text-gold sm:size-4" strokeWidth={0} />
                  <span className="font-semibold text-dark">{product.rating}</span>(
                  {product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-dark px-4 text-xs font-semibold text-white transition-colors hover:bg-primary-700 sm:h-12 sm:gap-2.5 sm:px-7 sm:text-sm">
                  Add to Cart
                  <ShoppingCart className="size-3.5 sm:size-4" strokeWidth={2} />
                </button>
                <button className="group inline-flex items-center gap-1.5 text-xs font-medium text-dark/70 hover:text-dark sm:gap-2.5 sm:text-sm">
                  <span className="flex size-7 items-center justify-center rounded-full border border-dark/20 transition-colors group-hover:border-dark sm:size-9">
                    <Play className="size-2.5 translate-x-px fill-dark text-dark sm:size-3" />
                  </span>
                  Watch Craftsmanship
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-medium text-dark/40">
            <ArrowDown className="size-3.5 animate-bounce" strokeWidth={2} />
            Scroll to Explore
          </div>
        </div>
      </div>
    </section>
  );
}
