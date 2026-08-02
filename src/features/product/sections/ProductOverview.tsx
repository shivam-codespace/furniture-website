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
  "100% Verified Materials",
  "Lifetime Service Support",
  "Crafted for Generations",
  "Certifications Included",
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
                {collection} Collection
              </span>
              <h1 className="text-balance font-heading text-4xl font-medium leading-[1.1] text-dark sm:text-5xl">
                {product.name}
              </h1>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {TRUST_POINTS.map((point) => (
                  <span key={point} className="flex items-center gap-2 text-xs text-dark/60">
                    <Check className="size-3.5 shrink-0 text-success" strokeWidth={2.5} />
                    {point}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-heading text-3xl font-semibold text-dark">
                  {formatINR(product.price)}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-dark/60">
                  <Star className="size-4 fill-gold text-gold" strokeWidth={0} />
                  <span className="font-semibold text-dark">{product.rating}</span>(
                  {product.reviewCount} reviews)
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-5">
                <button className="inline-flex h-12 items-center gap-2.5 rounded-full bg-dark px-7 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
                  Add to Cart
                  <ShoppingCart className="size-4" strokeWidth={2} />
                </button>
                <button className="group inline-flex items-center gap-2.5 text-sm font-medium text-dark/70 hover:text-dark">
                  <span className="flex size-9 items-center justify-center rounded-full border border-dark/20 transition-colors group-hover:border-dark">
                    <Play className="size-3 translate-x-px fill-dark text-dark" />
                  </span>
                  Watch Craftsmanship
                </button>
              </div>
            </div>

            <div className="flex gap-3">
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
