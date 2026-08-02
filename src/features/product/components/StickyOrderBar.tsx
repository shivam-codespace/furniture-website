import { ShoppingCart } from "lucide-react";
import type { Product } from "@/features/shop/types/product";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function StickyOrderBar({ product }: { product: Product }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-dark/10 bg-white/95 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.15)] backdrop-blur-md">
      <div className="container-luxury flex items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={product.image}
            alt=""
            className="hidden size-11 shrink-0 rounded-lg object-cover sm:block"
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-medium text-dark/70">{product.name}</span>
            <span className="font-heading text-base font-semibold text-dark">
              {formatINR(product.price)}
            </span>
          </div>
        </div>
        <button className="group inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full bg-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
          Order Now
          <ShoppingCart className="size-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
