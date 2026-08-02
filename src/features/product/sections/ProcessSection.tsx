import { useRef } from "react";
import { ChevronRight, Package } from "lucide-react";
import { PROCESS_STEPS } from "@/features/product/data/productDetail";

export function ProcessSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-dark/30">04</span>
            <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">
              Crafted With Care.
              <br />
              Step by Step.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-dark/60">
            Every step is done in our own workshop with 75+ years of experience.
          </p>
        </div>

        <div className="relative flex items-center gap-3">
          <div
            ref={scrollerRef}
            className="flex flex-1 gap-6 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROCESS_STEPS.map(({ n, title, description, image }) => (
              <div key={n} className="flex w-24 shrink-0 flex-col items-center gap-3 text-center">
                <div className="relative">
                  <div className="size-16 overflow-hidden rounded-full border-2 border-background bg-primary-100 shadow-sm ring-1 ring-dark/5">
                    {image ? (
                      <img src={image} alt={title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-200">
                        <Package className="size-5 text-primary-500" strokeWidth={1.3} />
                      </div>
                    )}
                  </div>
                  <span className="absolute -bottom-1.5 left-1/2 flex h-5 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-dark text-[9px] font-semibold text-white">
                    {n}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-xs font-semibold text-dark">{title}</h3>
                  <p className="text-[10px] leading-snug text-dark/50">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll process steps"
            onClick={() => scrollerRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
            className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-dark/15 bg-white text-dark/60 shadow-sm transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <ChevronRight className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
