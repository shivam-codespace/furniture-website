import { useRef } from "react";
import { ChevronRight, FileText } from "lucide-react";
import { MATERIALS } from "@/features/product/data/productDetail";

export function MaterialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="materials" className="scroll-mt-24 bg-background py-16 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-dark/30">02</span>
            <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">
              Honest Materials.
              <br />
              Complete Transparency.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-dark/60">
            We show you exactly what goes into your furniture. No stock images. Only real photos
            of actual materials used.
          </p>
          <button className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-dark/20 px-4 py-2.5 text-xs font-semibold text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white">
            View Material Certificate
            <FileText className="size-3.5" strokeWidth={2} />
          </button>
        </div>

        <div className="relative flex items-center gap-3">
          <div
            ref={scrollerRef}
            className="flex flex-1 gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MATERIALS.map((material) => (
              <div key={material.name} className="flex w-44 shrink-0 flex-col gap-2.5">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-primary-50">
                  {material.image ? (
                    <img src={material.image} alt={material.name} className="h-full w-full object-cover" />
                  ) : material.icon ? (
                    <material.icon className="size-10 text-primary-400" strokeWidth={1.2} />
                  ) : null}
                </div>
                <h3 className="text-sm font-semibold text-dark">{material.name}</h3>
                <p className="whitespace-pre-line text-[11px] leading-snug text-dark/50">{material.spec}</p>
                <a href="/" className="text-[11px] font-semibold text-primary hover:text-primary-700">
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
