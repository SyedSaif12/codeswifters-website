import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Quote,
} from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { CORE_STACK, type CaseStudy, type CaseStudySection } from "@/lib/case-studies/types";
import { projects } from "@/lib/projects";
import { testimonials } from "@/lib/testimonials";

const iconWell =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line";


function NarrativeSection({ s, tinted }: { s: CaseStudySection; tinted?: boolean }) {
  return (
    <section className={tinted ? "border-y border-line/80 bg-card/30" : ""}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={s.eyebrow}
            title={
              <>
                {s.titleLead} <GradientText>{s.titleAccent}</GradientText>
              </>
            }
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {s.paragraphs.map((t) => (
            <Reveal key={t}>
              <p>{t}</p>
            </Reveal>
          ))}
        </div>
        {s.items && (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={(i % 3) * 0.08}>
                <Card className="h-full p-6">
                  <span className={iconWell}>
                    <it.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted">{it.text}</p>
                </Card>
              </Reveal>
            ))}
          </ul>
        )}
        {s.callout && (
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <div className="rounded-2xl border border-brand-violet/30 bg-brand-violet/10 p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="w-1 shrink-0 rounded-full bg-accent-gradient" />
                <p className="text-lg font-medium leading-relaxed text-foreground">{s.callout}</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Shared layout for every hand-built case study page. */
export function CaseStudyView({ c }: { c: CaseStudy }) {
  const review = c.reviewCompany
    ? testimonials.find((t) => t.company === c.reviewCompany)
    : undefined;

  const index = projects.findIndex((p) => p.slug === c.slug);
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const project = projects[index];

  const meta = [
    { label: "Services", value: c.meta.services.join(" · ") },
    { label: "Platforms", value: c.meta.platforms },
    ...(c.meta.timeline ? [{ label: "Timeline", value: c.meta.timeline }] : []),
    { label: "Industry", value: c.meta.industry },
  ];
  const stack = c.meta.stack ?? CORE_STACK;
  const heroFit = c.images.heroFit ?? "cover";
  const heroShape = c.images.heroShape ?? "square";

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-line/80">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,var(--glow),transparent)]"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                  <li>
                    <Link href="/" className="hover:text-accent">Home</Link>
                  </li>
                  <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                  <li>
                    <Link href="/our-work" className="hover:text-accent">Our Work</Link>
                  </li>
                  <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                  <li aria-current="page" className="text-foreground">{project.name}</li>
                </ol>
              </nav>

              <Reveal>
                <Badge tone="violet" className="gap-2 py-1.5 pl-1.5 pr-3 text-sm">
                  <Image
                    src={c.images.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-md object-contain"
                  />
                  {c.badge}
                </Badge>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {c.titleLead} <GradientText>{c.titleAccent}</GradientText>
                </h1>
                <p className="mt-5 max-w-xl text-lg text-muted">{c.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact-us" size="lg">
                    Build your product like this <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/our-work" variant="secondary" size="lg">
                    All case studies
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient-br opacity-25 blur-3xl"
              />
              <div
                className={`relative overflow-hidden rounded-2xl border border-line bg-card shadow-2xl shadow-brand-violet/10 ${
                  heroShape === "square" ? "aspect-square" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={c.images.hero}
                  alt={c.images.heroAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={heroFit === "cover" ? "object-cover" : "object-contain p-4"}
                />
              </div>
            </Reveal>
          </div>

          {/* Project metadata bar */}
          <Reveal delay={0.15} className="mt-12">
            <Card hover={false} className="p-6">
              <dl
                className={`grid gap-6 sm:grid-cols-2 ${
                  "lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.6fr]"
                }`}
              >
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {m.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-foreground">{m.value}</dd>
                  </div>
                ))}
                <div className="sm:col-span-2 lg:col-span-1">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Tech stack
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-2">
                    {stack.map((t) => (
                      <Badge key={t} tone="violet">{t}</Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </Card>
          </Reveal>
        </div>
      </section>

      {c.overview && <NarrativeSection s={c.overview} />}

      {/* 2. Key impact metrics */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="At a glance"
            title={
              <>
                What we <GradientText>delivered</GradientText>
              </>
            }
          />
        </Reveal>
        <ul
          className={`mt-12 grid gap-4 sm:grid-cols-2 ${
            c.metrics.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {c.metrics.map((m, i) => (
            <Reveal as="li" key={m.label} delay={i * 0.08}>
              <Card className="h-full p-6 text-center">
                <p className="text-accent-gradient text-5xl font-extrabold tracking-tight">
                  {m.value}
                </p>
                <p className="mt-3 font-semibold text-foreground">{m.label}</p>
                <p className="mt-1 text-sm text-muted">{m.note}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* 3. Challenge & solution */}
      <section className="border-y border-line/80 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card hover={false} className="h-full p-6 sm:p-8">
                <span className={iconWell}>
                  <AlertCircle className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {c.challenge.title}
                </h2>
                <p className="mt-3 text-muted">{c.challenge.intro}</p>
                <ul className="mt-6 space-y-3">
                  {c.challenge.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card
                hover={false}
                className="h-full border-brand-violet/40 p-6 shadow-[0_0_60px_-24px] shadow-brand-violet/50 sm:p-8"
              >
                <span className={iconWell}>
                  <Check className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {c.solution.title}
                </h2>
                <p className="mt-3 text-muted">{c.solution.intro}</p>
                <ul className="mt-6 space-y-3">
                  {c.solution.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-violet/15 text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Key features & technical architecture */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Key features"
            title={
              <>
                {c.featuresHeading.lead}{" "}
                <GradientText>{c.featuresHeading.accent}</GradientText>
              </>
            }
            description={c.featuresHeading.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {c.features.map((f, i) =>
            f.kind === "wide" ? (
              <Reveal key={f.title} className="lg:col-span-2">
                <Card className="grid h-full overflow-hidden lg:grid-cols-2">
                  {/* The Figma PNG has transparent padding; scale zooms to the screens */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-violet/15 via-card to-card">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className={`origin-center object-contain ${f.zoom ? "scale-[1.3]" : "p-4"}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-10">
                    <span className={iconWell}>
                      <f.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-muted">{f.text}</p>
                    {f.bullets && (
                      <ul className="mt-5 space-y-3">
                        {f.bullets.map((b) => (
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
                </Card>
              </Reveal>
            ) : (
              <Reveal key={f.title} delay={(i % 2) * 0.1}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-violet/15 via-card to-card">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 540px, 100vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <span className={iconWell}>
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.text}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ),
          )}
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {c.highlights.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 0.08}>
              <Card className="flex h-full items-start gap-4 p-5">
                <span className={iconWell}>
                  <h.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted">{h.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>

        {/* Technical architecture */}
        <Reveal className="mt-16">
          <h3 className="text-center text-2xl font-bold tracking-tight text-foreground">
            {c.architecture.heading ?? "Technical architecture"}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted">
            {c.architecture.intro}
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.architecture.nodes.map((a, i) => (
              <li key={a.label} className="relative">
                <Card className="h-full p-5 text-center">
                  <span className={`${iconWell} mx-auto`}>
                    <a.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    {a.layer}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{a.label}</p>
                  <Badge tone="violet" className="mt-3">{a.tech}</Badge>
                </Card>
                {i < c.architecture.nodes.length - 1 && (
                  <ChevronRight
                    aria-hidden
                    className="absolute -right-3.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-accent lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {c.brand && <NarrativeSection s={c.brand} tinted />}

      {/* 5. Client testimonial */}
      {review && (
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-24">
          <Reveal>
            <Card hover={false} className="relative overflow-hidden p-6 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-violet/20 blur-3xl"
              />
              <Quote
                aria-hidden
                className="absolute right-6 top-6 h-12 w-12 text-brand-violet/20"
              />
              <figure className="relative">
                <Stars rating={review.rating} />
                <blockquote className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                  “{review.review}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  {review.photo && (
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-violet/40"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted">
                      {review.title}, {review.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Card>
          </Reveal>
        </section>
      )}

      {/* 6. Next case study + CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[1fr_2fr]">
            <Link
              href={`/our-work/${prev.slug}`}
              className="group min-w-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow"
            >
              <Card className="flex h-full items-center gap-4 p-5">
                <ArrowLeft className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Previous
                  </p>
                  <p className="font-semibold text-foreground">{prev.name}</p>
                </div>
              </Card>
            </Link>
            <Link
              href={`/our-work/${next.slug}`}
              className="group min-w-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow"
            >
              <Card className="flex h-full items-center gap-5 p-5">
                <div className="relative hidden h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-brand-violet/10 sm:block">
                  <Image
                    src={next.image}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Next case study
                  </p>
                  <p className="mt-1 truncate text-xl font-semibold text-foreground">
                    {next.name}
                  </p>
                  <p className="truncate text-sm text-muted">{next.tagline}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </Card>
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title={c.ctaTitle ?? "Build Your Product Like This"}
        description="Tell us about your idea and we'll show you how we'd bring it to life, from first sketch to launch."
        label="Book a discovery call"
      />
    </>
  );
}
