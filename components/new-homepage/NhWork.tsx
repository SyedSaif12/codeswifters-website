import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Eyebrow, Frame } from "./Frame";

const picks = [
  {
    slug: "wedfluencer",
    src: "/assets/home/hero-dashboard.png",
    aspect: "aspect-[1713/1071]",
    label: "WEDFluencer · web",
  },
  {
    slug: "biotip",
    src: "/assets/home/biotip.png",
    aspect: "aspect-[3840/2390]",
    label: "BioTip eyeApp · mobile",
  },
  {
    slug: "luxevault",
    src: "/assets/home/luxe-vault.png",
    aspect: "aspect-[3840/2390]",
    label: "Luxe Vault · mobile",
  },
  {
    slug: "nexus",
    src: "/assets/case-studies/nexus/dashboard.png",
    aspect: "aspect-[2160/1518]",
    label: "NEXUS · web application",
  },
] as const;

/** Editorial alternating rows. Spans flip 7/5 and 5/7; the whole row is the link. */
export function NhWork({
  index = "02",
  eyebrow = "Selected work",
  heading = "Real products, in real users’ hands.",
}: {
  index?: string;
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        {heading}
      </h2>

      <div className="mt-8 border-t border-line">
        {picks.map((p, i) => {
          const project = getProject(p.slug);
          if (!project) return null;
          const flip = i % 2 === 1;
          return (
            <Link
              key={p.slug}
              href={`/our-work/${p.slug}`}
              className="group grid gap-8 border-b border-line py-10 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-12 lg:px-6"
            >
              <div
                className={cn(
                  "lg:col-span-7",
                  flip && "lg:order-2 lg:col-span-5",
                )}
              >
                <Frame
                  label={p.label}
                  src={p.src}
                  alt={`${project.name} preview`}
                  aspect={p.aspect}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div
                className={cn(
                  "flex flex-col justify-between lg:col-span-5",
                  flip && "lg:order-1 lg:col-span-7 lg:pr-12",
                )}
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">
                    0{i + 1} · {project.category}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-lg text-foreground/80 group-hover:text-white">
                    {project.tagline}
                  </p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-muted group-hover:text-white/80">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted group-hover:text-white/80">
                    {project.tags.map((t) => (
                      <li key={t}>#{t.toLowerCase().replace(/\s+/g, "-")}</li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 group-hover:underline">
                    Read the case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
