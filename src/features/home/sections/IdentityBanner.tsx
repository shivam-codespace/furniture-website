import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Camera, CheckCircle2, Clock, FileText, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import productStudioImg from "@/assets/images/products/product-studio.jpg";

const DETAILS = [
  { icon: FileText, label: "Materials\nDetails" },
  { icon: Camera, label: "Workshop\nPhotos" },
  { icon: ShieldCheck, label: "Warranty\nInformation" },
  { icon: Clock, label: "Service\nHistory" },
  { icon: BadgeCheck, label: "Authenticity\nVerified" },
];

export function IdentityBanner() {
  return (
    <section className="grain-overlay bg-dark py-8 md:py-14">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto_1.2fr] lg:items-center lg:gap-10">
            {/* Row 1 (mobile): text + image side by side. On lg+ this wrapper
                disappears (display: contents) so its children become the
                first two columns of the grid below. */}
            <div className="flex items-center justify-between gap-4 lg:contents">
              <motion.div variants={staggerItem} className="flex flex-1 flex-col gap-2 sm:gap-4">
                <h2 className="text-balance font-heading text-lg font-medium leading-[1.2] text-white sm:text-3xl md:text-4xl">
                  Every Piece Has Its Own Identity
                </h2>
                <p className="hidden max-w-sm text-sm leading-relaxed text-white/60 sm:block">
                  Scan the QR to view materials, warranty, care guide and service history.
                </p>
                <a
                  href="/"
                  className="group mt-0.5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-white hover:text-gold sm:mt-1 sm:gap-2 sm:text-sm"
                >
                  Know More
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1 sm:size-4" />
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="relative w-[120px] shrink-0 sm:w-[160px] md:w-[220px] lg:mx-auto lg:w-full lg:max-w-[280px]">
                <div className="overflow-hidden rounded-lg bg-white sm:rounded-2xl">
                  <img
                    src={productStudioImg}
                    alt="Sharma bed with digital furniture passport"
                    className="aspect-[4/3] w-full object-cover object-bottom"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 hidden w-[88%] -translate-x-1/2 items-center gap-3 rounded-xl bg-white p-3 shadow-xl sm:-bottom-5 sm:flex">
                  <div className="grid size-11 shrink-0 grid-cols-3 gap-[2px] rounded bg-dark p-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className={i % 4 === 0 ? "rounded-[1px] bg-white" : "rounded-[1px] bg-white/25"} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden">
                    <span className="truncate text-[11px] font-semibold text-dark">BED-2024-00125</span>
                    <span className="flex items-center gap-1 text-[10px] font-medium text-success">
                      <CheckCircle2 className="size-3" strokeWidth={2} />
                      Verified &amp; Approved
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2 (mobile): icon strip, directly below the text + image row. */}
            <motion.div
              variants={staggerContainer(0.06)}
              className="grid grid-cols-5 gap-x-2 gap-y-8 sm:gap-x-4 lg:pt-0"
            >
              {DETAILS.map(({ icon: Icon, label }) => (
                <motion.div key={label} variants={staggerItem} className="flex flex-col items-center gap-1 text-center sm:gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10 sm:size-11">
                    <Icon className="size-3.5 text-gold sm:size-4" strokeWidth={1.5} />
                  </span>
                  <span className="sr-only whitespace-pre-line text-[10px] font-medium leading-tight text-white/65 sm:not-sr-only sm:block">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
