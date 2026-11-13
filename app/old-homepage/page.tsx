import type { Metadata } from "next";
import { OldClientLogos } from "@/components/old-home/OldClientLogos";
import { OldCtaBanner } from "@/components/old-home/OldCtaBanner";
import { OldFeaturedWork } from "@/components/old-home/OldFeaturedWork";
import { OldHero } from "@/components/old-home/OldHero";
import { OldServices } from "@/components/old-home/OldServices";
import { OldTestimonials } from "@/components/old-home/OldTestimonials";

// Reference copy of the previous homepage (git HEAD 4088cd0), kept so sections
// can be lifted into the new home page. Hidden from search engines.
export const metadata: Metadata = {
  title: "Old homepage (reference)",
  robots: { index: false, follow: false },
};

export default function OldHomepage() {
  return (
    <>
      <OldHero />
      <OldClientLogos />
      <OldServices />
      <OldFeaturedWork />
      <OldTestimonials />
      <OldCtaBanner />
    </>
  );
}
