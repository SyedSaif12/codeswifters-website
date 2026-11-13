import type { Metadata } from "next";
import { NhBento } from "@/components/new-homepage/NhBento";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { NhHero } from "@/components/new-homepage/NhHero";
import { NhProcess } from "@/components/new-homepage/NhProcess";
import { NhProof } from "@/components/new-homepage/NhProof";
import { NhWork } from "@/components/new-homepage/NhWork";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "CodeSwifters (experimental homepage)",
  robots: { index: false, follow: false },
};

// Only verifiable figures: headcount is owner-confirmed, the rest is counted from site data.
const facts = [
  { value: "25+", label: "Senior engineers" },
  { value: String(projects.length), label: "Products shipped" },
  { value: String(testimonials.length), label: "Client reviews" },
  { value: String(site.offices.length), label: "Offices" },
];

const quoteCompanies = ["WEDFluencer", "HeyFlutter", "Lux Vault", "Agent Lists Pro"];
const quotes = quoteCompanies
  .map((c) => testimonials.find((t) => t.company === c))
  .filter((t): t is (typeof testimonials)[number] => Boolean(t));

export default function NewHomepage() {
  return (
    <>
      <NhHero />
      <NhClientStrip />
      <NhBento />
      <NhWork />
      <NhProcess />
      <NhProof facts={facts} quotes={quotes} />
      <NhCta />
    </>
  );
}
