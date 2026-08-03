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
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {STEPS.map((step, i) => (
        <div key={step.n} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                step.n === activeStep ? "bg-primary text-white" : "bg-dark/8 text-dark/40",
              )}
            >
              {step.n}
            </span>
            <span className={cn("text-sm font-medium", step.n === activeStep ? "text-dark" : "text-dark/40")}>
              {step.n}. {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && <span className="h-px w-8 bg-dark/15 sm:w-12" />}
        </div>
      ))}
    </div>
  );
}
