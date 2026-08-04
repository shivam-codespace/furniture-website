import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Sidebar } from "@/features/shop/sections/Sidebar";

export function MobileFilters() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex shrink-0 items-center gap-1 rounded-full border border-dark/20 bg-white px-2 py-1.5 text-[10px] font-semibold text-dark transition-colors hover:border-dark sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs"
      >
        <SlidersHorizontal className="size-3 sm:size-3.5" strokeWidth={1.75} />
        Filters
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-dark/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 left-0 z-[95] flex w-full max-w-sm flex-col bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-dark/8 bg-white px-5 py-4">
                <h2 className="font-heading text-lg text-dark">Filters</h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close filters"
                  className="rounded-full p-2 text-dark/60 hover:bg-dark/5"
                >
                  <X className="size-5" strokeWidth={1.75} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <Sidebar />
              </div>

              <div className="border-t border-dark/8 bg-white p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-dark py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
