import { useState } from "react";
import { Check } from "lucide-react";
import { BED_PARTS, CONSTRUCTION_POINTS } from "@/features/product/data/productDetail";
import { cn } from "@/lib/utils";
import constructionCalloutsImg from "@/assets/images/passport/construction-callouts.jpg";

export function ConstructionSection() {
  const [activePart, setActivePart] = useState(BED_PARTS[1]);

  return (
    <section id="craftsmanship" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr_260px] lg:items-start">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-dark/30">03</span>
            <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">
              Built Strong.
              <br />
              Built to Last.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-dark/60">
            See what makes our beds stronger, sturdier and more durable than others.
          </p>
          <ul className="mt-2 flex flex-col gap-3.5">
            {CONSTRUCTION_POINTS.map((point) => (
              <li key={point.label} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-dark">{point.label}</span>
                  <span className="text-xs text-dark/50">{point.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={constructionCalloutsImg}
            alt="Annotated bed construction diagram: solid Sheesham wood 30mm thick, CenturyPly 19mm ISI certified, soft-close storage, reinforced center support, solid wood legs 70mm"
            className="w-full"
          />
        </div>

        <div className="rounded-2xl border border-dark/8 p-5">
          <h3 className="mb-1 font-heading text-base text-dark">Inside Your Bed</h3>
          <p className="mb-4 text-xs text-dark/50">Click on any part to know more.</p>
          <ul className="flex flex-col gap-1.5">
            {BED_PARTS.map((part) => (
              <li key={part}>
                <button
                  onClick={() => setActivePart(part)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors",
                    activePart === part ? "bg-primary-50" : "hover:bg-dark/5",
                  )}
                >
                  <span className="size-9 shrink-0 overflow-hidden rounded-md bg-primary-100">
                    <img src={constructionCalloutsImg} alt="" className="h-full w-full object-cover" />
                  </span>
                  <span
                    className={cn(
                      "text-sm",
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
    </section>
  );
}
