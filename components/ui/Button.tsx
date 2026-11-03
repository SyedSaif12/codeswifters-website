import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-gradient text-white shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:brightness-110",
  secondary:
    "border border-line bg-card/70 text-foreground backdrop-blur hover:border-brand-glow/60 hover:bg-line/60",
  ghost: "text-foreground/80 hover:bg-line/60 hover:text-white",
  light: "bg-foreground text-background hover:bg-foreground/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type Common = { variant?: Variant; size?: Size; className?: string };

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cn(base, variants[variant], sizes[size], className);
  // Internal routes use client-side navigation; mailto:, tel:, http(s) stay plain anchors.
  if (typeof href === "string" && href.startsWith("/")) {
    return <Link href={href} className={cls} {...props} />;
  }
  return <a href={href} className={cls} {...props} />;
}
