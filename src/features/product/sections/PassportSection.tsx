import { Camera, CheckCircle2, Clock, FileText, LifeBuoy, ShieldCheck } from "lucide-react";
import productStudioImg from "@/assets/images/products/product-studio.jpg";

const DETAILS = [
  { icon: ShieldCheck, label: "Verified Materials" },
  { icon: Camera, label: "Real Photos" },
  { icon: FileText, label: "Quality Checked" },
  { icon: LifeBuoy, label: "Lifetime Support" },
  { icon: Clock, label: "Service History" },
];

export function PassportSection() {
  return (
    <section id="passport" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-[240px_1fr] lg:items-center">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-dark/30 sm:text-xs">05</span>
            <h2 className="font-heading text-xl leading-snug text-dark sm:text-2xl lg:text-3xl">
              Your Furniture Passport
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-dark/60 sm:text-sm">
            Every product comes with a unique identity and lifetime records.
          </p>
          <button className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-dark/20 px-3 py-2 text-[11px] font-semibold text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white sm:px-4 sm:py-2.5 sm:text-xs">
            View Sample Passport
          </button>
        </div>

        <div className="grain-overlay overflow-hidden rounded-xl bg-dark p-3 sm:rounded-2xl sm:p-5 lg:p-7">
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center">
            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white p-2 sm:gap-3 sm:p-3 lg:w-[300px]">
              <img src={productStudioImg} alt="" className="size-10 shrink-0 rounded-lg object-cover sm:size-14" />
              <div className="flex flex-1 flex-col gap-0.5 overflow-hidden sm:gap-1">
                <span className="text-[8px] font-semibold uppercase tracking-wider text-dark/40 sm:text-[10px]">
                  Furniture Passport
                </span>
                <span className="truncate text-xs font-semibold text-dark sm:text-sm">BED-2026-001245</span>
                <span className="flex items-center gap-1 text-[9px] font-medium text-success sm:text-[11px]">
                  <CheckCircle2 className="size-2.5 sm:size-3" strokeWidth={2} />
                  Verified &amp; Approved
                </span>
              </div>
              <div className="grid size-8 shrink-0 grid-cols-3 gap-[2px] rounded bg-dark p-1 sm:size-11 sm:p-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className={i % 4 === 0 ? "rounded-[1px] bg-white" : "rounded-[1px] bg-white/25"} />
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-5 sm:gap-x-4 sm:gap-y-6">
              {DETAILS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/10 sm:size-10">
                    <Icon className="size-3.5 text-gold sm:size-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-[9px] font-medium leading-tight text-white/65 sm:text-[11px]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 sm:mt-6 sm:pt-5">
            <p className="text-xs text-white/60 sm:text-sm">
              We stand behind every product we sell.{" "}
              <span className="text-white/85">Transparency is our promise.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
