"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, serviceLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const ctaClass =
  "bg-white text-brand-midnight hover:bg-brand-purple hover:text-white";

/** Static header shown while Navbar (which reads the pathname) suspends. */
export function NavbarFallback() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-brand-midnight text-white">
      <div className="flex h-20 items-center px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="CodeSwifters home" className="flex items-center">
          <Logo onDark />
        </Link>
      </div>
    </header>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop mega menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");

  // Condense after the first scroll, hide while scrolling down, show on scroll up.
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev);
  });

  // Close the mega menu on outside click / Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Lock page scroll behind the full-screen mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const indicatorTarget =
    hovered ??
    (servicesOpen || servicesActive
      ? "services"
      : navLinks.find((l) => isActive(l.href))?.href ?? null);

  const Underline = () => (
    <motion.span
      layoutId="nav-underline"
      aria-hidden
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 40 }}
      className="absolute inset-x-0 -bottom-px h-0.5 bg-white"
    />
  );

  const itemClass = (active: boolean) =>
    cn(
      "relative flex h-full items-center px-1 text-sm font-medium tracking-tight transition-colors",
      active ? "text-white" : "text-white/70 hover:text-white",
    );

  const desktopLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      onPointerEnter={() => {
        setHovered(href);
        setServicesOpen(false);
      }}
      onPointerLeave={() => setHovered(null)}
      className={itemClass(isActive(href))}
    >
      {label}
      {indicatorTarget === href && <Underline />}
    </Link>
  );

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: hidden && !mobileOpen && !servicesOpen ? "-100%" : "0%" }}
      transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
      onPointerLeave={(e) => e.pointerType === "mouse" && setServicesOpen(false)}
      className="sticky top-0 z-50 bg-brand-midnight text-white"
    >
      {/* Utility strip: real contact details, collapses once the page scrolls */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/15 text-xs text-white/75 transition-[max-height] duration-300 md:block",
          scrolled ? "max-h-0 border-b-0" : "max-h-10",
        )}
      >
        <div className="flex h-10 items-center justify-between px-6 lg:px-10">
          <p className="uppercase tracking-widest">
            Milton, ON &nbsp;/&nbsp; Karachi, PK
          </p>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex items-center justify-between border-b border-white/15 px-4 transition-[height] duration-300 sm:px-6 lg:px-10",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" aria-label="CodeSwifters home" className="flex items-center">
          <Logo onDark />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden h-full items-center gap-9 md:flex">
          {desktopLink("/", "Home")}

          <div className="flex h-full items-center">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onPointerEnter={(e) => {
                setHovered("services");
                if (e.pointerType === "mouse") setServicesOpen(true);
              }}
              onPointerLeave={() => setHovered(null)}
              onClick={(e) =>
                setServicesOpen((o) =>
                  e.detail === 0 || (e.nativeEvent as PointerEvent).pointerType !== "mouse"
                    ? !o
                    : true,
                )
              }
              className={cn(itemClass(servicesActive || servicesOpen), "gap-1")}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
              {indicatorTarget === "services" && <Underline />}
            </button>
          </div>

          {navLinks.filter((l) => l.href !== "/").map((l) => desktopLink(l.href, l.label))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="border-white/30 text-white/80 hover:border-white hover:text-white" />
          <ButtonLink
            href="/contact-us"
            variant="light"
            size="md"
            className={cn("group hidden sm:inline-flex", ctaClass)}
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </ButtonLink>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Scroll progress hairline */}
      <motion.span
        aria-hidden
        style={{ scaleX: reduce ? 0 : progress, transformOrigin: "left" }}
        className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-glow"
      />

      {/* Desktop mega menu: full width, 5 / 7 split */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-full hidden border-t border-white/15 bg-brand-purple md:block"
          >
            <div className="grid px-6 lg:grid-cols-12 lg:px-10">
              <div className="flex flex-col justify-between gap-8 border-white/25 py-10 lg:col-span-5 lg:border-r lg:pr-10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-white/75">
                    What we build
                  </p>
                  <p className="mt-4 text-3xl font-semibold leading-[1] tracking-tighter lg:text-4xl">
                    One senior team from first sketch to store release.
                  </p>
                </div>
                <Link
                  href="/services"
                  role="menuitem"
                  onClick={closeAll}
                  className="inline-flex w-fit items-center gap-2 border-b-2 border-white pb-1 text-sm font-semibold hover:gap-3"
                >
                  View all services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <ul className="lg:col-span-7">
                {serviceLinks.map(({ href, label, description }, i) => (
                  <li key={href} className="border-b border-white/20 last:border-b-0">
                    <Link
                      href={href}
                      role="menuitem"
                      onClick={closeAll}
                      className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 hover:bg-brand-midnight lg:px-8"
                    >
                      <span className="font-mono text-sm text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-2xl font-semibold tracking-tighter">
                          {label}
                        </span>
                        <span className="mt-1 block text-sm text-white/80">
                          {description}
                        </span>
                      </span>
                      <ArrowUpRight className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu: full-screen, numbered, staggered */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/15 bg-brand-midnight md:hidden"
          >
            <nav aria-label="Mobile" className="flex min-h-full flex-col px-4 pb-8 pt-4 sm:px-6">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services", sub: true },
                ...navLinks.filter((l) => l.href !== "/"),
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + i * 0.05, duration: 0.3 }}
                  className="border-b border-white/15"
                >
                  {"sub" in item ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((o) => !o)}
                        className={cn(
                          "flex w-full items-baseline gap-4 py-4 text-left text-4xl font-semibold tracking-tighter",
                          servicesActive ? "text-white" : "text-white/75",
                        )}
                      >
                        <span className="font-mono text-sm font-normal text-white/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-6 w-6 self-center transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mb-4 ml-8 flex flex-col border-l-2 border-brand-purple pl-4">
                              {serviceLinks.map(({ href, label }) => (
                                <Link
                                  key={href}
                                  href={href}
                                  onClick={closeAll}
                                  className="py-2.5 text-lg text-white/80 hover:text-white"
                                >
                                  {label}
                                </Link>
                              ))}
                              <Link
                                href="/services"
                                onClick={closeAll}
                                className="py-2.5 text-lg font-medium"
                              >
                                View all services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={cn(
                        "flex items-baseline gap-4 py-4 text-4xl font-semibold tracking-tighter",
                        isActive(item.href) ? "text-white" : "text-white/75",
                      )}
                    >
                      <span className="font-mono text-sm font-normal text-white/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <div className="mt-auto pt-10">
                <ButtonLink
                  href="/contact-us"
                  variant="light"
                  size="lg"
                  onClick={closeAll}
                  className={cn("w-full", ctaClass)}
                >
                  Start a project
                </ButtonLink>
                <div className="mt-6 space-y-1 text-sm text-white/75">
                  <a href={site.phoneHref} className="block hover:text-white">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="block hover:text-white">
                    {site.email}
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
