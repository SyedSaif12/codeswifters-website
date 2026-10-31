"use client";

import { useSyncExternalStore } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { GradientText } from "@/components/ui/SectionHeading";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Web Platforms", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "AI Integration", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case Studies", href: "#work" },
      { label: "Tech Stack", href: "#stack" },
      { label: "Estimator", href: "#estimator" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
];

const noopSubscribe = () => () => {};

export function Footer() {
  // Server snapshot keeps the static prerender clock-free; the client
  // snapshot returns the live year after hydration.
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-px overflow-hidden rounded-b-3xl border-x border-b border-line bg-card/70 px-6 py-14 text-center backdrop-blur-xl sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)]"
          />
          <h2 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to ship something <GradientText>exceptional</GradientText>?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Book a free 30-minute strategy call. We&apos;ll map your idea to a
            scoped roadmap within 48 hours.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="#contact" size="lg">
              Book a strategy call <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="mailto:hello@codeswifters.com"
              variant="secondary"
              size="lg"
            >
              <Mail className="h-4 w-4" /> hello@codeswifters.com
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-3">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted">
              A product engineering studio architecting and scaling next-gen
              digital products for startups and enterprises.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
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
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row">
          <p>© {year} CodeSwifters. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
