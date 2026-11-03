"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/ui/SocialIcons";
import { serviceLinks, site } from "@/lib/site";

const company = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialIcons = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, X: XIcon };

const noopSubscribe = () => () => {};

export function Footer() {
  // Server snapshot keeps the static prerender clock-free; the client
  // snapshot returns the live year after hydration.
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  const linkClass = "transition-colors hover:text-accent";

  return (
    <footer className="border-t border-line bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="CodeSwifters home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Leveraging the latest technologies to create impactful,
              high-performance software that accelerates business growth.
            </p>
            <div className="mt-6 flex gap-3">
              {site.socials.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-glow/50 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={linkClass}>
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className={`flex items-center gap-2 ${linkClass}`}>
                  <Mail className="h-4 w-4 shrink-0 text-accent" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className={`flex items-center gap-2 ${linkClass}`}>
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> {site.phone}
                </a>
              </li>
              {site.offices.map((o) => (
                <li key={o.country} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    <span className="font-medium text-foreground/90">
                      {o.country} Office
                    </span>
                    <br />
                    {o.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row">
          <p>© {year} CodeSwifters. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
