"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech Stack" },
  { href: "#work", label: "Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#estimator", label: "Estimator" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="hidden items-center gap-2 rounded-full border border-brand-violet/30 bg-brand-violet/5 px-2.5 py-1 text-[11px] font-medium text-accent lg:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-glow shadow-[0_0_8px] shadow-brand-glow" />
            </span>
            Available for Q4 Projects
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-line/60 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="#contact"
            variant="light"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book Call
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground/80 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-foreground/80 hover:bg-line/60"
                >
                  {l.label}
                </a>
              ))}
              <ButtonLink
                href="#contact"
                variant="light"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                Book Call
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
