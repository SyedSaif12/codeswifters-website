import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Eyebrow, Frame } from "@/components/new-homepage/Frame";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { HomeReviews } from "@/components/sections/HomeReviews";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import type { ServicePage } from "@/lib/services";
import { cn } from "@/lib/utils";

const gallerySpans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

/** Shared layout for /services/* detail pages, driven by lib/services.ts. */
export function ServiceDetail({ service }: { service: ServicePage }) {
  const { hero, sections, pillars, gallery, cta } = service;
  const portrait = gallery?.orientation === "portrait";

  return (
    <>
      <PageIntro
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        title={hero.title}
        description={hero.description}
      >
        <ButtonLink href="/contact-us" size="lg">
          {cta.label} <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/our-work" variant="secondary" size="lg">
          See our work
        </ButtonLink>
      </PageIntro>

      <section className="border-b border-line px-4 py-12 sm:px-6 lg:px-10">
        <div className="relative aspect-[16/8] overflow-hidden border border-line bg-card">
          <Image
            src={hero.image}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
        </div>
      </section>

      {sections.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.title}
            className="border-b border-line px-4 py-24 sm:px-6 lg:px-10"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className={cn("lg:col-span-6", flip && "lg:order-2 lg:col-span-5 lg:col-start-8")}>
                <Eyebrow index={String(i + 1).padStart(2, "0")}>{service.title}</Eyebrow>
                <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-muted">{s.description}</p>
                {s.bullets && (
                  <ul className="mt-8 border-t border-line">
                    {s.bullets.map((b) => (
                      <li key={b} className="border-b border-line py-3 text-sm text-foreground">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={cn("lg:col-span-6", flip && "lg:order-1 lg:col-span-7")}>
                <Frame
                  label={s.alt}
                  src={s.image}
                  alt={s.alt}
                  aspect="aspect-[4/3]"
                  fit="contain"
                  position="object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="bg-card"
                />
              </div>
            </div>
          </section>
        );
      })}

      {pillars && (
        <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
          <Eyebrow index="Why">Why choose us</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
            Built to be flexible, secure and scalable.
          </h2>
          <ul className="mt-12 border-t border-line">
            {pillars.map(({ title, description }, i) => (
              <li
                key={title}
                className="grid gap-3 border-b border-line py-7 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-10 lg:px-6"
              >
                <span className="font-mono text-xs text-muted [li:hover>&]:text-white/70 lg:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl lg:col-span-5">
                  {title}
                </h3>
                <p className="max-w-md text-muted [li:hover>&]:text-white/80 lg:col-span-5 lg:col-start-8">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {gallery && (
        <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
          <Eyebrow index="Showcase">Selected screens</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
            {gallery.title}
          </h2>
          {gallery.description && (
            <p className="mt-4 max-w-xl text-muted">{gallery.description}</p>
          )}

          {portrait ? (
            <ul className="mt-12 flex snap-x gap-px overflow-x-auto border border-line bg-line">
              {gallery.images.map((src, i) => (
                <li key={src} className="shrink-0 snap-start bg-card">
                  <div className="relative aspect-[9/16] w-[200px] sm:w-[240px]">
                    <Image
                      src={src}
                      alt={`${gallery.alt} ${i + 1}`}
                      fill
                      sizes="240px"
                      quality={90}
                      className="object-cover object-top"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-12 grid gap-4 lg:grid-cols-12">
              {gallery.images.map((src, i) => (
                <li
                  key={src}
                  className={cn("relative aspect-[971/551] overflow-hidden border border-line bg-card", gallerySpans[i % 4])}
                >
                  <Image
                    src={src}
                    alt={`${gallery.alt} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    quality={90}
                    className="object-cover object-top"
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <NhClientStrip />
      <ProcessSteps index="05" />
      <HomeReviews />
      <NhCta eyebrow="06 / Start" title={cta.title} description={cta.description} />
    </>
  );
}
