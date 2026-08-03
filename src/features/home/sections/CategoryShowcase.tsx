import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import bedsImg from "@/assets/images/products/product-front.jpg";
import sofaImg from "@/assets/images/categories/sofa-sectional-modern.jpg";
import diningImg from "@/assets/images/categories/dining-room.jpg";

const CATEGORIES = [
  {
    n: "01",
    name: "Beds",
    description: "Solid wood beds that bring warmth, strength and timeless elegance to your space.",
    image: bedsImg,
    theme: "light" as const,
    imageSide: "right" as const,
  },
  {
    n: "02",
    name: "Sofas",
    description: "Comfort that feels as good as it looks. Thoughtfully designed for the way you live.",
    image: sofaImg,
    imagePosition: "center 78%",
    theme: "dark" as const,
    imageSide: "left" as const,
  },
  {
    n: "03",
    name: "Dining",
    description: "Beautifully crafted dining sets to bring people together, every single day.",
    image: diningImg,
    theme: "light" as const,
    imageSide: "right" as const,
  },
];

export function CategoryShowcase() {
  return (
    <section className="flex flex-col gap-2.5">
      {CATEGORIES.map((cat) => (
        <motion.div
          key={cat.name}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={cn(
            "grid",
            cat.imageSide === "left"
              ? "grid-cols-[60%_40%] [&>*:first-child]:order-2"
              : "grid-cols-[40%_60%]",
          )}
        >
          <div
            className={cn(
              "flex flex-col justify-center gap-1.5 px-3 py-4 sm:gap-4 sm:px-6 sm:py-16 md:py-0 lg:px-20",
              cat.theme === "dark" ? "bg-[#1c2620] text-white" : "bg-background text-dark",
            )}
          >
            <motion.div variants={staggerItem} className="flex items-center gap-1.5 sm:gap-3">
              <span className="text-[8px] font-semibold tracking-[0.1em] opacity-60 sm:text-xs sm:tracking-[0.15em]">{cat.n}</span>
              <span className={cn("h-px w-4 sm:w-8", cat.theme === "dark" ? "bg-white/30" : "bg-dark/20")} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-base font-medium sm:text-4xl lg:text-5xl">
              {cat.name}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className={cn(
                "max-w-xs text-[10px] leading-snug sm:text-sm sm:leading-relaxed",
                cat.theme === "dark" ? "text-white/65" : "text-dark/60",
              )}
            >
              {cat.description}
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                to="/shop"
                className={cn(
                  "group mt-1 inline-flex items-center gap-1 text-[10px] font-semibold sm:mt-2 sm:gap-2 sm:text-sm",
                  cat.theme === "dark" ? "text-white hover:text-gold" : "text-dark hover:text-primary",
                )}
              >
                Explore {cat.name}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1 sm:size-4" />
              </Link>
            </motion.div>
          </div>

          <div className="h-[130px] sm:h-[220px] md:h-[425px] lg:h-[476px]">
            <img
              src={cat.image}
              alt={cat.name}
              className="h-full w-full object-cover"
              style={cat.imagePosition ? { objectPosition: cat.imagePosition } : undefined}
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
