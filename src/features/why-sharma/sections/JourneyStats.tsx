import { motion } from "framer-motion";
import { Headphones, Home, ShieldCheck, Star, Users } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const STATS = [
  { icon: Users, value: "75+", label: "Years", sub: "of Craftsmanship" },
  { icon: Users, value: "4", label: "Generations", sub: "of Family Legacy" },
  { icon: Home, value: "10,000+", label: "Homes", sub: "Furnished" },
  { icon: Star, value: "4.9/5", label: "Average Rating", sub: "from 2,345+ Customers" },
  { icon: ShieldCheck, value: "100%", label: "Verified Materials", sub: "We Never Compromise" },
  { icon: Headphones, value: "Lifetime", label: "Support", sub: "For Every Customer" },
];

export function JourneyStats() {
  return (
    <section className="bg-primary-50/50 py-20 md:py-24">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">A Legacy of Trust</span>
          <h2 className="mt-3 font-heading text-3xl font-medium text-dark sm:text-4xl">
            Numbers That Reflect Our Journey
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
        >
          {STATS.map(({ icon: Icon, value, label, sub }) => (
            <motion.div key={label} variants={staggerItem} className="flex flex-col items-center gap-2 text-center">
              <Icon className="size-7 text-primary" strokeWidth={1.4} />
              <span className="font-heading text-xl font-semibold text-dark sm:text-2xl">{value}</span>
              <span className="text-xs font-medium text-dark/70">{label}</span>
              <span className="text-[11px] text-dark/45">{sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
