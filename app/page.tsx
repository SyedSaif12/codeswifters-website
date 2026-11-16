import type { Metadata } from "next";
import { NhBento } from "@/components/new-homepage/NhBento";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { NhHero } from "@/components/new-homepage/NhHero";
import { NhProcess } from "@/components/new-homepage/NhProcess";
import { NhProof } from "@/components/new-homepage/NhProof";
import { NhTech } from "@/components/new-homepage/NhTech";
import { NhWork } from "@/components/new-homepage/NhWork";
import { pageMetadata } from "@/lib/seo";
import { HomeReviews } from "@/components/sections/HomeReviews";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = pageMetadata({
  title: "Custom Software, Web & AI Development Company",
  description:
    "CodeSwifters is a full-cycle software house. 25+ senior engineers build custom software, web apps, mobile apps and AI features for ambitious businesses.",
  path: "/",
});

// Only verifiable figures: headcount is owner-confirmed, the rest is counted from site data.
const facts = [
  {
    value: "25+",
    label: "Senior engineers",
    note: "Every product is built by our own team, under our supervision.",
  },
  {
    value: String(projects.length),
    label: "Products shipped",
    note: "Each one has a full case study.",
  },
  {
    value: String(testimonials.length),
    label: "Client reviews",
    note: "In the clients' own words.",
  },
  {
    value: String(site.offices.length),
    label: "Offices",
    note: "Milton, CA and Karachi.",
  },
];

export default function Home() {
  return (
    <>
      <NhHero />
      <NhClientStrip />
      <NhBento />
      <NhWork />
      <NhProcess />
      <NhTech />
      <NhProof facts={facts} />
      {/* Same reviews section as the current homepage */}
      <HomeReviews />
      <NhCta />
    </>
  );
}
