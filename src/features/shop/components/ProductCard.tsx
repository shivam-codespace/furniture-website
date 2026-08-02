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
      className="group flex flex-col overflow-hidden rounded-2xl border border-dark/8 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold tracking-wide",
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
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/95 text-dark/60 shadow-sm transition-colors hover:text-primary"
        >
          <Heart className={cn("size-4", wishlisted && "fill-primary text-primary")} strokeWidth={1.75} />
        </button>
        <span
          aria-label="Quick view"
          className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-md bg-white/95 text-dark/60 shadow-sm transition-colors group-hover:text-primary"
        >
          <Scan className="size-4" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-heading text-base leading-tight text-dark">{product.name}</h3>
        <p className="text-xs text-dark/50">{product.variant}</p>

        <div className="flex items-center gap-1.5 text-xs">
          <Star className="size-3.5 fill-gold text-gold" strokeWidth={0} />
          <span className="font-semibold text-dark">{product.rating}</span>
          <span className="text-dark/40">({product.reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-semibold text-dark">{formatINR(product.price)}</span>
          <span className="text-xs text-dark/35 line-through">{formatINR(product.originalPrice)}</span>
          <span className="text-xs font-semibold text-success">{product.discountPercent}% OFF</span>
        </div>

        <div className="mt-1 flex flex-wrap gap-1.5">
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
