import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import logoTree from "@/assets/icons/logo-tree.png";
import hingeImg from "@/assets/images/materials/hinge.jpg";

export function PromiseBanner() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,_#3a2417_0%,_#1c110a_70%,_#140c07_100%)]"
        >
          <img src={hingeImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c110a] from-45% via-[#1c110a]/85 to-[#1c110a]/65" />

          <div className="relative grid grid-cols-1 items-center gap-10 px-8 py-10 text-center md:grid-cols-[auto_1fr_auto] md:px-12 md:py-12 md:text-left">
            <motion.img variants={staggerItem} src={logoTree} alt="" className="mx-auto h-20 w-auto md:mx-0" />

            <motion.div variants={staggerItem} className="flex flex-col items-center gap-2 md:items-start">
              <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">Our Promise to You</h2>
              <p className="max-w-md text-sm leading-relaxed text-white/60">
                We will continue to craft honest furniture with the best materials, complete transparency and a
                commitment that lasts forever.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="md:ml-auto md:text-right">
              <p className="text-sm text-white/70">With Respect &amp; Gratitude,</p>
              <p className="mt-1 font-heading text-2xl italic text-gold">The Vaanam Family</p>
              <p className="mt-1 text-sm text-white/60">Four Generations. One Promise.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
