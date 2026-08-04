import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Heart, Settings2, X } from "lucide-react";
import { CustomizePanel } from "@/features/custom-studio/components/CustomizePanel";
import type { CustomizationState } from "@/features/custom-studio/types";

interface MobileCustomizeProps {
  value: CustomizationState;
  onChange: (patch: Partial<CustomizationState>) => void;
  onToggleAddon: (id: string) => void;
}

export function MobileCustomize({ value, onChange, onToggleAddon }: MobileCustomizeProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center gap-1.5 rounded-full border border-dark/20 bg-white px-4 py-2.5 text-xs font-semibold text-dark shadow-sm transition-colors hover:border-dark"
      >
        <Settings2 className="size-3.5" strokeWidth={1.75} />
        Customise
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
                <h2 className="font-heading text-lg text-dark">Customise</h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close customise panel"
                  className="rounded-full p-2 text-dark/60 hover:bg-dark/5"
                >
                  <X className="size-5" strokeWidth={1.75} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-semibold text-dark">1. Choose Product</h3>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-lg border border-dark/15 bg-white px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none">
                      <option>Double Bed</option>
                      <option>Sofa</option>
                      <option>Dining Table</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-dark/40" />
                  </div>
                </div>

                <CustomizePanel value={value} onChange={onChange} onToggleAddon={onToggleAddon} />
              </div>

              <div className="flex items-center gap-3 border-t border-dark/8 bg-white p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="h-12 flex-1 rounded-full bg-dark text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Save Design
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-dark/15 text-dark/60 transition-colors hover:border-dark/35"
                >
                  <Heart className="size-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
