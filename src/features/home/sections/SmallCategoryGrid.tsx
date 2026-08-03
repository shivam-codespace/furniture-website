import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import bedroomWhiteImg from "@/assets/images/categories/bedroom-white.jpg";
import productStudioImg from "@/assets/images/products/product-studio.jpg";
import woodSlabImg from "@/assets/images/categories/wood-slab.jpg";

const ITEMS = [
  { name: "Dressing Tables", image: bedroomWhiteImg, icon: null },
  { name: "Office Furniture", image: null, icon: Briefcase },
  { name: "Mattresses & Pillow", image: productStudioImg, icon: null },
  { name: "Chairs & Tables", image: woodSlabImg, icon: null },
];

export function SmallCategoryGrid() {
  return (
    <motion.section
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-4 gap-1.5 mt-2.5 mb-2.5 sm:gap-4"
    >
      {ITEMS.map(({ name, image, icon: Icon }) => (
        <motion.div key={name} variants={staggerItem} className="group relative h-[90px] overflow-hidden sm:h-[160px] md:h-[220px]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary-800">
              {Icon && <Icon className="size-5 text-white/20 sm:size-10 md:size-14" strokeWidth={1} />}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
          <Link to="/shop" className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-1.5 sm:gap-1.5 sm:p-5">
            <span className="font-heading text-[9px] leading-tight text-white sm:text-base md:text-lg">{name}</span>
            <span className="hidden items-center gap-1.5 text-xs font-medium text-white/80 sm:inline-flex">
              Explore
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
