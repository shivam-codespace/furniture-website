import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/features/shop/data/products";
import { CATEGORY_ICONS } from "@/features/shop/data/categoryIcons";
import { cn } from "@/lib/utils";

export function CategoryPills() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex items-center gap-3">
      <div
        ref={scrollerRef}
        className="flex flex-1 gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CATEGORIES.filter((c) => c.id !== "custom").map((cat) => {
          const Icon = CATEGORY_ICONS[cat.icon];
          const active = cat.id === "beds";
          return (
            <button
              key={cat.id}
              className={cn(
                "flex w-[100px] shrink-0 flex-col items-center gap-2 rounded-2xl border px-3 py-4 transition-colors",
                active
                  ? "border-primary bg-primary-50"
                  : "border-dark/10 bg-white hover:border-primary/40",
              )}
            >
              <Icon className={cn("size-6", active ? "text-primary-700" : "text-dark/60")} strokeWidth={1.5} />
              <span
                className={cn(
                  "text-center text-xs font-medium leading-tight",
                  active ? "text-primary-800" : "text-dark/70",
                )}
              >
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
      <button
        aria-label="Scroll categories"
        onClick={() => scrollerRef.current?.scrollBy({ left: 220, behavior: "smooth" })}
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-dark/15 bg-white text-dark/60 shadow-sm transition-colors hover:border-primary hover:text-primary"
      >
        <ChevronRight className="size-4" strokeWidth={2} />
      </button>
    </div>
  );
}
