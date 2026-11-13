import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Each project gets its own uneven 12-column composition. The text block is a
 * solid-background panel that overlaps the image block on some rows, and the
 * image/text order flips down the page.
 */
const layouts = [
  {
    // image 8 cols left, text 5 cols overlapping its right edge
    wrapper: "lg:mt-0",
    image: "lg:col-span-8 lg:col-start-1 lg:row-start-1",
    text: "lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end lg:-mb-12 lg:p-10",
  },
  {
    // narrow image 5 cols right, text 7 cols left overlapping it
    wrapper: "lg:mt-8",
    image: "lg:col-span-5 lg:col-start-8 lg:row-start-1",
    text: "lg:col-span-6 lg:col-start-2 lg:row-start-1 lg:self-start lg:mt-20 lg:-mr-12 lg:p-10",
  },
  {
    // wide image 7 cols, text sits clear of it in 4 cols
    wrapper: "lg:mt-0",
    image: "lg:col-span-7 lg:col-start-1 lg:row-start-1",
    text: "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:self-center",
  },
  {
    // 6 / 5 with a deep right-hand offset
    wrapper: "lg:mt-8",
    image: "lg:col-span-6 lg:col-start-6 lg:row-start-1",
    text: "lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end lg:-mr-10 lg:p-10",
  },
];

function WorkRow({ project, index }: { project: Project; index: number }) {
  const layout = layouts[index % layouts.length];
  return (
    <Reveal as="li" className={cn("mt-24 sm:mt-32", layout.wrapper)}>
      <Link
        href={`/our-work/${project.slug}`}
        className="group grid gap-0 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-glow lg:grid-cols-12"
      >
        <div
          className={cn(
            "relative aspect-[4/3] sm:aspect-[16/10]",
            index % 2 === 0 ? "bg-brand-purple" : "bg-brand-midnight",
            layout.image,
          )}
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>

        <div
          className={cn(
            "relative z-10 bg-background pt-6 lg:pt-10",
            layout.text,
          )}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {String(index + 1).padStart(2, "0")} &nbsp;/&nbsp; {project.category}
          </p>
          <h3 className="mt-3 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-4 text-lg font-medium leading-snug text-foreground">
            {project.tagline}
          </p>
          <p className="mt-3 text-base leading-relaxed text-foreground/70">
            {project.summary}
          </p>
          <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted">
            {project.tags.slice(0, 3).join(" / ")}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-semibold text-foreground group-hover:border-brand-purple group-hover:text-accent">
            Read the case study
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function FeaturedWork({
  slugs,
  title,
}: {
  /** Limit and order the projects shown; defaults to the first four. */
  slugs?: string[];
  title?: React.ReactNode;
}) {
  const list = slugs
    ? slugs.flatMap((s) => projects.filter((p) => p.slug === s))
    : projects.slice(0, 4);

  return (
    <section
      id="work"
      className="scroll-mt-20 overflow-x-clip bg-background px-4 pb-32 pt-28 sm:px-6 sm:pt-36 lg:px-10"
    >
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
        <h2 className="text-5xl font-semibold leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:col-span-8 lg:text-8xl 2xl:text-9xl">
          {title ?? <>Selected work.</>}
        </h2>
        <div className="lg:col-span-4 lg:pb-3">
          <p className="max-w-sm text-base text-foreground/70">
            Platforms, marketplaces and apps we have taken from brief to
            release for founders in education, wellness, travel and luxury.
          </p>
          <Link
            href="/our-work"
            className="mt-5 inline-flex items-center gap-2 border-b-2 border-foreground pb-1 text-sm font-semibold text-foreground hover:border-brand-purple hover:text-accent"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <ul className="mt-4">
        {list.map((p, i) => (
          <WorkRow key={p.slug} project={p} index={i} />
        ))}
      </ul>
    </section>
  );
}
