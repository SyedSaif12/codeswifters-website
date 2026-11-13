import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, serviceLinks, site } from "@/lib/site";

/**
 * Static preview headers. Hover menus are CSS-only (group-hover / <details>),
 * so these render without any client state. Once one is picked it gets the
 * sticky, scroll and active-state behaviour of the live Navbar.
 */

const links = navLinks.filter((l) => l.href !== "/");

/** 1. Light Minimal: quiet, theme-aware bar with centred nav. */
export function HeaderLightMinimal() {
  return (
    <header className="border-b border-foreground/20 bg-background text-foreground">
      <div className="grid h-20 grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link href="/" aria-label="CodeSwifters home">
          <Logo />
        </Link>

        <nav aria-label="Preview nav" className="hidden items-center gap-9 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-8">
            Home
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 py-6 text-sm font-medium">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 border border-foreground bg-background opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block border-b border-foreground/15 px-5 py-4 text-sm font-medium last:border-b-0 hover:bg-brand-purple hover:text-white"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:underline hover:decoration-2 hover:underline-offset-8"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <ButtonLink href="/contact-us" size="md" className="hidden sm:inline-flex">
            Start a project
          </ButtonLink>
          <Menu className="h-6 w-6 md:hidden" aria-hidden />
        </div>
      </div>
    </header>
  );
}

/** 2. Centered Masthead: newspaper-style, logo in the middle, nav under a heavy rule. */
export function HeaderMasthead() {
  return (
    <header className="bg-background text-foreground">
      <div className="grid items-center gap-2 border-b-2 border-foreground px-4 py-5 sm:px-6 md:grid-cols-3 lg:px-10">
        <p className="hidden text-xs font-medium uppercase tracking-widest text-muted md:block">
          Milton, ON &nbsp;/&nbsp; Karachi, PK
        </p>
        <Link href="/" aria-label="CodeSwifters home" className="justify-self-center">
          <Logo />
        </Link>
        <div className="hidden items-center justify-end gap-4 md:flex">
          <a href={site.phoneHref} className="text-sm font-medium hover:underline">
            {site.phone}
          </a>
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Preview nav"
        className="flex flex-wrap items-stretch justify-center border-b border-foreground/25 text-xs font-semibold uppercase tracking-widest"
      >
        {[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, ...links, { href: "/contact-us", label: "Start a project" }].map(
          (l, i, arr) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className={`px-6 py-4 hover:bg-brand-purple hover:text-white ${
                i < arr.length - 1 ? "border-r border-foreground/25" : "bg-foreground text-background"
              }`}
            >
              {l.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}

/** 3. Purple Index: solid deep-purple bar, numbered links, midnight dropdown. */
export function HeaderPurpleIndex() {
  const items = [{ href: "/", label: "Home" }, { href: "/services", label: "Services", menu: true }, ...links];
  return (
    <header className="bg-brand-purple text-white">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="CodeSwifters home">
          <Logo onDark />
        </Link>

        <nav aria-label="Preview nav" className="hidden h-full items-stretch md:flex">
          {items.map((l, i) => (
            <div key={l.href} className="group relative flex">
              <Link
                href={l.href}
                className="flex items-center gap-2 border-l border-white/25 px-7 text-sm font-medium hover:bg-brand-midnight"
              >
                <span className="font-mono text-xs text-white/65">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </Link>
              {"menu" in l && (
                <div className="invisible absolute left-0 top-full z-20 w-80 bg-brand-midnight opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between border-b border-white/15 px-6 py-4 text-sm hover:bg-white hover:text-brand-midnight"
                    >
                      {s.label} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ButtonLink
            href="/contact-us"
            variant="light"
            size="md"
            className="my-auto ml-6 bg-white text-brand-midnight hover:bg-brand-midnight hover:text-white"
          >
            Start a project
          </ButtonLink>
        </nav>
        <Menu className="h-6 w-6 md:hidden" aria-hidden />
      </div>
    </header>
  );
}

/** 4. Menu Overlay: just a logo and a Menu button; the full-screen menu opens on click. */
export function HeaderMenuOverlay() {
  return (
    <header className="relative z-30 bg-brand-midnight text-white">
      <details className="group">
        <summary className="flex h-20 cursor-pointer list-none items-center justify-between px-4 sm:px-6 lg:px-10 [&::-webkit-details-marker]:hidden">
          <Logo onDark />
          <span className="flex items-center gap-4">
            <span className="hidden text-sm text-white/75 sm:block">{site.email}</span>
            <span className="flex items-center gap-3 border border-white/40 px-4 py-2.5 text-sm font-semibold group-hover:border-white">
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Close</span>
              <span aria-hidden className="relative block h-3 w-5">
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white transition-transform group-open:translate-y-[5px] group-open:rotate-45" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform group-open:-translate-y-[5px] group-open:-rotate-45" />
              </span>
            </span>
          </span>
        </summary>

        <div className="absolute inset-x-0 top-full grid h-[26rem] gap-8 overflow-hidden border-t border-white/20 bg-brand-purple px-4 py-8 sm:px-6 md:grid-cols-12 lg:px-10">
          <nav aria-label="Preview menu" className="md:col-span-8">
            {[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, ...links].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="group/item flex items-baseline gap-4 border-b border-white/20 py-2 text-4xl font-semibold tracking-tighter hover:pl-3 sm:text-5xl"
              >
                <span className="font-mono text-sm font-normal text-white/65">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-4 text-sm text-white/85 md:col-span-4 md:self-end">
            {site.offices.map((o) => (
              <p key={o.country}>
                <span className="block text-base font-medium text-white">{o.country}</span>
                {o.address}
              </p>
            ))}
            <a href={site.phoneHref} className="block text-lg font-medium text-white">
              {site.phone}
            </a>
          </div>
        </div>
      </details>
    </header>
  );
}
