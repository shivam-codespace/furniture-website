import { useState } from "react";

interface FilterOption {
  label: string;
  count: number;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  initialVisible?: number;
}

export function FilterGroup({ title, options, initialVisible = 4 }: FilterGroupProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? options : options.slice(0, initialVisible);
  const hasMore = options.length > initialVisible;

  return (
    <div className="flex flex-col gap-3 border-t border-dark/8 py-5">
      <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-dark/70">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {visible.map((option) => (
          <li key={option.label}>
            <label className="flex cursor-pointer items-center justify-between gap-2 text-sm text-dark/70 hover:text-dark">
              <span className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  className="size-4 rounded border-dark/25 text-primary accent-primary focus:ring-primary/40"
                />
                {option.label}
              </span>
              <span className="text-xs text-dark/40">{option.count}</span>
            </label>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="self-start text-xs font-semibold text-primary hover:text-primary-700"
        >
          {expanded ? "− View Less" : "+ View More"}
        </button>
      )}
    </div>
  );
}
