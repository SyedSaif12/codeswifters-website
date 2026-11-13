import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Frame } from "./Frame";

/** Left-aligned editorial headline over a layered, real-product showcase. */
export function NhHero() {
  return (
    <section className="border-b border-line px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-10">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Software house · Milton, CA &amp; Karachi
      </p>
      <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
        Senior engineers.
        <br />
        <span className="text-accent">Shipped products.</span>
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <p className="max-w-xl text-lg leading-relaxed text-muted lg:col-span-6">
          We design and build mobile apps, web platforms and AI-enabled software
          for founders and growing teams. A team of 25+ senior engineers does
          the work, under our own supervision, from first sketch to release.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
          <ButtonLink href="/contact-us" size="lg">
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/our-work" variant="secondary" size="lg">
            See our work
          </ButtonLink>
        </div>
      </div>

      {/* Layered showcase: three real products, stepped surfaces, 1px borders */}
      <div className="relative mt-16 lg:mt-24">
        <div className="border border-line bg-card p-2 sm:p-4">
          <Frame
            label="WEDFluencer · creator platform (web)"
            src="/assets/home/hero-dashboard.png"
            alt="WEDFluencer web profile screen"
            sizes="(min-width: 1024px) 90vw, 100vw"
            priority
          />
        </div>

        <div className="absolute -bottom-8 right-2 hidden w-[44%] sm:block lg:-right-2 lg:w-[38%]">
          <Frame
            label="NEXUS · school management"
            src="/assets/case-studies/nexus/dashboard.png"
            alt="NEXUS admin dashboard"
            aspect="aspect-[2160/1518]"
            sizes="(min-width: 1024px) 34vw, 44vw"
            className="border-foreground/30"
          />
        </div>

        <div className="absolute -bottom-10 left-3 hidden w-[17%] min-w-[120px] border border-line bg-card sm:block lg:-left-6">
          <div className="relative aspect-[390/844] w-full bg-white">
            <Image
              src="/assets/case-studies/luxevault/explore.png"
              alt="Luxe Vault mobile app, explore screen"
              fill
              sizes="(min-width: 1024px) 16vw, 20vw"
              quality={90}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className="h-12 sm:h-16" />
    </section>
  );
}
