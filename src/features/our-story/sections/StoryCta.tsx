import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";

export function StoryCta() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,_#3a2417_0%,_#1c110a_70%,_#140c07_100%)]"
        >
          <img src={carpenterSawImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c110a] from-45% via-[#1c110a]/85 to-[#1c110a]/55" />

          <div className="relative flex flex-col items-start gap-5 px-8 py-12 text-white sm:max-w-md md:px-12 md:py-14">
            <motion.h2 variants={staggerItem} className="font-heading text-2xl font-medium sm:text-3xl">
              Be a Part of Our Story
            </motion.h2>
            <motion.p variants={staggerItem} className="text-sm leading-relaxed text-white/65">
              When you choose Vaanam, you become a part of our family and our journey.
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/shop"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-dark transition-colors hover:bg-white/90"
              >
                Explore Our Collection
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
