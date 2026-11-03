import type { LucideIcon } from "lucide-react";

export type CaseStudyFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  alt: string;
  /** "phone" = tall card in a 2-up grid; "wide" = full-width split card */
  kind: "phone" | "wide";
  bullets?: string[];
  /** Zoom into artwork that has transparent padding (wide cards only) */
  zoom?: boolean;
};

/** A long-form story section taken from the client's Figma case study board. */
export type CaseStudySection = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  paragraphs: string[];
  /** Highlighted closing statement */
  callout?: string;
  items?: { icon: LucideIcon; title: string; text: string }[];
};

/**
 * Shape of a hand-built case study (see CaseStudyView). Content lives in
 * lib/case-studies/<slug>.ts; the page file only renders <CaseStudyView />.
 */
export type CaseStudy = {
  slug: string;
  badge: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  images: {
    hero: string;
    heroAlt: string;
    /** Small mark shown in the hero badge */
    icon: string;
    /** "cover" fills the frame; "contain" keeps device strips uncropped */
    heroFit?: "cover" | "contain";
    heroShape?: "square" | "wide";
  };
  meta: {
    services: string[];
    industry: string;
    platforms: string;
    /** Hidden until provided, e.g. "6 months". */
    timeline?: string;
    /** Hidden until the team confirms the real stack. */
    stack?: string[];
  };
  /** Overview narrative, shown right after the hero */
  overview?: CaseStudySection;
  /** Brand identity narrative, shown before the review */
  brand?: CaseStudySection;
  metrics: { value: string; label: string; note: string }[];
  challenge: { title: string; intro: string; points: string[] };
  solution: { title: string; intro: string; points: string[] };
  featuresHeading: { lead: string; accent: string; description: string };
  features: CaseStudyFeature[];
  highlights: { icon: LucideIcon; title: string; text: string }[];
  architecture: {
    heading?: string;
    intro: string;
    nodes: { icon: LucideIcon; label: string; tech: string; layer: string }[];
  };
  /** Company name used to attach the client's review from lib/testimonials */
  reviewCompany?: string;
  ctaTitle?: string;
};

/** CodeSwifters' core stack, shown on every case study without its own stack. */
export const CORE_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL / Prisma",
  "AWS",
];
