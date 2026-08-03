import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";
import workshopCraftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import bedroomWhiteImg from "@/assets/images/categories/bedroom-white.jpg";

const MILESTONES = [
  {
    year: "1950",
    title: "The Beginning",
    desc: "Our founder, Raghavan Nair, started a humble woodworking workshop with a belief – 'Honest work lasts forever.'",
    image: carpenterSawImg,
    vintage: true,
  },
  {
    year: "1975",
    title: "Growing with Trust",
    desc: "Quality craftsmanship and word-of-mouth trust helped us build lasting relationships and a bigger family of happy customers.",
    image: workshopCraftsmanImg,
    vintage: true,
  },
  {
    year: "1995",
    title: "The Next Generation",
    desc: "With new ideas and modern equipment, we expanded our capabilities while keeping our values unchanged.",
    image: craftSandingImg,
    vintage: true,
  },
  {
    year: "Today",
    title: "Crafting the Future",
    desc: "Four generations later, we continue to blend tradition with technology to create furniture that stands the test of time.",
    image: bedroomWhiteImg,
    vintage: false,
  },
];

export function LegacyTimeline() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            A Legacy Built Over Time
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {MILESTONES.map(({ year, title, desc, image, vintage }) => (
            <motion.div key={year} variants={staggerItem} className="flex flex-col">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[4/3] w-full object-cover"
                  style={vintage ? { filter: "sepia(0.55) contrast(1.05) brightness(0.9)" } : undefined}
                />
              </div>
              <div className="relative mt-5 flex items-center">
                <span className="h-px w-full bg-dark/15" />
                <span className="absolute left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-primary" />
              </div>
              <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
                <span className="font-heading text-lg font-semibold text-primary">{year}</span>
                <h3 className="font-heading text-base font-medium text-dark">{title}</h3>
                <p className="text-sm leading-relaxed text-dark/55">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
