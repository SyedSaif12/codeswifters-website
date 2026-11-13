import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks, serviceLinks, site } from "@/lib/site";

/**
 * Static preview footers. The copyright year is left out here; the applied
 * version uses the same clock-free useSyncExternalStore pattern as the live Footer.
 */

const mainLinks = [...navLinks];

/** 1. Compact Light: one calm row, theme-aware. */
export function FooterCompactLight() {
  return (
    <footer className="border-t-2 border-foreground bg-background text-foreground">
      <div className="grid gap-8 px-4 py-12 sm:px-6 md:grid-cols-12 md:items-center lg:px-10">
        <div className="md:col-span-4">
          <Link href="/" aria-label="CodeSwifters home" className="inline-block">
            <Logo />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-foreground/70">
            Custom software, web, mobile and AI, built in Milton and Karachi.
          </p>
        </div>
        <nav aria-label="Preview footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium md:col-span-5">
          {[...mainLinks, { href: "/services", label: "Services" }].map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-8 hover:underline hover:decoration-2">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:col-span-3 md:text-right">
          <a href={`mailto:${site.email}`} className="text-sm font-semibold underline underline-offset-4">
            {site.email}
          </a>
          <p className="mt-1 text-sm text-foreground/70">{site.phone}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 border-t border-foreground/20 px-4 py-5 text-xs text-foreground/70 sm:flex-row sm:px-6 lg:px-10">
        <p>© CodeSwifters. All rights reserved.</p>
        <ul className="flex gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="hover:text-foreground hover:underline">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

/** 2. Ledger: no columns, each group is one ruled row with its links inline. */
export function FooterLedger() {
  const rows: { label: string; items: { href?: string; text: string }[] }[] = [
    { label: "Services", items: [...serviceLinks.map((s) => ({ href: s.href, text: s.label })), { href: "/services", text: "All services" }] },
    { label: "Company", items: mainLinks.map((l) => ({ href: l.href, text: l.label })) },
    { label: "Offices", items: site.offices.map((o) => ({ text: `${o.country}: ${o.address}` })) },
    { label: "Follow", items: site.socials.map((s) => ({ href: s.href, text: s.label })) },
  ];
  return (
    <footer className="bg-brand-purple px-4 pt-20 text-white sm:px-6 lg:px-10">
      <a
        href={`mailto:${site.email}`}
        className="block break-words text-5xl font-semibold leading-[0.9] tracking-tighter hover:text-white/75 sm:text-7xl lg:text-9xl"
      >
        {site.email}
      </a>
      <dl className="mt-16 border-t-2 border-white">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-2 border-b border-white/30 py-5 md:grid-cols-12 md:gap-8">
            <dt className="text-xs font-medium uppercase tracking-widest text-white/70 md:col-span-2 md:pt-1">{r.label}</dt>
            <dd className="flex flex-wrap gap-x-8 gap-y-2 text-base md:col-span-10">
              {r.items.map((i) =>
                i.href ? (
                  <Link key={i.text} href={i.href} className="font-medium underline-offset-4 hover:underline">
                    {i.text}
                  </Link>
                ) : (
                  <span key={i.text} className="text-white/85">
                    {i.text}
                  </span>
                ),
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <Logo onDark />
        <p className="text-xs text-white/75">© CodeSwifters. All rights reserved.</p>
      </div>
    </footer>
  );
}

/** 3. Giant Sitemap: oversized page links on the left, contact details on the right. */
export function FooterSitemap() {
  const pages = [{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, ...navLinks.filter((l) => l.href !== "/")];
  return (
    <footer className="bg-brand-midnight text-white">
      <div className="grid lg:grid-cols-12">
        <nav aria-label="Preview footer" className="lg:col-span-7">
          {pages.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-baseline justify-between gap-4 border-b border-white/20 px-4 py-5 text-5xl font-semibold tracking-tighter hover:bg-brand-purple sm:px-6 sm:text-6xl lg:px-10 lg:text-7xl"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-mono text-sm font-normal text-white/60">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </span>
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>

        <div className="flex flex-col justify-between gap-12 border-white/20 px-4 py-12 sm:px-6 lg:col-span-5 lg:border-l lg:px-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/65">Start a conversation</p>
            <a href={`mailto:${site.email}`} className="mt-4 block break-words text-3xl font-semibold tracking-tighter hover:text-white/70 sm:text-4xl">
              {site.email}
            </a>
            <a href={site.phoneHref} className="mt-3 block text-lg text-white/85">
              {site.phone}
            </a>
          </div>
          <div className="space-y-4 text-sm text-white/80">
            {site.offices.map((o) => (
              <p key={o.country}>
                <span className="block text-base font-medium text-white">{o.country}</span>
                {o.address}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-white/70">
            <p>© CodeSwifters. All rights reserved.</p>
            <ul className="flex gap-5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-white hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** 4. Two-Tone: light statement and link area on top, solid midnight legal bar underneath. */
export function FooterTwoTone() {
  return (
    <footer>
      <div className="bg-background px-4 py-16 text-foreground sm:px-6 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
              Custom software, built by a senior team.
            </h2>
            <ButtonLink href="/contact-us" size="lg" className="mt-8">
              Book a free strategy call <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="border-b-2 border-foreground pb-2 text-xs font-semibold uppercase tracking-widest">Services</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="border-b-2 border-foreground pb-2 text-xs font-semibold uppercase tracking-widest">Company</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {mainLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 bg-brand-midnight px-4 py-6 text-white sm:px-6 md:flex-row md:items-center lg:px-10">
        <Logo onDark />
        <p className="text-sm text-white/80">
          {site.email} &nbsp;/&nbsp; {site.phone}
        </p>
        <p className="text-xs text-white/70">© CodeSwifters. All rights reserved.</p>
      </div>
    </footer>
  );
}
