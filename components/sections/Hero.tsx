import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const entryLinks = [
  { href: "/contact-us", label: "Book a free strategy call" },
  { href: "/our-work", label: "See what we have shipped" },
];

/**
 * Editorial hero: edge-to-edge headline on a solid midnight block, with an
 * uneven 7/5 split underneath. No glow, no mockup, no centred stack.
 */
export function Hero() {
  return (
    <section id="top" className="bg-brand-midnight text-white">
      <div className="px-4 pb-12 pt-10 sm:px-6 sm:pt-14 lg:px-10 lg:pt-20">
        <p className="text-xs font-medium uppercase tracking-widest text-white/70 sm:text-sm">
          Software house &nbsp;/&nbsp; Milton, CA &nbsp;/&nbsp; Karachi, PK
        </p>

        <Reveal delay={0.05}>
          <h1 className="mt-10 text-[2.75rem] font-semibold leading-[0.9] tracking-tighter sm:text-7xl lg:mt-8 lg:text-8xl 2xl:text-9xl">
            Bespoke software,
            <br />
            <span className="text-white/45">engineered to ship.</span>
          </h1>
        </Reveal>

        <div className="mt-8 grid gap-12 border-t border-white/25 pt-10 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <Reveal delay={0.2} className="lg:col-span-7">
            <p className="max-w-2xl text-xl leading-snug text-white sm:text-2xl">
              A senior team in Milton, CA and Karachi that designs and
              builds custom software, web platforms, iOS and Android apps and AI
              features, from the first sketch to the production release.
            </p>
          </Reveal>

          <Reveal delay={0.32} className="lg:col-span-5">
            <ul className="divide-y divide-white/25 border-y border-white/25">
              {entryLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between gap-4 py-5 text-xl font-medium tracking-tight hover:bg-brand-purple sm:text-2xl lg:px-3"
                  >
                    {l.label}
                    <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
