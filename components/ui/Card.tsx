import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  hover = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-card/70 backdrop-blur-xl",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/50 hover:shadow-[0_0_40px_-12px] hover:shadow-brand-violet/40",
        className,
      )}
      {...props}
    />
  );
}
