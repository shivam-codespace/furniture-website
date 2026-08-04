import { useState } from "react";
import { ChevronDown, LayoutGrid, List } from "lucide-react";
import { BEDS } from "@/features/shop/data/products";
import { ProductCard } from "@/features/shop/components/ProductCard";
import { MobileFilters } from "@/features/shop/sections/MobileFilters";
import { cn } from "@/lib/utils";

export function ProductGrid() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-nowrap items-center justify-between gap-2 sm:gap-4">
        <div className="flex min-w-0 items-baseline gap-1 sm:gap-2">
          <h2 className="truncate font-heading text-sm text-dark sm:text-2xl">All Beds</h2>
          <span className="shrink-0 text-[10px] text-dark/45 sm:text-sm">86 Products</span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <MobileFilters />
          <button className="hidden items-center gap-2 rounded-full border border-dark/15 bg-white px-4 py-2 text-xs font-medium text-dark/70 hover:border-dark/30 min-[420px]:flex">
            Sort by: <span className="font-semibold text-dark">Popularity</span>
            <ChevronDown className="size-3.5" strokeWidth={2} />
          </button>
          <div className="flex items-center gap-1 rounded-full border border-dark/15 bg-white p-1">
            <button
              aria-label="Grid view"
              onClick={() => setView("grid")}
              className={cn(
                "flex size-5 items-center justify-center rounded-full transition-colors sm:size-7",
                view === "grid" ? "bg-dark text-white" : "text-dark/40 hover:text-dark",
              )}
            >
              <LayoutGrid className="size-2.5 sm:size-3.5" strokeWidth={2} />
            </button>
            <button
              aria-label="List view"
              onClick={() => setView("list")}
              className={cn(
                "flex size-5 items-center justify-center rounded-full transition-colors sm:size-7",
                view === "list" ? "bg-dark text-white" : "text-dark/40 hover:text-dark",
              )}
            >
              <List className="size-2.5 sm:size-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "grid gap-2 sm:gap-4 lg:gap-5",
          view === "grid" ? "grid-cols-3 lg:grid-cols-4" : "grid-cols-1",
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
