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
    <section id="passport" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="container-luxury grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-dark/30">05</span>
            <h2 className="font-heading text-2xl leading-snug text-dark sm:text-3xl">
              Your Furniture Passport
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-dark/60">
            Every product comes with a unique identity and lifetime records.
          </p>
          <button className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-dark/20 px-4 py-2.5 text-xs font-semibold text-dark transition-colors hover:border-dark hover:bg-dark hover:text-white">
            View Sample Passport
          </button>
        </div>

        <div className="grain-overlay overflow-hidden rounded-2xl bg-dark p-5 sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex shrink-0 items-center gap-3 rounded-xl bg-white p-3 sm:w-[300px]">
              <img src={productStudioImg} alt="" className="size-14 shrink-0 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col gap-1 overflow-hidden">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-dark/40">
                  Furniture Passport
                </span>
                <span className="truncate text-sm font-semibold text-dark">BED-2026-001245</span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-success">
                  <CheckCircle2 className="size-3" strokeWidth={2} />
                  Verified &amp; Approved
                </span>
              </div>
              <div className="grid size-11 shrink-0 grid-cols-3 gap-[2px] rounded bg-dark p-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className={i % 4 === 0 ? "rounded-[1px] bg-white" : "rounded-[1px] bg-white/25"} />
                ))}
              </div>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5">
              {DETAILS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
                    <Icon className="size-4 text-gold" strokeWidth={1.5} />
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-white/65">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm text-white/60">
              We stand behind every product we sell.{" "}
              <span className="text-white/85">Transparency is our promise.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
