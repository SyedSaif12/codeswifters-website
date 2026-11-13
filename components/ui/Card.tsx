import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// Flat surface: no blur, no glow. Hover is a plain border-colour change.
export function Card({
  className,
  hover = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-card",
        hover && "transition-colors duration-200 hover:border-brand-purple",
        className,
      )}
      {...props}
    />
  );
}
