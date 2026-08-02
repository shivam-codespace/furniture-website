import { motion } from "framer-motion";
import { Camera, LifeBuoy, ScanQrCode, ShieldCheck, SlidersHorizontal, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Materials",
    description: "We use only trusted brands and show you what goes inside.",
  },
  {
    icon: Camera,
    title: "Real Photos",
    description: "Every product page shows actual photos from our workshop.",
  },
  {
    icon: ScanQrCode,
    title: "Furniture Passport",
    description: "Each product gets a digital identity with full details & warranty.",
  },
  {
    icon: Sparkles,
    title: "Quality Inspection",
    description: "Every piece is checked before it reaches your home.",
  },
  {
    icon: LifeBuoy,
    title: "Lifetime Support",
    description: "We are with you for the life of your furniture.",
  },
  {
    icon: SlidersHorizontal,
    title: "Made for You",
    description: "Custom sizes, finishes and designs – built the way you want.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-3xl border border-dark/8 bg-white/60 px-6 py-14 sm:px-10 md:py-16"
        >
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
              Why Choose Vaanam
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl font-medium text-dark md:text-5xl">
              Transparency. Quality. Trust.
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="flex flex-col items-center gap-4 text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-primary-200 bg-primary-50">
                  <Icon className="size-6 text-primary" strokeWidth={1.4} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-base text-dark">{title}</h3>
                  <p className="text-xs leading-relaxed text-dark/55">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
