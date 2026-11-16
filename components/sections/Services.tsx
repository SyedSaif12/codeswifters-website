import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}[] = [
  {
    title: "Web development",
    description:
      "Marketing sites and storefronts on Next.js and React, built to load fast and rank, and simple for your team to edit.",
    tags: ["Next.js", "React", "SEO"],
    href: "/services/web-development",
  },
  {
    title: "Web applications",
    description:
      "Dashboards, CRMs, customer portals and SaaS products, with the APIs and cloud setup that sit behind them.",
    tags: ["Dashboards", "APIs", "Cloud"],
    href: "/services/web-applications",
  },
  {
    title: "Mobile apps",
    description:
      "iOS and Android apps in Flutter, from onboarding flows to App Store and Play Store release.",
    tags: ["iOS", "Android", "Flutter"],
    href: "/services/mobile-development",
  },
  {
    title: "Custom software",
    description:
      "Internal tools and workflow automation, wired into the systems your business already runs on.",
    tags: ["Automation", "Integrations"],
    href: "/services#custom-software",
  },
  {
    title: "AI features",
    description:
      "AI inside real products: lead scoring, automated follow-ups, image and document analysis.",
    tags: ["Automation", "Computer vision", "Insights"],
    href: "/services#ai",
  },
];

/**
 * A single-column index instead of a card grid. Each row is an uneven
 * 1 / 6 / 4 / 1 split with a raw divider; hover floods the row with solid purple.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background pb-12 pt-10 sm:pt-14">
      <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <h2 className="text-5xl font-semibold leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:col-span-9 lg:text-8xl 2xl:text-9xl">
          What we build, end to end.
        </h2>
        <p className="max-w-sm self-end text-base text-foreground/70 lg:col-span-3">
          Strategy, design, engineering and release handled by one team, so
          nothing gets lost between a brief and a launch.
        </p>
      </div>

      <ol className="mt-10 border-t-2 border-foreground sm:mt-28">
        {services.map((s, i) => (
          <Reveal as="li" key={s.title} className="border-b border-foreground/25">
            <Link
              href={s.href}
              className="group grid items-start gap-4 px-4 py-8 hover:bg-brand-purple hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-glow sm:px-6 md:grid-cols-12 md:gap-8 md:py-12 lg:px-10"
            >
              <span className="font-mono text-sm text-muted group-hover:text-white/80 md:col-span-1 md:pt-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-4xl font-semibold leading-none tracking-tighter text-foreground group-hover:text-white sm:text-6xl lg:text-7xl md:col-span-6">
                {s.title}
              </h3>
              <div className="md:col-span-4 md:pt-2">
                <p className="text-base leading-relaxed text-foreground/75 group-hover:text-white/90">
                  {s.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted group-hover:text-white/75">
                  {s.tags.join(" / ")}
                </p>
              </div>
              <ArrowUpRight
                aria-hidden
                className="hidden h-8 w-8 justify-self-end text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white md:col-span-1 md:block"
              />
            </Link>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
