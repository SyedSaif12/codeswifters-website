import type { Metadata } from "next";
import { CaseStudyView } from "@/components/sections/CaseStudyView";
import { wightguide as c } from "@/lib/case-studies/wightguide";
import { getProject } from "@/lib/projects";

const project = getProject(c.slug)!;

export const metadata: Metadata = {
  title: `${project.name} Case Study`,
  description: c.summary,
  openGraph: { images: [c.images.hero] },
};

export default function Page() {
  return <CaseStudyView c={c} />;
}
