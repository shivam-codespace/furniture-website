import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BedDouble, Briefcase, Palette, Sofa, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import bedroomWhiteImg from "@/assets/images/categories/bedroom-white.jpg";
import diningRoomImg from "@/assets/images/categories/dining-room.jpg";
import woodSlabImg from "@/assets/images/categories/wood-slab.jpg";

const MotionLink = motion(Link);

const CATEGORIES = [
  { label: "Bedroom", icon: BedDouble, image: bedroomWhiteImg },
  { label: "Living Room", icon: Sofa, image: null },
  { label: "Dining Room", icon: UtensilsCrossed, image: diningRoomImg },
  { label: "Office", icon: Briefcase, image: null },
  { label: "Custom Furniture", icon: Palette, image: woodSlabImg },
];

export function Collections() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
              Our Collections
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl font-medium text-dark md:text-5xl">
              Designed for Every Space
            </motion.h2>
          </div>
          <MotionLink
            variants={staggerItem}
            to="/shop"
            className="group mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-dark/70 transition-colors hover:text-primary"
          >
            View All Collections
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </MotionLink>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {CATEGORIES.map(({ label, icon: Icon, image }) => (
            <MotionLink
              key={label}
              to="/shop"
              variants={staggerItem}
              className="group relative flex flex-col"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-primary-100">
                {image ? (
                  <img
                    src={image}
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-200">
                    <Icon className="size-14 text-primary-400" strokeWidth={1} />
                  </div>
                )}
              </div>
              <div
                className={cn(
                  "relative z-10 -mt-5 flex w-fit items-center gap-2 self-center rounded-full bg-white px-4 py-2 shadow-md",
                )}
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <Icon className="size-3.5" strokeWidth={1.6} />
                </span>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-dark">
                  {label}
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
