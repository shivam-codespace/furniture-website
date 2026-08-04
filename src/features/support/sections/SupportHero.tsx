import { motion } from "framer-motion";
import { Clock, Headset, MessageCircle, Phone } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import livingRoomImg from "@/assets/images/categories/bedroom-white.jpg";

const HIGHLIGHTS = [
  { icon: Headset, label: "Expert Assistance" },
  { icon: MessageCircle, label: "Quick Responses" },
  { icon: Clock, label: "Lifetime Support" },
];

function HelpCard() {
  return (
    <div className="w-[260px] rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="font-heading text-lg font-medium text-dark">Need Immediate Help?</h3>
      <p className="mt-1 text-xs text-dark/55">Talk to our support expert</p>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
          <Phone className="size-4" strokeWidth={1.6} />
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-dark">+91 98765 43210</span>
          <span className="text-[11px] text-dark/45">Mon - Sat | 9:30 AM - 7:30 PM</span>
        </div>
      </div>

      <div className="my-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-dark/10" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-dark/35">Or</span>
        <span className="h-px flex-1 bg-dark/10" />
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-dark text-sm font-semibold text-white transition-colors hover:bg-primary-700">
        <MessageCircle className="size-4" strokeWidth={1.8} />
        Chat with Us
      </button>
    </div>
  );
}

function HighlightRow() {
  return (
    <motion.div variants={staggerItem} className="mt-2 flex flex-wrap items-start gap-x-9 gap-y-5">
      {HIGHLIGHTS.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2 text-center">
          <Icon className="size-7 text-primary" strokeWidth={1.4} />
          <span className="text-xs font-medium text-dark/70">{label}</span>
        </div>
      ))}
    </motion.div>
  );
}

export function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <img
          src={livingRoomImg}
          alt="A warm, welcoming living space furnished by Vaanam"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute right-10 top-10 pointer-events-auto">
          <HelpCard />
        </div>
      </div>

      <div className="container-luxury relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex max-w-lg flex-col gap-5 py-10 md:py-16"
        >
          <motion.span variants={staggerItem} className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Support
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-medium leading-[1.15] text-dark sm:text-5xl"
          >
            We&apos;re Here for You,
            <br />
            Always.
          </motion.h1>
          <motion.p variants={staggerItem} className="max-w-md text-sm leading-relaxed text-dark/60 sm:text-base">
            From choosing the perfect piece to caring for it for years to come – our team is always ready to help.
          </motion.p>

          <HighlightRow />
        </motion.div>
      </div>

      {/* Mobile: contained image with the help card pinned inside it */}
      <div className="container-luxury relative pb-8 md:hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={livingRoomImg}
            alt="A warm, welcoming living space furnished by Vaanam"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4">
            <HelpCard />
          </div>
        </div>
      </div>
    </section>
  );
}
