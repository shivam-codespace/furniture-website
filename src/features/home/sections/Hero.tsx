import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import bedroomAmberImg from "@/assets/images/products/bedroom-amber.jpg";
import showroomImg from "@/assets/images/hero/showroom.jpg";
import bedroomCleanImg from "@/assets/images/hero/bedroom-clean.jpg";

const SLIDES = [bedroomAmberImg, showroomImg, bedroomCleanImg];

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[364px] w-full overflow-hidden bg-dark sm:h-[600px] lg:h-[660px]">
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

      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/10" />

      <div className="container-luxury relative z-10 flex h-full flex-col justify-center pt-14">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="visible"
          className="flex max-w-lg flex-col gap-5"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance font-heading text-[25px] font-medium leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Furniture Crafted
            <br />
            for Generations
          </motion.h1>

          <motion.p variants={staggerItem} className="max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
            Timeless design. Honest materials. Made to be loved for life.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-2">
            <Link
              to="/shop"
              className="group inline-flex h-[34px] items-center gap-[7px] rounded-full border border-white/50 px-[17px] text-[10px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:h-12 sm:gap-2.5 sm:px-6 sm:text-sm"
            >
              Explore Collections
              <ArrowRight
                className="size-[11px] transition-transform group-hover:translate-x-1 sm:size-4"
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-6 z-10 flex items-center gap-2 md:left-16">
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
