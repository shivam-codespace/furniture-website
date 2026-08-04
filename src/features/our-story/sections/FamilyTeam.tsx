import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const FAMILY = [
  {
    initials: "RN",
    name: "Raghavan Nair",
    role: "Founder",
    desc: "The visionary who started it all with a dream and a few tools.",
    signature: "R. Nair",
  },
  {
    initials: "SN",
    name: "Suresh Nair",
    role: "Second Generation",
    desc: "He took the legacy forward with hard work and honesty.",
    signature: "S. Nair",
  },
  {
    initials: "AS",
    name: "Arun Suresh",
    role: "Third Generation",
    desc: "Bringing innovation while staying true to our roots.",
    signature: "A. Suresh",
  },
  {
    initials: "RA",
    name: "Rohit Arun",
    role: "Fourth Generation",
    desc: "Building the future with technology and passion.",
    signature: "R. Arun",
  },
];

export function FamilyTeam() {
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
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Meet the Family Behind Sharma
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {FAMILY.map(({ initials, name, role, desc, signature }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-2xl border border-dark/8"
            >
              <div className="flex aspect-square items-center justify-center bg-primary-800">
                <span className="font-heading text-3xl font-semibold text-primary-200">{initials}</span>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-sm font-semibold text-dark">{name}</h3>
                <span className="text-xs font-medium text-primary">{role}</span>
                <p className="mt-1 text-xs leading-relaxed text-dark/55">{desc}</p>
                <span className="mt-2 font-heading text-lg italic text-dark/40">{signature}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
