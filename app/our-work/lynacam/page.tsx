import type { Metadata } from "next";
import { CaseStudyView } from "@/components/sections/CaseStudyView";
import { lynacam as c } from "@/lib/case-studies/lynacam";
import { getProject } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

const project = getProject(c.slug)!;

export const metadata: Metadata = pageMetadata({
  title: `${project.name} Case Study`,
  description: c.summary,
  path: `/our-work/${c.slug}`,
  image: c.images.hero,
  type: "article",
});

export default function Page() {
  return <CaseStudyView c={c} />;
}
