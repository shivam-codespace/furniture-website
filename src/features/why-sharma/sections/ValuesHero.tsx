import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";

function LegacyCard() {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="font-heading text-5xl font-semibold sm:text-6xl">75+</span>
      <div className="mt-3 text-xs font-semibold uppercase leading-relaxed tracking-[0.25em] text-white/80">
        Years
        <br />
        of Legacy
      </div>
      <div className="my-4 h-px w-10 bg-gold" />
      <p className="text-sm leading-relaxed text-white/70">
        Four Generations
        <br />
        of Craftsmanship
      </p>
    </div>
  );
}

export function ValuesHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-[54px] md:pt-[67px]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] items-center justify-center md:flex">
        <img
          src={workshopCraftsmanImg}
          alt="Sharma craftsman shaping wood in the workshop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative w-[260px] rounded-2xl border border-white/15 bg-dark/40 px-8 py-10 text-white backdrop-blur-md">
          <LegacyCard />
        </div>
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
            Why Sharma
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-balance font-heading text-4xl font-medium leading-[1.15] text-dark sm:text-5xl lg:text-6xl"
          >
            Crafted on Values.
            <br />
            Built on Trust.
          </motion.h1>
          <motion.span variants={staggerItem} className="h-px w-16 bg-primary" />
          <motion.p variants={staggerItem} className="max-w-md text-sm leading-relaxed text-dark/60 sm:text-base">
            At Sharma Furnitures, we believe furniture is more than wood and design. It&apos;s about trust,
            transparency, and a promise that lasts for generations.
          </motion.p>
          <motion.p variants={staggerItem} className="max-w-md text-sm leading-relaxed sm:text-base">
            <span className="font-semibold text-dark">We don&apos;t ask for your trust. </span>
            <span className="text-primary">
              We earn it by showing you exactly what goes into every piece of furniture.
            </span>
          </motion.p>
          <motion.div variants={staggerItem} className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Explore Our Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="group inline-flex h-12 items-center gap-3 rounded-full border border-dark/20 pl-6 pr-2 text-sm font-semibold text-dark transition-colors hover:border-dark/40">
              Watch Our Story
              <span className="flex size-8 items-center justify-center rounded-full bg-dark/5 transition-colors group-hover:bg-dark/10">
                <Play className="size-3 fill-dark text-dark" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile: contained image with card pinned to its corner */}
      <div className="container-luxury relative pb-6 md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={workshopCraftsmanImg}
            alt="Sharma craftsman shaping wood in the workshop"
            className="aspect-[6/5] w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-dark/40 px-8 py-8 text-white backdrop-blur-md">
            <LegacyCard />
          </div>
        </div>
      </div>
    </section>
  );
}
