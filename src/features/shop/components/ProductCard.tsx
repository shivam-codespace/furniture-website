import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Scan, Star } from "lucide-react";
import type { BadgeTone, Product } from "@/features/shop/types/product";
import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<BadgeTone, string> = {
  dark: "bg-dark text-white",
  green: "bg-success text-white",
  teal: "bg-teal-600 text-white",
  neutral: "bg-white text-dark border border-dark/15",
};

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-dark/8 bg-white transition-shadow hover:shadow-lg sm:rounded-2xl"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-primary-50 sm:aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-1 top-1 rounded px-1 py-0.5 text-[7px] font-bold tracking-wide sm:left-3 sm:top-3 sm:rounded-md sm:px-2 sm:py-1 sm:text-[10px]",
              BADGE_STYLES[product.badge.tone],
            )}
          >
            {product.badge.label}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted((v) => !v);
          }}
          aria-label="Toggle wishlist"
          className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-white/95 text-dark/60 shadow-sm transition-colors hover:text-primary sm:right-3 sm:top-3 sm:size-8"
        >
          <Heart className={cn("size-2.5 sm:size-4", wishlisted && "fill-primary text-primary")} strokeWidth={1.75} />
        </button>
        <span
          aria-label="Quick view"
          className="absolute bottom-1 right-1 hidden size-5 items-center justify-center rounded-md bg-white/95 text-dark/60 shadow-sm transition-colors group-hover:text-primary sm:flex sm:bottom-3 sm:right-3 sm:size-8"
        >
          <Scan className="size-2.5 sm:size-4" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-0.5 p-1 sm:gap-2 sm:p-4">
        <h3 className="line-clamp-2 font-heading text-[11px] leading-tight text-dark sm:line-clamp-none sm:text-base">
          {product.name}
        </h3>
        <p className="hidden text-xs text-dark/50 sm:block">{product.variant}</p>

        <div className="hidden items-center gap-1.5 text-xs sm:flex">
          <Star className="size-3.5 fill-gold text-gold" strokeWidth={0} />
          <span className="font-semibold text-dark">{product.rating}</span>
          <span className="text-dark/40">({product.reviewCount})</span>
        </div>

        <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
          <span className="font-heading text-[11px] font-semibold text-dark sm:text-lg">{formatINR(product.price)}</span>
          <span className="hidden text-[9px] text-dark/35 line-through sm:inline sm:text-xs">
            {formatINR(product.originalPrice)}
          </span>
          <span className="hidden text-xs font-semibold text-success sm:inline">{product.discountPercent}% OFF</span>
        </div>

        <div className="mt-1 hidden flex-wrap gap-1.5 sm:flex">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background px-2.5 py-1 text-[10px] font-medium text-dark/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
