import type { Metadata } from "next";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { Contact } from "@/components/sections/Contact";
import { Estimator } from "@/components/sections/Estimator";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a project in mind? Get in touch with CodeSwifters. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
        title={
          <>
            Let&rsquo;s talk about
            <br />
            <span className="text-accent">your project.</span>
          </>
        }
        description="We care about people and doing things the right way. We believe in honesty, good work, and creating meaningful relationships with our clients."
      />
      <Contact />
      <Estimator />
      <Faq />
    </>
  );
}
