"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, serviceLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkBase =
  "rounded-full px-4 py-2 text-sm transition-colors hover:bg-line/60 hover:text-foreground";

/** Static header shown while Navbar (which reads the pathname) suspends. */
export function NavbarFallback() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="CodeSwifters home" className="flex items-center">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const servicesActive = pathname.startsWith("/services");

  // Close the desktop dropdown on outside click / Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
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

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const navItem = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive(href) ? "page" : undefined}
      className={cn(
        linkBase,
        isActive(href) ? "bg-line/50 text-foreground" : "text-muted",
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="CodeSwifters home" className="flex items-center gap-3">
          <Logo />
          <span className="hidden items-center gap-2 rounded-full border border-brand-violet/30 bg-brand-violet/5 px-2.5 py-1 text-[11px] font-medium text-accent xl:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-glow shadow-[0_0_8px] shadow-brand-glow" />
            </span>
            Available for Q4 Projects
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItem("/", "Home")}

          <div
            ref={dropdownRef}
            className="relative"
            // Hover opens the menu for a real mouse only; touch uses tap-to-toggle.
            onPointerEnter={(e) => e.pointerType === "mouse" && setServicesOpen(true)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={(e) =>
                // detail 0 = keyboard (Enter/Space) and touch/AT taps toggle;
                // a mouse click keeps a hover-opened menu open.
                setServicesOpen((o) =>
                  e.detail === 0 || (e.nativeEvent as PointerEvent).pointerType !== "mouse"
                    ? !o
                    : true,
                )
              }
              className={cn(
                linkBase,
                "flex items-center gap-1",
                servicesActive || servicesOpen
                  ? "bg-line/50 text-foreground"
                  : "text-muted",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  // pt-3 bridges the gap so the hover state isn't lost
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-card p-2 shadow-2xl shadow-brand-violet/10">
                    {serviceLinks.map(({ href, label, description, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        role="menuitem"
                        onClick={closeAll}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-violet/10"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-violet/10 text-accent ring-1 ring-line">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {label}
                          </span>
                          <span className="block text-xs text-muted">
                            {description}
                          </span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      role="menuitem"
                      onClick={closeAll}
                      className="mt-1 block rounded-xl border-t border-line px-3 py-2.5 text-sm font-medium text-accent hover:bg-brand-violet/10"
                    >
                      View all services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks
            .filter((l) => l.href !== "/")
            .map((l) => navItem(l.href, l.label))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="/contact-us"
            variant="light"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book a Demo
          </ButtonLink>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground/80 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <nav aria-label="Mobile" className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto p-4">
              <Link
                href="/"
                onClick={closeAll}
                className={cn("rounded-xl px-4 py-3", isActive("/") ? "bg-line/50 text-foreground" : "text-foreground/80")}
              >
                Home
              </Link>

              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((o) => !o)}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-left",
                  servicesActive ? "bg-line/50 text-foreground" : "text-foreground/80",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    mobileServicesOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 flex flex-col gap-1 border-l border-line pl-3">
                      {serviceLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeAll}
                          className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-line/50 hover:text-foreground"
                        >
                          {label}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={closeAll}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-accent"
                      >
                        View all services →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks
                .filter((l) => l.href !== "/")
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className={cn(
                      "rounded-xl px-4 py-3",
                      isActive(l.href) ? "bg-line/50 text-foreground" : "text-foreground/80",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}

              <ButtonLink
                href="/contact-us"
                variant="light"
                onClick={closeAll}
                className="mt-2"
              >
                Book a Demo
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
