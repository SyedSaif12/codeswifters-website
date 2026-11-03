import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/projects";

export function FeaturedWork({
  slugs,
  title,
}: {
  /** Limit and order the projects shown; defaults to the first six. */
  slugs?: string[];
  title?: React.ReactNode;
}) {
  const list = slugs
    ? slugs.flatMap((s) => projects.filter((p) => p.slug === s))
    : projects.slice(0, 6);

  return (
    <section
      id="work"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="Featured Work"
        title={
          title ?? (
            <>
              Products we&apos;ve <GradientText>built &amp; launched</GradientText>
            </>
          )
        }
        description="We care about people and doing things the right way. Here's a look at some of the solutions we've proudly developed."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/our-work" variant="secondary" size="lg">
          View all work <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>
    </section>
  );
}
