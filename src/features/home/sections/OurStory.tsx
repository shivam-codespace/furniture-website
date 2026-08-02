import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import craftPlaneImg from "@/assets/images/workshop/craft-plane.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container-luxury grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={craftPlaneImg}
                alt="Hand-planing solid wood in the Vaanam workshop"
                className="h-full w-full object-cover grayscale-[35%] sepia-[15%]"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={craftSandingImg}
                alt="Sanding a furniture panel by hand"
                className="h-full w-full object-cover grayscale-[35%] sepia-[15%]"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <button className="flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm transition-transform hover:scale-105">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-dark">
                    <Play className="size-3 translate-x-px fill-white text-white" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] font-semibold text-dark">3 MIN</span>
                    <span className="block text-[10px] text-dark/60">Our Story</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={workshopCraftsmanImg}
              alt="A Vaanam craftsman finishing a solid wood bed frame"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex flex-col items-start gap-5"
        >
          <svg
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-primary/10 lg:block"
            fill="none"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <circle key={i} cx="200" cy="200" r={20 + i * 21} stroke="currentColor" strokeWidth="1" />
            ))}
          </svg>

          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
            Our Story
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-balance font-heading text-4xl font-medium leading-[1.1] text-dark md:text-5xl">
            Three Generations.
            <br />
            One Promise.
          </motion.h2>
          <motion.p variants={staggerItem} className="max-w-md text-base leading-relaxed text-dark/60">
            What began in 1950 as a small woodworking workshop has today grown into a trusted name
            in furniture. Our values remain the same – honest materials, fine craftsmanship and a
            commitment that lasts for generations.
          </motion.p>
          <motion.button
            variants={staggerItem}
            className="group mt-2 inline-flex h-12 items-center gap-2.5 rounded-full border border-dark/25 px-6 text-xs font-semibold tracking-wider text-dark transition-all duration-300 hover:border-dark hover:bg-dark hover:text-white"
          >
            KNOW OUR JOURNEY
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
