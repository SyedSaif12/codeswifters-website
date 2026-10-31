import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Tone = "neutral" | "violet" | "glow" | "soft";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-line/40 text-foreground/80",
  violet: "border-brand-violet/30 bg-brand-violet/10 text-accent",
  glow: "border-brand-glow/30 bg-brand-glow/10 text-accent",
  soft: "border-brand-navy/30 bg-brand-navy/10 text-foreground/80",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
