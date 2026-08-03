import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronRight, Heart, PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { StepIndicator } from "@/features/custom-studio/components/StepIndicator";
import { CustomizePanel } from "@/features/custom-studio/components/CustomizePanel";
import { ViewerPanel } from "@/features/custom-studio/components/ViewerPanel";
import { SummaryBar } from "@/features/custom-studio/components/SummaryBar";
import { MaterialTransparency } from "@/features/custom-studio/components/MaterialTransparency";
import { PricingPanel } from "@/features/custom-studio/components/PricingPanel";
import { WhyCustomMade } from "@/features/custom-studio/components/WhyCustomMade";
import {
  ADDONS,
  BASE_PRICE,
  BED_SIZES,
  FINISHES,
  HEADBOARDS,
  STORAGE_TYPES,
  UPHOLSTERY,
  WOOD_TYPES,
} from "@/features/custom-studio/data/options";
import type { CustomizationState } from "@/features/custom-studio/types";

const TRUST_BADGES = [
  { icon: Sparkles, label: "100% Custom Made" },
  { icon: PackageCheck, label: "Premium Materials" },
  { icon: ShieldCheck, label: "Expert Craftsmanship" },
  { icon: Truck, label: "On-time Delivery" },
];

const INITIAL_STATE: CustomizationState = {
  woodType: "sheesham",
  finish: "walnut",
  headboard: "panel",
  storage: "box",
  size: "king",
  upholstery: "velvet",
  addons: ["side-tables", "led-headboard"],
};

export default function CustomStudio() {
  const [customization, setCustomization] = useState<CustomizationState>(INITIAL_STATE);

  const handleChange = (patch: Partial<CustomizationState>) => {
    setCustomization((prev) => ({ ...prev, ...patch }));
  };

  const handleToggleAddon = (id: string) => {
    setCustomization((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((a) => a !== id) : [...prev.addons, id],
    }));
  };

  const price = useMemo(() => {
    const wood = WOOD_TYPES.find((w) => w.id === customization.woodType)?.priceDelta ?? 0;
    const finish = FINISHES.find((f) => f.id === customization.finish)?.priceDelta ?? 0;
    const headboard = HEADBOARDS.find((h) => h.id === customization.headboard)?.priceDelta ?? 0;
    const storage = STORAGE_TYPES.find((s) => s.id === customization.storage)?.priceDelta ?? 0;
    const size = BED_SIZES.find((s) => s.id === customization.size)?.priceDelta ?? 0;
    const upholstery = UPHOLSTERY.find((u) => u.id === customization.upholstery)?.priceDelta ?? 0;
    const addons = customization.addons.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id);
      return sum + (addon?.priceDelta ?? 0);
    }, 0);
    return BASE_PRICE + wood + finish + headboard + storage + size + upholstery + addons;
  }, [customization]);

  return (
    <>
      <Helmet>
        <title>Custom Studio | Vaanam Furnitures</title>
      </Helmet>

      <div className="bg-background pt-[54px] md:pt-[67px]">
        <div className="container-luxury py-4">
          <div className="flex items-center gap-1.5 text-xs text-dark/45">
            <Link to="/" className="hover:text-dark/70">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-dark/70">Custom Studio</span>
          </div>
        </div>

        <div className="container-luxury pb-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
            <div>
              <h1 className="font-heading text-3xl font-medium text-dark sm:text-4xl">Design Your Dream Furniture</h1>
              <p className="mt-1.5 text-sm text-dark/55">Crafted by you. Built by us. Delivered to your home.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-medium text-dark/60">
                  <Icon className="size-4 text-primary" strokeWidth={1.6} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto pb-1">
            <StepIndicator activeStep={1} />
          </div>
        </div>

        <div className="container-luxury pb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-dark">1. Choose Product</h2>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-dark/15 bg-white px-4 py-3 text-sm text-dark focus:border-primary focus:outline-none">
                    <option>Double Bed</option>
                    <option>Sofa</option>
                    <option>Dining Table</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-dark/40" />
                </div>
              </div>

              <CustomizePanel value={customization} onChange={handleChange} onToggleAddon={handleToggleAddon} />

              <div className="flex items-center gap-3 border-t border-dark/8 pt-6">
                <button className="h-12 flex-1 rounded-full bg-dark text-sm font-semibold text-white transition-colors hover:bg-primary-700">
                  Save Design
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-dark/15 text-dark/60 transition-colors hover:border-dark/35"
                >
                  <Heart className="size-4" />
                </button>
              </div>
            </aside>

            <div className="flex flex-col gap-6">
              <ViewerPanel />
              <SummaryBar value={customization} />
              <MaterialTransparency />
              <PricingPanel price={price} />
            </div>
          </div>
        </div>
      </div>

      <WhyCustomMade />
    </>
  );
}
