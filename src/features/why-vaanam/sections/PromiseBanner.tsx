import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import logoTree from "@/assets/icons/logo-tree.png";
import hingeImg from "@/assets/images/materials/hinge.jpg";

export function PromiseBanner() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 md:py-20">
      <img src={hingeImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark from-45% via-dark/85 to-dark/70" />

      <div className="container-luxury relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-[auto_1fr_auto] md:text-left"
        >
          <motion.img
            variants={staggerItem}
            src={logoTree}
            alt=""
            className="mx-auto h-14 w-auto opacity-90 md:mx-0"
          />

          <motion.div variants={staggerItem} className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">Our Promise to You</h2>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              We will continue to craft honest furniture with the best materials, complete transparency and a
              commitment that lasts forever.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="md:ml-auto md:text-right">
            <p className="text-xs text-white/45">With Respect &amp; Gratitude,</p>
            <p className="font-heading text-xl italic text-gold">The Vaanam Family</p>
            <p className="text-xs text-white/45">Four Generations. One Promise.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
