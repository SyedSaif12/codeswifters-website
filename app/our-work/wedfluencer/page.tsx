import type { Metadata } from "next";
import { CaseStudyView } from "@/components/sections/CaseStudyView";
import { wedfluencer as c } from "@/lib/case-studies/wedfluencer";

export const metadata: Metadata = {
  title: "WEDFluencer Case Study",
  description: c.summary,
  openGraph: { images: [c.images.hero] },
};

export default function WedfluencerCaseStudy() {
  return <CaseStudyView c={c} />;
}
