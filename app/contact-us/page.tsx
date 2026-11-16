import type { Metadata } from "next";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { Contact } from "@/components/sections/Contact";
import { Estimator } from "@/components/sections/Estimator";
import { Faq } from "@/components/sections/Faq";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Have a software, web or mobile project in mind? Contact CodeSwifters for a free estimate, a rough scope and a realistic timeline. We reply within one business day.",
  path: "/contact-us",
});

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
