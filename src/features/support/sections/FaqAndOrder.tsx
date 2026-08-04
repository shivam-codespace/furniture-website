import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

const FAQS = [
  "How can I track my order?",
  "What is your return policy?",
  "Do you offer customization?",
  "What kind of warranty do you provide?",
  "How do I care for my wooden furniture?",
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((question, i) => {
        const isOpen = open === i;
        return (
          <div key={question} className="rounded-xl border border-dark/10 px-4">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-sm font-medium text-dark"
            >
              {question}
              <Plus className={cn("size-4 shrink-0 text-primary transition-transform", isOpen && "rotate-45")} strokeWidth={2} />
            </button>
            {isOpen && (
              <p className="pb-3.5 text-sm leading-relaxed text-dark/55">
                Our support team can walk you through this in detail — reach out via chat or call and we&apos;ll help
                right away.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FaqAndOrder() {
  return (
    <section className="py-4 md:py-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 gap-6 rounded-[28px] border border-dark/8 bg-primary-50/30 p-3 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-dark/8 bg-white p-6 sm:p-8"
          >
            <h2 className="font-heading text-xl font-medium text-dark">Common Questions</h2>
            <div className="mt-4">
              <FaqAccordion />
            </div>
            <button className="group mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-dark/20 px-5 text-sm font-semibold text-dark transition-colors hover:border-dark/40">
              View All FAQs
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-dark/8 bg-white p-6 sm:p-8"
          >
            <h2 className="font-heading text-xl font-medium text-dark">Order Support</h2>
            <p className="mt-1 text-sm text-dark/55">
              Track your order, check delivery status or get help with your purchase.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Enter your Order ID or Mobile Number"
                className="h-12 w-full rounded-full border border-dark/15 px-5 text-sm text-dark placeholder:text-dark/40 focus:border-primary focus:outline-none"
              />
              <button className="h-12 shrink-0 rounded-full bg-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700">
                Track Order
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-primary-50/60 p-5">
              <div>
                <h3 className="text-sm font-semibold text-dark">Where can I find my Order ID?</h3>
                <p className="mt-1 text-xs leading-relaxed text-dark/55">
                  You can find your Order ID in the order confirmation email or in your account under My Orders.
                </p>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
                <FileText className="size-5" strokeWidth={1.5} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
