import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Estimator } from "@/components/sections/Estimator";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a project in mind? Get in touch with CodeSwifters. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="text-accent-gradient">your project</span>
          </>
        }
        description="At CodeSwifters, we care about people and doing things the right way. We believe in honesty, good work, and creating meaningful relationships with our clients."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Contact />
      <Estimator />
      <Faq />
    </>
  );
}
