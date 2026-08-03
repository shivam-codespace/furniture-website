import { motion } from "framer-motion";
import { LifeBuoy, MapPin, MessageCircle, Video } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const CONTACT_OPTIONS = [
  { icon: Video, label: "Video Call" },
  { icon: MapPin, label: "In-Store" },
  { icon: MessageCircle, label: "WhatsApp" },
];

export function NeedHelpBanner() {
  return (
    <section className="bg-background py-10 md:py-12">
      <div className="container-luxury">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-row items-center justify-between gap-2 sm:gap-8"
        >
          <motion.div variants={staggerItem} className="flex flex-row items-center gap-2 text-left sm:gap-4">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary sm:size-12">
              <LifeBuoy className="size-3.5 sm:size-5" strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-[10px] leading-tight text-dark sm:text-xl md:text-2xl">
                Need help choosing the right furniture?
              </h2>
              <p className="sr-only text-sm text-dark/60 sm:not-sr-only sm:block">
                Book a free consultation with our furniture expert.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex shrink-0 flex-row items-center gap-2 sm:gap-8"
          >
            <button className="inline-flex h-7 shrink-0 items-center gap-2 rounded-full bg-dark px-2.5 text-[9px] font-semibold text-white transition-colors hover:bg-primary-700 sm:h-12 sm:px-6 sm:text-sm">
              Book Consultation
            </button>
            <div className="hidden items-center gap-5 sm:flex">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
