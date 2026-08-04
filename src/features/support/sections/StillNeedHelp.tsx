import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import craftsmanImg from "@/assets/images/workshop/workshop-craftsman.jpg";

export function StillNeedHelp() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl"
        >
          <img
            src={craftsmanImg}
            alt="A Sharma support specialist ready to help"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-100 via-secondary-100/85 to-transparent" />

          <div className="relative flex flex-col gap-4 p-8 sm:p-10 md:w-3/5 md:p-12">
            <h2 className="font-heading text-2xl font-medium text-dark sm:text-3xl">Still Need Help?</h2>
            <p className="max-w-md text-sm leading-relaxed text-dark/60 sm:text-base">
              Our support team is here to help you with anything you need.
              <br />
              We typically respond within a few minutes.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button className="inline-flex h-12 items-center gap-2 rounded-full bg-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
                <MessageCircle className="size-4" strokeWidth={1.8} />
                Chat with Us
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-full border border-dark/20 px-6 text-sm font-semibold text-dark transition-colors hover:border-dark/40">
                <Phone className="size-4" strokeWidth={1.8} />
                Call Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
