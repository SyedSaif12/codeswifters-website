import type { Metadata } from "next";
import { site } from "@/lib/site";

export const SITE_URL = "https://codeswifters.com";
export const DEFAULT_OG_IMAGE = "/assets/brand/logo-dark.png";

/** Trim copy to a meta-description length (<= 160 chars) on a word boundary. */
export function clampDescription(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "")}…`;
}

/**
 * Per-page metadata: title (the root template appends "| CodeSwifters"),
 * description, canonical, Open Graph and Twitter card.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const desc = clampDescription(description);
  const images = [image ?? DEFAULT_OG_IMAGE];
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description: desc,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description: desc,
      images,
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Organization + ProfessionalService JSON-LD for the root layout. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/brand/logo.png`,
      email: site.email,
      telephone: site.phone,
      sameAs: site.socials.map((s) => s.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: site.name,
      url: SITE_URL,
      image: `${SITE_URL}/assets/brand/logo.png`,
      description:
        "Custom software, web development, mobile apps and AI-powered solutions built by 25+ senior engineers.",
      email: site.email,
      telephone: site.phone,
      priceRange: "$$",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      address: site.offices.map((o) => ({
        "@type": "PostalAddress",
        streetAddress: o.address,
        addressCountry: o.country === "Canada" ? "CA" : "PK",
      })),
    },
  ],
};
