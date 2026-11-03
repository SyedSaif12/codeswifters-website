import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <p className="text-accent-gradient text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl font-bold text-foreground">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/" size="lg">
          Back home <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/our-work" variant="secondary" size="lg">
          Our work
        </ButtonLink>
      </div>
    </section>
  );
}
