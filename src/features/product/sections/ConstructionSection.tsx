import { useState } from "react";
import { Check } from "lucide-react";
import { BED_PARTS, CONSTRUCTION_POINTS } from "@/features/product/data/productDetail";
import { cn } from "@/lib/utils";
import constructionCalloutsImg from "@/assets/images/passport/construction-callouts.jpg";

export function ConstructionSection() {
  const [activePart, setActivePart] = useState(BED_PARTS[1]);

  return (
    <section id="craftsmanship" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[240px_1fr_260px] lg:items-start lg:gap-10">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-dark/30 sm:text-xs">03</span>
            <h2 className="font-heading text-xl leading-snug text-dark sm:text-2xl lg:text-3xl">
              Built Strong.
              <br />
              Built to Last.
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-dark/60 sm:text-sm">
            See what makes our beds stronger, sturdier and more durable than others.
          </p>
          <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-2.5 sm:mt-2 sm:flex sm:flex-col sm:gap-3.5">
            {CONSTRUCTION_POINTS.map((point) => (
              <li key={point.label} className="flex items-start gap-2 sm:gap-2.5">
                <Check className="mt-0.5 size-3.5 shrink-0 text-success sm:size-4" strokeWidth={2.5} />
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-dark sm:text-sm">{point.label}</span>
                  <span className="text-[10px] text-dark/50 sm:text-xs">{point.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image + "Inside Your Bed" — one row on mobile (70% / 30%), the
            wrapper disappears at lg so both become normal grid columns. */}
        <div className="flex items-start gap-2 lg:contents">
          <div className="flex w-[70%] items-center justify-center lg:w-auto">
            <img
              src={constructionCalloutsImg}
              alt="Annotated bed construction diagram: solid Sheesham wood 30mm thick, CenturyPly 19mm ISI certified, soft-close storage, reinforced center support, solid wood legs 70mm"
              className="w-full"
            />
          </div>

          <div className="w-[30%] rounded-lg border border-dark/8 p-1.5 sm:w-auto sm:rounded-2xl sm:p-5">
            <h3 className="mb-1 font-heading text-[10px] leading-tight text-dark sm:text-base">Inside Your Bed</h3>
            <p className="mb-2 hidden text-xs text-dark/50 sm:block sm:mb-4">Click on any part to know more.</p>
            <ul className="flex flex-col gap-0.5 sm:gap-1.5">
              {BED_PARTS.map((part) => (
                <li key={part}>
                  <button
                    onClick={() => setActivePart(part)}
                    className={cn(
                      "flex w-full items-center gap-1 rounded-lg px-1 py-1 text-left transition-colors sm:gap-3 sm:rounded-xl sm:px-2.5 sm:py-2",
                      activePart === part ? "bg-primary-50" : "hover:bg-dark/5",
                    )}
                  >
                    <span className="hidden shrink-0 overflow-hidden rounded-md bg-primary-100 sm:block sm:size-9">
                      <img src={constructionCalloutsImg} alt="" className="h-full w-full object-cover" />
                    </span>
                    <span
                      className={cn(
                        "text-[8px] leading-tight sm:text-sm",
                        activePart === part ? "font-semibold text-primary-700" : "text-dark/70",
                      )}
                    >
                      {part}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
