import type { Metadata } from "next";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Websites, mobile apps and custom software we've designed and built for clients around the world.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Our work" }]}
        title={
          <>
            Products we have
            <br />
            <span className="text-accent">built and launched.</span>
          </>
        }
        description={`${projects.length} products, each with a full case study. We believe in honesty, good work, and making our clients happy.`}
      />
      <WorkGrid />
      <NhClientStrip />
      <NhCta
        eyebrow="Start"
        title="Have a project in mind?"
        description="Let's discuss how we can turn your vision into a robust, scalable, and smart digital solution."
      />
    </>
  );
}
