import type { Metadata } from "next";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { WorkGrid } from "@/components/sections/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Websites, mobile apps and custom software we've designed and built for clients around the world.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Products we&apos;ve <span className="text-accent-gradient">built &amp; launched</span>
          </>
        }
        description="Our company cares about people and doing things the right way. We believe in honesty, good work, and making our clients happy."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />
      <WorkGrid />
      <ClientLogos />
      <CtaBanner
        title="Have a project in mind?"
        description="Let's discuss how we can turn your vision into a robust, scalable, and smart digital solution."
      />
    </>
  );
}
