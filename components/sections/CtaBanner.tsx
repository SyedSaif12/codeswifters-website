import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Got a Project in Mind?",
  description = "Let's discuss how we can turn your vision into a robust, scalable, and smart digital solution. We're just a message away.",
  label = "Book a free strategy call",
}: {
  title?: string;
  description?: string;
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-card/70 px-6 py-14 text-center backdrop-blur-xl sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)]"
        />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted">{description}</p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact-us" size="lg">
            {label} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="secondary" size="lg">
            <Mail className="h-4 w-4" /> {site.email}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
