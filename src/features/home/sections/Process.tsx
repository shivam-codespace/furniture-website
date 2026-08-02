import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import woodLogsImg from "@/assets/images/workshop/wood-logs.jpg";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";
import constructionCalloutsImg from "@/assets/images/passport/construction-callouts.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import woodSlabImg from "@/assets/images/categories/wood-slab.jpg";
import productMultiviewImg from "@/assets/images/products/product-multiview.jpg";
import deliveryTruckImg from "@/assets/images/support/delivery-truck.jpg";

const STEPS = [
  { n: "01", title: "Wood Selection", description: "Carefully chosen seasoned wood", image: woodLogsImg },
  { n: "02", title: "Cutting & Shaping", description: "Precision cutting for perfect strength", image: carpenterSawImg },
  { n: "03", title: "Joinery & Assembly", description: "Expert hands, strong joinery", image: constructionCalloutsImg },
  { n: "04", title: "Sanding", description: "Smooth sanding for perfect finish", image: craftSandingImg },
  { n: "05", title: "Polishing", description: "Premium polish for long life", image: woodSlabImg },
  { n: "06", title: "Quality Check", description: "Multi-point quality inspection", image: productMultiviewImg },
  { n: "07", title: "Packaging", description: "Safe & secure packaging", image: null },
  { n: "08", title: "Delivered", description: "On-time delivery with care", image: deliveryTruckImg },
];

export function Process() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 flex flex-col gap-4"
        >
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
            Our Process
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl font-medium text-dark md:text-5xl">
            How We Build Your Furniture
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-4 lg:flex lg:items-start lg:justify-between"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-11 hidden border-t border-dashed border-primary-200 lg:block" />

          {STEPS.map(({ n, title, description, image }) => (
            <motion.div
              key={n}
              variants={staggerItem}
              className="relative z-10 flex flex-col items-center gap-4 text-center lg:w-[11%]"
            >
              <div className="relative">
                <div className="size-[88px] overflow-hidden rounded-full border-4 border-background bg-primary-100 shadow-sm ring-1 ring-dark/5">
                  {image ? (
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-200">
                      <Package className="size-7 text-primary-500" strokeWidth={1.3} />
                    </div>
                  )}
                </div>
                <span className="absolute -bottom-1.5 left-1/2 flex h-6 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-dark text-[10px] font-semibold text-white">
                  {n}
                </span>
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3 className="font-heading text-sm text-dark">{title}</h3>
                <p className="text-[11px] leading-snug text-dark/55">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
