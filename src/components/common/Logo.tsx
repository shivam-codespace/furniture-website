import { cn } from "@/lib/utils";
import logoTree from "@/assets/icons/logo-tree.png";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export function Logo({ light = false, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img src={logoTree} alt="" className="h-10 w-auto shrink-0" />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-wider",
            light ? "text-white" : "text-dark",
          )}
        >
          VAANAM
        </span>
        <span
          className={cn(
            "text-[9px] font-medium tracking-[0.35em]",
            light ? "text-white/70" : "text-dark/60",
          )}
        >
          FURNITURES
        </span>
        <span
          className={cn(
            "mt-0.5 text-[8px] font-medium tracking-[0.2em]",
            light ? "text-white/45" : "text-dark/35",
          )}
        >
          EST. 1980
        </span>
      </div>
    </div>
  );
}
