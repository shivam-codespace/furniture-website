import { motion } from "framer-motion";
import { Calendar, Headphones, Home, ShieldCheck, Users } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const STATS = [
  { icon: Calendar, value: "75+", label: "Years", sub: "of Craftsmanship" },
  { icon: Users, value: "4", label: "Generations", sub: "of Family Legacy" },
  { icon: Home, value: "10,000+", label: "Homes", sub: "Furnished" },
  { icon: ShieldCheck, value: "100%", label: "Verified", sub: "Materials" },
  { icon: Headphones, value: "Lifetime", label: "Support", sub: "and Service" },
];

export function StatsBar() {
  return (
    <section className="border-b border-dark/8 bg-background">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-luxury grid grid-cols-2 divide-y divide-dark/8 py-8 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-5"
      >
        {STATS.map(({ icon: Icon, value, label, sub }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            className="flex items-center justify-center gap-3 px-4 py-4 text-center sm:justify-start sm:text-left"
          >
            <Icon className="size-7 shrink-0 text-primary" strokeWidth={1.4} />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-semibold text-dark sm:text-2xl">{value}</span>
              <span className="text-xs text-dark/55">
                {label}
                <br className="hidden sm:block" /> {sub}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
