import { motion } from "framer-motion";
import { BadgeCheck, Hammer, Headphones, Leaf, ShieldCheck, Users } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const VALUES = [
  { icon: ShieldCheck, title: "Honesty", desc: "We believe in complete transparency in every material and process." },
  { icon: Hammer, title: "Craftsmanship", desc: "Skilled hands, attention to detail, and pride in every piece we create." },
  { icon: Users, title: "Family", desc: "A family business built on relationships, respect and shared values." },
  { icon: BadgeCheck, title: "Quality", desc: "From raw materials to final polish – quality is never compromised." },
  { icon: Headphones, title: "Commitment", desc: "We stand by our furniture with lifetime support and care." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible sourcing of wood and eco-friendly practices for a better tomorrow." },
];

export function ValuesGrid() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">The Values That Guide Us</span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 rounded-2xl border border-dark/8 px-4 py-8 text-center"
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
