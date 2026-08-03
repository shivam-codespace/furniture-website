import { motion } from "framer-motion";
import { BadgeCheck, Camera, FileText, Handshake, Headphones, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const ITEMS = [
  { icon: ShieldCheck, title: "Verified Materials", desc: "Every material is inspected and documented." },
  { icon: Camera, title: "Real Photos", desc: "No stock images. See actual photos from our workshop." },
  {
    icon: FileText,
    title: "Furniture Passport",
    desc: "Each product comes with a unique identity, warranty & care guide.",
  },
  { icon: BadgeCheck, title: "Quality Inspection", desc: "Multi-level quality checks before delivery." },
  { icon: Headphones, title: "Lifetime Support", desc: "We're with you for the life of your furniture." },
  { icon: Handshake, title: "Honest Relationships", desc: "Built on trust, not transactions." },
];

export function TransparencyPromise() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Promise</span>
          <h2 className="mt-3 font-heading text-3xl font-medium text-dark sm:text-4xl">Transparency in Every Detail</h2>
          <p className="mt-4 text-sm leading-relaxed text-dark/60 sm:text-base">
            We show what others hide. From the wood we select to the final polish, every material, every process,
            every detail is transparent.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 divide-x divide-y divide-dark/8 overflow-hidden rounded-2xl border border-dark/8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0"
        >
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 px-4 py-8 text-center"
            >
              <Icon className="size-8 text-primary" strokeWidth={1.3} />
              <h3 className="font-heading text-sm font-semibold text-dark">{title}</h3>
              <p className="text-xs leading-relaxed text-dark/55">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
