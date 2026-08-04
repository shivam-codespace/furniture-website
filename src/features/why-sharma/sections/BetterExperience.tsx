import { motion } from "framer-motion";
import { Award, Hammer, PackageCheck, ShieldCheck, Wand2 } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import bedroomAmberImg from "@/assets/images/products/bedroom-amber.jpg";

const CHECKLIST = [
  { icon: Award, title: "75+ Years of Legacy", desc: "Rooted in values passed down through four generations." },
  { icon: Hammer, title: "Crafted by Experts", desc: "Skilled artisans who treat every piece like their own." },
  { icon: ShieldCheck, title: "Complete Transparency", desc: "Know your wood, plywood, hardware, finish and more." },
  { icon: Wand2, title: "Custom Made for You", desc: "Design exactly how you want with our Custom Studio." },
  { icon: PackageCheck, title: "Delivered with Care", desc: "On-time delivery, secure packaging and white-glove service." },
];

export function BetterExperience() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[40%_60%] lg:gap-10">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Why Choose Sharma
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-balance font-heading text-3xl font-medium leading-[1.15] text-dark sm:text-4xl"
            >
              Not Just Furniture.
              <br />
              A Better Experience.
            </motion.h2>

            <div className="mt-2 flex flex-col gap-5">
              {CHECKLIST.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={staggerItem} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-800 text-primary-200">
                    <Icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm font-semibold text-dark">{title}</h3>
                    <p className="text-sm text-dark/55">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={bedroomAmberImg}
                alt="A Sharma furnished bedroom"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
              />
            </div>
            <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-2xl bg-dark px-6 py-6 text-white shadow-xl sm:-right-6 sm:max-w-xs">
              <span className="font-heading text-3xl leading-none text-gold">&ldquo;</span>
              <p className="mt-1 text-sm leading-relaxed text-white/85">
                We don&apos;t build furniture to sell. We build it to stay in your family for generations.
              </p>
              <p className="mt-3 text-xs font-semibold text-white/50">— The Sharma Family</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
