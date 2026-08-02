import { useState } from "react";
import { ChevronDown, LayoutGrid, List } from "lucide-react";
import { BEDS } from "@/features/shop/data/products";
import { ProductCard } from "@/features/shop/components/ProductCard";
import { cn } from "@/lib/utils";

export function ProductGrid() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <h2 className="font-heading text-2xl text-dark">All Beds</h2>
          <span className="text-sm text-dark/45">86 Products</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full border border-dark/15 bg-white px-4 py-2 text-xs font-medium text-dark/70 hover:border-dark/30">
            Sort by: <span className="font-semibold text-dark">Popularity</span>
            <ChevronDown className="size-3.5" strokeWidth={2} />
          </button>
          <div className="flex items-center gap-1 rounded-full border border-dark/15 bg-white p-1">
            <button
              aria-label="Grid view"
              onClick={() => setView("grid")}
              className={cn(
                "flex size-7 items-center justify-center rounded-full transition-colors",
                view === "grid" ? "bg-dark text-white" : "text-dark/40 hover:text-dark",
              )}
            >
              <LayoutGrid className="size-3.5" strokeWidth={2} />
            </button>
            <button
              aria-label="List view"
              onClick={() => setView("list")}
              className={cn(
                "flex size-7 items-center justify-center rounded-full transition-colors",
                view === "list" ? "bg-dark text-white" : "text-dark/40 hover:text-dark",
              )}
            >
              <List className="size-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-5",
          view === "grid" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1",
        )}
      >
        {BEDS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="mx-auto mt-2 flex items-center gap-2 rounded-full border border-dark/20 px-6 py-3 text-xs font-semibold tracking-wide text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white">
        Load More Products
        <ChevronDown className="size-3.5" strokeWidth={2} />
      </button>
    </div>
  );
}
