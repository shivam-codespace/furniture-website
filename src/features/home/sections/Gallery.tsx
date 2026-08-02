import { motion } from "framer-motion";
import { MapPin, MessageCircle, Video } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import bedroomAmberImg from "@/assets/images/products/bedroom-amber.jpg";
import diningRoomImg from "@/assets/images/categories/dining-room.jpg";
import bedroomCleanImg from "@/assets/images/hero/bedroom-clean.jpg";
import detailGridImg from "@/assets/images/passport/detail-grid.jpg";
import woodSlabImg from "@/assets/images/categories/wood-slab.jpg";

const GALLERY = [bedroomAmberImg, diningRoomImg, bedroomCleanImg, detailGridImg, woodSlabImg];

const CONTACT_OPTIONS = [
  { icon: Video, label: "Video Call" },
  { icon: MapPin, label: "In-Store" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function Gallery() {
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-10 flex flex-col gap-4"
        >
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
            Built for Real Homes
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl font-medium text-dark md:text-5xl">
            Loved by Thousands of Families
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-3 gap-3 sm:grid-cols-5"
          >
            {GALLERY.map((src, i) => (
              <motion.div
                key={src + i}
                variants={staggerItem}
                className="group aspect-[3/4] overflow-hidden rounded-2xl first:col-span-2 first:row-span-2 sm:first:col-span-1 sm:first:row-span-1"
              >
                <img
                  src={src}
                  alt="A Vaanam furniture piece in a customer's home"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col justify-between gap-6 rounded-2xl bg-primary-50 p-7"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-xl leading-snug text-dark">
                Let&apos;s create something beautiful for your home.
              </h3>
              <p className="text-sm leading-relaxed text-dark/60">
                Book a free consultation with our furniture expert.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button className="h-12 w-full rounded-full bg-dark text-xs font-semibold tracking-wider text-white transition-colors hover:bg-primary-700">
                BOOK CONSULTATION
              </button>
              <div className="flex items-center justify-between">
                {CONTACT_OPTIONS.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center gap-1.5 text-xs font-medium text-dark/60 transition-colors hover:text-primary"
                  >
                    <Icon className="size-3.5" strokeWidth={1.6} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
