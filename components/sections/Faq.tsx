import { ChevronDown } from "lucide-react";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "How can I request a project quote?",
    a: `You can easily request a project quote by reaching out to our sales team through the contact form on our website or by emailing ${site.email}.`,
  },
  {
    q: "How long does a project take?",
    a: "Project timelines vary based on the complexity and scope. We work closely with clients to establish realistic timelines, ensuring timely delivery without compromising quality.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, CodeSwifters offers post-launch support and maintenance services to address any issues, implement updates, and ensure the continued optimal performance of your software.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Any <GradientText>questions?</GradientText>
          </>
        }
        description="Our team is here to provide answers. Reach out for personalized assistance and prompt responses."
      />
      <div className="mt-10 space-y-3">
        {faqs.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-2xl border border-line bg-card/70 p-5 backdrop-blur-xl transition-colors open:border-brand-violet/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown
                aria-hidden
                className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
