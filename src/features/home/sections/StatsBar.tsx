import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, ShieldCheck, Users } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const LEFT_STATS = [
  { icon: ShieldCheck, value: "75+", label: "Years of Experience" },
  { icon: Users, value: "3", label: "Generations" },
];

const RIGHT_STATS = [
  { icon: Home, value: "10,000+", label: "Homes Furnished" },
  { icon: ShieldCheck, value: "Verified", label: "Materials" },
];

function Stat({ icon: Icon, value, label }: { icon: typeof ShieldCheck; value: string; label: string }) {
  return (
    <motion.div variants={staggerItem} className="flex flex-col items-center gap-1 text-center sm:gap-3">
      <span className="flex size-7 items-center justify-center rounded-full border border-white/15 bg-white/5 sm:size-14">
        <Icon className="size-3 text-white/85 sm:size-6" strokeWidth={1.4} />
      </span>
      <span className="font-heading text-[11px] font-semibold text-white sm:text-lg">{value}</span>
      <span className="sr-only text-xs text-white/50 sm:not-sr-only sm:block">{label}</span>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_#3a2417_0%,_#1c110a_65%,_#140c07_100%)]">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-luxury grid grid-cols-[1fr_1fr_auto_1fr_1fr] items-center gap-1.5 divide-x divide-white/10 py-4 sm:gap-6 sm:py-12"
      >
        {LEFT_STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-1 px-1.5 text-center sm:gap-4 sm:px-6"
        >
          <h2 className="font-heading text-[9px] font-medium leading-snug text-white sm:text-xl md:text-2xl">
            Built on Trust.
            <br />
            Crafted with Pride.
          </h2>
          <Link
            to="/"
            className="group inline-flex h-6 items-center gap-1 rounded-md border border-white/30 px-2 text-[8px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:h-10 sm:gap-2 sm:px-5 sm:text-xs"
          >
            Our Story
            <ArrowRight className="size-2.5 transition-transform group-hover:translate-x-1 sm:size-3.5" />
          </Link>
        </motion.div>

        {RIGHT_STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  );
}
