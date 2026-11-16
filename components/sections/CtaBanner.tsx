import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

/** Full-bleed solid purple block. One button, one text link, left-aligned. */
export function CtaBanner({
  title = "Tell us what you are building.",
  description = "Send a brief, a sketch or a half-formed idea. A senior engineer replies with questions, a rough scope and a realistic timeline.",
  label = "Book a free strategy call",
}: {
  title?: string;
  description?: string;
  label?: string;
}) {
  return (
    <section className="bg-brand-purple px-4 pb-14 pt-10 text-white sm:px-6 sm:pt-14 lg:px-10">
      <h2 className="max-w-6xl text-5xl font-semibold leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl 2xl:text-9xl">
        {title}
      </h2>

      <div className="mt-8 grid gap-10 border-t border-white/30 pt-10 lg:mt-12 lg:grid-cols-12 lg:gap-10">
        <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl lg:col-span-6">
          {description}
        </p>
        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:col-start-8">
          <ButtonLink
            href="/contact-us"
            variant="light"
            size="lg"
            className="bg-white text-brand-midnight hover:bg-brand-midnight hover:text-white"
          >
            {label} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <a
            href={`mailto:${site.email}`}
            className="text-2xl font-medium tracking-tight underline decoration-2 underline-offset-8 hover:decoration-white/50"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
