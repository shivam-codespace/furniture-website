import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import hingeImg from "@/assets/images/materials/hinge.jpg";
import woodLogsImg from "@/assets/images/workshop/wood-logs.jpg";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";

export function WorkshopShowcase() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[35%_65%]">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Our Workshop
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-balance font-heading text-3xl font-medium leading-[1.15] text-dark sm:text-4xl"
            >
              Where Every Piece Takes Shape
            </motion.h2>
            <motion.p variants={staggerItem} className="text-sm leading-relaxed text-dark/60">
              This is where the magic happens. Our workshop is not just a place of work – it&apos;s a place of
              passion, precision and pride.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/why-vaanam"
                className="group mt-2 inline-flex h-11 items-center gap-2 rounded-full border border-dark/20 px-5 text-sm font-semibold text-dark transition-colors hover:border-dark/40"
              >
                See Our Process
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-3 sm:grid-cols-[1.2fr_1fr]"
          >
            <motion.div variants={staggerItem} className="overflow-hidden rounded-2xl">
              <img
                src={workshopCraftsmanImg}
                alt="Vaanam workshop floor"
                className="h-[220px] w-full object-cover sm:h-full"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              <motion.div variants={staggerItem} className="overflow-hidden rounded-2xl">
                <img src={craftSandingImg} alt="Hand sanding wood" className="h-[104px] w-full object-cover sm:h-full" />
              </motion.div>
              <motion.div variants={staggerItem} className="overflow-hidden rounded-2xl">
                <img src={hingeImg} alt="Joinery detail" className="h-[104px] w-full object-cover sm:h-full" />
              </motion.div>
              <motion.div variants={staggerItem} className="overflow-hidden rounded-2xl">
                <img src={woodLogsImg} alt="Selected timber" className="h-[104px] w-full object-cover sm:h-full" />
              </motion.div>
              <motion.div variants={staggerItem} className="overflow-hidden rounded-2xl">
                <img src={carpenterSawImg} alt="Craftsman at work" className="h-[104px] w-full object-cover sm:h-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
