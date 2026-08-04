import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, X } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";

const TRADITIONAL = [
  "No transparency about materials",
  "Stock images and misleading photos",
  "No visibility of manufacturing process",
  "Limited or no after-sales support",
  "No long-term relationship",
];

const SHARMA_WAY = [
  "Complete transparency in materials & process",
  "Real photos from our own workshop",
  "Furniture Passport with every product",
  "Lifetime support and service",
  "A relationship built on trust for generations",
];

export function ComparisonSection() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">How We Are Different</span>
          <h2 className="mt-3 font-heading text-3xl font-medium text-dark sm:text-4xl">We Redefine Furniture Buying</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_1fr_1.2fr]"
        >
          <motion.div variants={staggerItem} className="relative rounded-2xl bg-dark/[0.04] p-8">
            <h3 className="font-heading text-lg text-dark">Traditional Furniture Buying</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark/60">
                  <X className="mt-0.5 size-4 shrink-0 text-dark/45" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute right-0 top-1/2 z-10 hidden size-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-dark/15 bg-background font-heading text-xs font-semibold text-primary-700 lg:flex">
              Vs
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="rounded-2xl bg-primary-50 p-8">
            <h3 className="font-heading text-lg text-primary-700">The Sharma Way</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {SHARMA_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-dark/70">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="relative overflow-hidden rounded-2xl bg-dark">
            <img src={craftSandingImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark from-45% via-dark/75 to-transparent" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between gap-6 p-8 text-white">
              <p className="max-w-[220px] text-lg font-medium leading-snug">
                Experience the Sharma Difference. Because you and your family deserve nothing less.
              </p>
              <Link
                to="/shop"
                className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-dark transition-colors hover:bg-white/90"
              >
                Explore Collection
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
