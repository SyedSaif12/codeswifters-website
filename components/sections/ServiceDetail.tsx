import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { MobileVisual, WebAppVisual, WebVisual } from "@/components/sections/DevVisuals";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import type { ServicePage } from "@/lib/services";
import { cn } from "@/lib/utils";

const heroVisuals: Record<string, React.ReactNode> = {
  "mobile-development": <MobileVisual />,
  "web-development": <WebVisual />,
  "web-applications": <WebAppVisual />,
};

/** Shared layout for /services/* detail pages, driven by lib/services.ts. */
export function ServiceDetail({ service }: { service: ServicePage }) {
  const { hero, sections, pillars, gallery, cta } = service;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={{ src: hero.image, alt: hero.alt }}
        visual={heroVisuals[service.slug]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        actions={
          <>
            <ButtonLink href="/contact-us" size="lg">
              {cta.label} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" size="lg">
              See our work
            </ButtonLink>
          </>
        }
      />

      {sections.map((s, i) => (
        <section
          key={s.title}
          className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={cn(i % 2 === 1 && "lg:order-2")}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-4 text-muted">{s.description}</p>
              {s.bullets && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-violet/15 text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-xl">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </section>
      ))}

      {pillars && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Why choose us"
            title={
              <>
                Built to be <GradientText>flexible, secure &amp; scalable</GradientText>
              </>
            }
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, description, icon: Icon }) => (
              <li key={title}>
                <Card className="h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}

      {gallery && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Showcase"
            title={gallery.title}
            description={gallery.description}
          />
          <ul
            className={cn(
              "mt-12 grid gap-4",
              gallery.orientation === "portrait"
                ? "grid-cols-2 lg:grid-cols-4"
                : "sm:grid-cols-2",
            )}
          >
            {gallery.images.map((src, i) => (
              <li key={src}>
                <Card className="overflow-hidden">
                  <div
                    className={cn(
                      "relative bg-brand-violet/5",
                      gallery.orientation === "portrait"
                        ? "aspect-[9/16]"
                        : "aspect-[16/10]",
                    )}
                  >
                    <Image
                      src={src}
                      alt={`${gallery.alt} ${i + 1}`}
                      fill
                      sizes={
                        gallery.orientation === "portrait"
                          ? "(min-width: 1024px) 280px, 50vw"
                          : "(min-width: 640px) 560px, 100vw"
                      }
                      className="object-cover object-top"
                    />
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ClientLogos />
      <ProcessSteps />
      <Testimonials />
      <CtaBanner title={cta.title} description={cta.description} label={cta.label} />
    </>
  );
}
