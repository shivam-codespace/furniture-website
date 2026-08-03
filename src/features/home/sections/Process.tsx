import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import woodLogsImg from "@/assets/images/workshop/wood-logs.jpg";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";
import hingeImg from "@/assets/images/materials/hinge.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";
import deliveryTruckImg from "@/assets/images/support/delivery-truck.jpg";

const STEPS = [
  { n: "01", title: "Premium Wood", image: woodLogsImg },
  { n: "02", title: "Cutting & Shaping", image: carpenterSawImg },
  { n: "03", title: "Joinery & Assembly", image: hingeImg },
  { n: "04", title: "Sanding & Polishing", image: craftSandingImg },
  { n: "05", title: "Quality Check", image: workshopCraftsmanImg },
  { n: "06", title: "Delivered with Care", image: deliveryTruckImg },
];

export function Process() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-medium text-dark sm:text-4xl">
            How We Build Your Furniture
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-nowrap items-start justify-start gap-x-1 overflow-x-auto px-1 pb-2 sm:justify-center sm:gap-x-4 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {STEPS.map(({ n, title, image }, i) => (
            <div key={n} className="flex shrink-0 items-start">
              <motion.div variants={staggerItem} className="flex w-14 shrink-0 flex-col items-center gap-1.5 text-center sm:w-28 sm:gap-3">
                <div className="size-11 overflow-hidden rounded-full border border-dark/15 bg-primary-100 sm:size-20">
                  <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] font-semibold text-dark/70 sm:text-[10px]">{n}</span>
                  <h3 className="font-heading text-[9px] leading-tight text-dark sm:text-sm">{title}</h3>
                </div>
              </motion.div>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  className="mt-5 hidden size-4 shrink-0 text-dark/20 sm:mt-9 sm:block"
                  strokeWidth={1.5}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
