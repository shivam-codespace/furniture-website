import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";

export function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-[54px] md:pt-[67px]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <img
          src={workshopCraftsmanImg}
          alt="Vaanam craftsman shaping wood in the workshop"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container-luxury relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex max-w-xl flex-col gap-5 pb-6 md:py-[47px]"
        >
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Story
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-balance font-heading text-4xl font-medium leading-[1.15] text-dark sm:text-5xl lg:text-6xl"
          >
            Four Generations.
            <br />
            One Promise.
          </motion.h1>
          <motion.span variants={staggerItem} className="h-px w-16 bg-primary" />
          <motion.p variants={staggerItem} className="max-w-md text-sm leading-relaxed text-dark/60 sm:text-base">
            What began in 1950 as a small woodworking workshop is today a legacy of trust, craftsmanship and
            relationships that span generations.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/why-vaanam"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Our Journey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="group inline-flex h-12 items-center gap-3 rounded-full border border-dark/20 pl-6 pr-2 text-sm font-semibold text-dark transition-colors hover:border-dark/40">
              Visit Our Workshop
              <span className="flex size-8 items-center justify-center rounded-full bg-dark/5 transition-colors group-hover:bg-dark/10">
                <Play className="size-3 fill-dark text-dark" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: contained image */}
      <div className="container-luxury relative pb-6 md:hidden">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={workshopCraftsmanImg}
            alt="Vaanam craftsman shaping wood in the workshop"
            className="aspect-[6/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
