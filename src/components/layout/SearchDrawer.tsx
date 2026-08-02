import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SUGGESTIONS = ["Storage Beds", "Recliner Sofas", "Solid Wood Wardrobes", "Dining Sets"];

export function SearchDrawer({ open, onClose }: SearchDrawerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-dark/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-[80] bg-white pb-10 pt-28 shadow-2xl"
          >
            <div className="container-luxury">
              <div className="flex items-center gap-4 border-b border-dark/15 pb-4">
                <Search className="size-6 text-dark/40" strokeWidth={1.5} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search beds, sofas, wardrobes..."
                  className="w-full bg-transparent font-heading text-2xl text-dark placeholder:text-dark/30 focus:outline-none md:text-4xl"
                />
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="rounded-full p-2 text-dark/50 transition-colors hover:bg-dark/5 hover:text-dark"
                >
                  <X className="size-6" strokeWidth={1.5} />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-dark/40">
                  Popular
                </span>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="rounded-full border border-dark/15 px-4 py-1.5 text-sm text-dark/70 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
