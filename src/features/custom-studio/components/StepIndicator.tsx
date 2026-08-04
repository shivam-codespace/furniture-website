import { Anchor, Check, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  { n: 1, label: "Choose Product", icon: Check },
  { n: 2, label: "Customize", icon: Sliders },
  { n: 3, label: "Review & Price", icon: Check },
  { n: 4, label: "Confirm", icon: Anchor },
];

export function StepIndicator({ activeStep = 1 }: { activeStep?: number }) {
  return (
    <div className="flex flex-nowrap items-center gap-x-1.5 gap-y-2 sm:gap-x-3">
      {STEPS.map((step, i) => (
        <div key={step.n} className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold sm:size-6 sm:text-xs",
                step.n === activeStep ? "bg-primary text-white" : "bg-dark/8 text-dark/40",
              )}
            >
              {step.n}
            </span>
            <span
              className={cn(
                "hidden whitespace-nowrap text-sm font-medium sm:inline",
                step.n === activeStep ? "text-dark" : "text-dark/40",
              )}
            >
              {step.n}. {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && <span className="h-px w-4 shrink-0 bg-dark/15 sm:w-12" />}
        </div>
      ))}
    </div>
  );
}
