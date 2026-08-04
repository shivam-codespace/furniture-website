import { useRef } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { MATERIALS } from "@/features/product/data/productDetail";

export function MaterialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="materials" className="scroll-mt-24 bg-background py-10 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-dark/30 sm:text-xs">02</span>
            <h2 className="font-heading text-xl leading-snug text-dark sm:text-2xl lg:text-3xl">
              Honest Materials.
              <br />
              Complete Transparency.
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-dark/60 sm:text-sm">
            We show you exactly what goes into your furniture. No stock images. Only real photos
            of actual materials used.
          </p>
          <button className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-dark/20 px-3 py-2 text-[11px] font-semibold text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs">
            View Material Certificate
            <FileText className="size-3 sm:size-3.5" strokeWidth={2} />
          </button>
        </div>

        <div className="relative flex items-center gap-3">
          <div
            ref={scrollerRef}
            className="grid flex-1 grid-cols-3 gap-x-3 gap-y-5 sm:flex sm:gap-4 sm:overflow-x-auto sm:scroll-smooth sm:pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MATERIALS.map((material) => (
              <div key={material.name} className="flex flex-col gap-1.5 sm:w-44 sm:shrink-0 sm:gap-2.5">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-primary-50 sm:rounded-xl">
                  {material.image ? (
                    <img src={material.image} alt={material.name} className="h-full w-full object-cover" />
                  ) : material.icon ? (
                    <material.icon className="size-5 text-primary-400 sm:size-10" strokeWidth={1.2} />
                  ) : null}
                </div>
                <h3 className="truncate text-[10px] font-semibold text-dark sm:text-sm">{material.name}</h3>
                <p className="hidden whitespace-pre-line text-[11px] leading-snug text-dark/50 sm:block">
                  {material.spec}
                </p>
                <a
                  href="/"
                  className="hidden text-[11px] font-semibold text-primary hover:text-primary-700 sm:block"
                >
                  {material.linkLabel}
                </a>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll materials"
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
