import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import showroomImg from "@/assets/images/hero/showroom.jpg";
import bedroomAmberImg from "@/assets/images/products/bedroom-amber.jpg";
import bedroomCleanImg from "@/assets/images/hero/bedroom-clean.jpg";

const SLIDES = [showroomImg, bedroomAmberImg, bedroomCleanImg];

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[92vh] min-h-[620px] max-h-[840px] w-full overflow-hidden bg-dark">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-dark/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />

      <div className="container-luxury relative z-10 flex h-full flex-col justify-center pt-16">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="visible"
          className="flex max-w-xl flex-col gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance font-heading text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-[4.25rem]"
          >
            Furniture
            <br />
            Built with Trust.
          </motion.h1>

          <motion.p variants={staggerItem} className="text-base font-medium text-secondary-200 sm:text-lg">
            Crafted by our family for over 75 years.
          </motion.p>

          <motion.p variants={staggerItem} className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            Every product comes with verified materials, real manufacturing photos and lifetime
            support.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="group inline-flex h-14 items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold tracking-wider text-dark transition-all duration-300 hover:bg-secondary-300 active:scale-[0.98]"
            >
              EXPLORE COLLECTION
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </Link>
            <button className="group inline-flex h-14 items-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              <span className="flex size-5 items-center justify-center rounded-full bg-white/15">
                <Play className="size-2.5 translate-x-px fill-white text-white" />
              </span>
              WATCH OUR STORY
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-2 md:left-16">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-7 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}
