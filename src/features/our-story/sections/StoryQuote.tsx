import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function StoryQuote() {
  return (
    <section className="bg-background pb-16 md:pb-20">
      <div className="container-luxury">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <p className="text-balance font-heading text-xl italic leading-relaxed text-dark sm:text-2xl">
            &ldquo;We don&apos;t just build furniture. We build relationships that last for generations.&rdquo;
          </p>
          <span className="text-sm font-semibold text-primary">— The Sharma Family</span>
        </motion.div>
      </div>
    </section>
  );
}
