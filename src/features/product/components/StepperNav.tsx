import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  { id: "overview", n: "01", label: "Overview" },
  { id: "materials", n: "02", label: "Materials" },
  { id: "craftsmanship", n: "03", label: "Craftsmanship" },
  { id: "passport", n: "04", label: "Passport" },
  { id: "reviews", n: "05", label: "Reviews" },
  { id: "specifications", n: "06", label: "Specifications" },
];

export function StepperNav() {
  const [activeId, setActiveId] = useState(STEPS[0].id);

  useEffect(() => {
    const elements = STEPS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden w-32 shrink-0 flex-col gap-6 pt-2 lg:flex">
      {STEPS.map((step) => {
        const active = step.id === activeId;
        return (
          <a
            key={step.id}
            href={`#${step.id}`}
            className={cn(
              "relative flex flex-col gap-0.5 border-l-2 pl-4 transition-colors",
              active ? "border-primary" : "border-dark/10 hover:border-dark/25",
            )}
          >
            <span className={cn("text-[11px] font-semibold", active ? "text-primary" : "text-dark/35")}>
              {step.n}
            </span>
            <span className={cn("text-sm", active ? "font-semibold text-dark" : "text-dark/50")}>
              {step.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
