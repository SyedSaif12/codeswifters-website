"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, serviceLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Static header shown while Navbar (which reads the pathname) suspends. */
export function NavbarFallback() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background text-foreground">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="CodeSwifters home" className="flex items-center">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

/**
 * Site header: sits on the page canvas (bg-background), hairline bottom rule,
 * mono location tag, flat hover states. Follows the light/dark theme.
 */
export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!services) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setServices(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServices(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [services]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setServices(false);
  };

  const link = (active: boolean) =>
    cn(
      "relative flex h-full items-center whitespace-nowrap text-sm transition-colors",
      active ? "text-foreground" : "text-muted hover:text-foreground",
      active && "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-brand-violet",
    );

  return (
    <header
      ref={ref}
      onPointerLeave={(e) => e.pointerType === "mouse" && setServices(false)}
      className="sticky top-0 z-50 border-b border-line bg-background text-foreground"
    >
      <div className="flex h-16 items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <div className="flex h-full items-center gap-8">
          <Link href="/" aria-label="CodeSwifters home" className="flex items-center">
            <Logo />
          </Link>
          <p className="hidden border-l border-line pl-8 font-mono text-[11px] uppercase tracking-widest text-muted xl:block">
            Milton, CA / Karachi, PK
          </p>
        </div>

        <nav aria-label="Main" className="hidden h-full items-center gap-5 md:flex lg:gap-8">
          {navLinks
            .filter((l) => l.href === "/")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                onPointerEnter={() => setServices(false)}
                className={link(isActive(l.href))}
              >
                {l.label}
              </Link>
            ))}

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={services}
            onPointerEnter={(e) => e.pointerType === "mouse" && setServices(true)}
            onClick={() => setServices((o) => !o)}
            className={cn(link(pathname.startsWith("/services") || services), "gap-1")}
          >
            Services
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", services && "rotate-180")} />
          </button>

          {navLinks
            .filter((l) => l.href !== "/")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                onPointerEnter={() => setServices(false)}
                className={link(isActive(l.href))}
              >
                {l.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="/contact-us" size="md" className="hidden whitespace-nowrap sm:inline-flex md:hidden lg:inline-flex">
            Start a project <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center border border-line text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.span
        aria-hidden
        style={{ scaleX: reduce ? 0 : progress, transformOrigin: "left" }}
        className="absolute inset-x-0 bottom-0 h-px bg-brand-violet"
      />

      {/* Desktop services panel: hairline list, row floods purple on hover */}
      <AnimatePresence>
        {services && (
          <motion.div
            role="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-background md:block"
          >
            <div className="grid px-6 lg:grid-cols-12 lg:px-10">
              <div className="flex flex-col justify-between gap-6 border-line py-8 lg:col-span-4 lg:border-r lg:pr-8">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">What we build</p>
                <Link
                  href="/services"
                  role="menuitem"
                  onClick={close}
                  className="inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-sm font-medium hover:text-accent"
                >
                  All services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ul className="lg:col-span-8">
                {serviceLinks.map(({ href, label, description }, i) => (
                  <li key={href} className="border-b border-line last:border-b-0">
                    <Link
                      href={href}
                      role="menuitem"
                      onClick={close}
                      className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 px-0 py-5 transition-colors hover:bg-brand-purple hover:px-4 hover:text-white lg:px-6 lg:hover:px-6"
                    >
                      <span className="font-mono text-xs text-muted group-hover:text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-lg font-semibold tracking-tight">{label}</span>
                        <span className="block text-sm text-muted group-hover:text-white/80">{description}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-background md:hidden"
          >
            <nav aria-label="Mobile" className="flex min-h-full flex-col px-4 pb-8 sm:px-6">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                ...serviceLinks.map((s) => ({ href: s.href, label: s.label, sub: true })),
                ...navLinks.filter((l) => l.href !== "/"),
              ].map((item, i, all) => {
                const n = all.slice(0, i + 1).filter((x) => !("sub" in x)).length;
                return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "flex items-baseline gap-4 border-b border-line py-4 tracking-tighter",
                    "sub" in item
                      ? "pl-10 text-lg text-muted"
                      : "text-3xl font-semibold text-foreground",
                  )}
                >
                  {!("sub" in item) && (
                    <span className="font-mono text-xs font-normal text-muted">
                      {String(n).padStart(2, "0")}
                    </span>
                  )}
                  {item.label}
                </Link>
                );
              })}
              <div className="mt-auto pt-10">
                <ButtonLink href="/contact-us" size="lg" onClick={close} className="w-full">
                  Start a project
                </ButtonLink>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
                  Milton, CA / Karachi, PK
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
