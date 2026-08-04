import { motion } from "framer-motion";
import { ArrowRight, Armchair, Headset, Package, RefreshCcw, ShieldCheck, Wrench } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const CATEGORIES = [
  {
    icon: Package,
    title: "Order Support",
    description: "Track orders, check status, delivery updates and more.",
  },
  {
    icon: Armchair,
    title: "Product Information",
    description: "Details about materials, finishes, dimensions, customization and more.",
  },
  {
    icon: RefreshCcw,
    title: "Returns & Refunds",
    description: "Return policy, eligibility, refund process and cancellation.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Care",
    description: "Warranty details, care instructions and maintenance tips.",
  },
  {
    icon: Wrench,
    title: "Installation Support",
    description: "Installation, assembly, demonstration videos and more.",
  },
  {
    icon: Headset,
    title: "After Sales Support",
    description: "Report issues, request service or raise a complaint.",
  },
];

export function HelpCategories() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-luxury">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center font-heading text-2xl font-medium text-dark sm:text-3xl"
          >
            How Can We Help You?
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
          >
            {CATEGORIES.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={staggerItem} className="flex flex-col items-center gap-3 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-heading text-base font-medium text-dark">{title}</h3>
                <p className="text-xs leading-relaxed text-dark/55">{description}</p>
                <button className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-700">
                  Learn More
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
