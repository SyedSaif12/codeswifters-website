import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

/** Solid brand block. One primary action, one direct email line. */
export function NhCta({
  eyebrow = "06 / Start",
  title = "Bring us the idea. A senior engineer writes back.",
  description = "Send a brief, a sketch or a half-formed plan. You get questions, a rough scope and a realistic timeline.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-purple px-4 pb-12 pt-10 text-white sm:px-6 sm:pt-14 lg:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-white/70">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-8 border-t border-white/30 pt-8 lg:grid-cols-12">
        <p className="max-w-lg text-lg text-white/85 lg:col-span-6">
          {description}
        </p>
        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:col-start-8">
          <ButtonLink
            href="/contact-us"
            size="lg"
            className="bg-white text-brand-midnight hover:bg-brand-midnight hover:text-white"
          >
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <a
            href={`mailto:${site.email}`}
            className="text-xl font-medium tracking-tight underline decoration-2 underline-offset-8 hover:decoration-white/50"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
