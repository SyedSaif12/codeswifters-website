import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/new-homepage/Frame";
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

/** Ledger FAQ: heading (4) + hairline disclosure rows (8). */
export function Faq() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow index="03">FAQ</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl">
            Any questions?
          </h2>
          <p className="mt-4 max-w-xs text-muted">
            Our team is here with answers. Reach out for personalized
            assistance and prompt responses.
          </p>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                {q}
                <Plus
                  aria-hidden
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
