import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    changeFrequency: "weekly" | "monthly",
    priority: number,
  ) => ({ url: `${SITE_URL}${path}`, changeFrequency, priority });

  return [
    entry("/", "weekly", 1),
    entry("/services", "monthly", 0.9),
    ...services.map((s) => entry(s.href, "monthly", 0.8)),
    entry("/our-work", "weekly", 0.9),
    ...projects.map((p) => entry(`/our-work/${p.slug}`, "monthly", 0.7)),
    entry("/about-us", "monthly", 0.6),
    entry("/contact-us", "monthly", 0.8),
  ];
}
