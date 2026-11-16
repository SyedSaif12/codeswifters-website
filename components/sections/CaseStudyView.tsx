import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Frame } from "@/components/new-homepage/Frame";
import { NhCta } from "@/components/new-homepage/NhCta";
import { ButtonLink } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import {
  CORE_STACK,
  type CaseStudy,
  type CaseStudySection,
} from "@/lib/case-studies/types";
import { projects } from "@/lib/projects";
import { testimonials } from "@/lib/testimonials";
import { SITE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const h2 =
  "mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl";

type FeatureGroup =
  | { type: "phones"; items: { f: CaseStudy["features"][number]; i: number }[] }
  | { type: "wide"; n: number; items: { f: CaseStudy["features"][number]; i: number }[] };

/** Merge consecutive phone screens into one device stage; wide shots stay full-width. */
function groupFeatures(features: CaseStudy["features"]): FeatureGroup[] {
  const out: FeatureGroup[] = [];
  let wideCount = 0;
  features.forEach((f, i) => {
    const last = out[out.length - 1];
    if (f.kind === "phone") {
      if (last?.type === "phones") last.items.push({ f, i });
      else out.push({ type: "phones", items: [{ f, i }] });
    } else {
      out.push({ type: "wide", n: wideCount++, items: [{ f, i }] });
    }
  });
  return out;
}

/** Story section: label + title (4) beside the copy (8), optional ledger and callout. */
function Narrative({ s, index }: { s: CaseStudySection; index: string }) {
  return (
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow index={index}>{s.eyebrow}</Eyebrow>
          <h2 className={h2}>
            {s.titleLead} <span className="text-accent">{s.titleAccent}</span>
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8">
          {s.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>

      {s.items && (
        <ul className="mt-8 border-t border-line">
          {s.items.map((it, i) => (
            <li
              key={it.title}
              className="grid gap-2 border-b border-line py-6 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-10 lg:px-6"
            >
              <span className="font-mono text-xs text-muted [li:hover>&]:text-white/70 lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight lg:col-span-4">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted [li:hover>&]:text-white/80 lg:col-span-6 lg:col-start-7">
                {it.text}
              </p>
            </li>
          ))}
        </ul>
      )}

      {s.callout && (
        <p className="mt-8 bg-brand-purple p-6 text-xl font-medium leading-snug tracking-tight text-white sm:p-10 sm:text-2xl lg:max-w-4xl">
          {s.callout}
        </p>
      )}
    </section>
  );
}

const metricSpans: Record<number, string[]> = {
  3: ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3"],
  4: ["lg:col-span-5", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2"],
};

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
  const spans = metricSpans[c.metrics.length] ?? metricSpans[4];

  const url = `${SITE_URL}/our-work/${c.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: `${project.name} case study`,
    description: c.summary,
    image: `${SITE_URL}${c.images.hero}`,
    about: { "@type": "CreativeWork", name: project.name, genre: c.meta.industry },
    author: { "@type": "Organization", name: "CodeSwifters", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "CodeSwifters",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/brand/logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* 1. Hero */}
      <section className="border-b border-line px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:px-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <li>
              <Link href="/" className="hover:text-foreground">Home</Link>
            </li>
            <li className="text-line">/</li>
            <li>
              <Link href="/our-work" className="hover:text-foreground">Our work</Link>
            </li>
            <li className="text-line">/</li>
            <li aria-current="page" className="text-accent">{project.name}</li>
          </ol>
        </nav>

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <Image
                src={c.images.icon}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              {c.badge}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-tighter text-foreground sm:text-7xl">
              {c.titleLead} <span className="text-accent">{c.titleAccent}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{c.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact-us" size="lg">
                Build your product like this <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary" size="lg">
                All case studies
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Frame
              label={`${project.name} · case study`}
              src={c.images.hero}
              alt={c.images.heroAlt}
              aspect={heroShape === "square" ? "aspect-square" : "aspect-[16/10]"}
              fit={heroFit}
              position="object-center"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>

        {/* Project metadata: raw rules, no box */}
        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-12">
          {meta.map((m, i) => (
            <div
              key={m.label}
              className={cn("border-t border-foreground pt-3", i === 0 ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{m.label}</dt>
              <dd className="mt-2 text-sm font-medium text-foreground">{m.value}</dd>
            </div>
          ))}
          <div className="border-t border-foreground pt-3 sm:col-span-2 lg:col-span-3 lg:col-start-10">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">Tech stack</dt>
            <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-foreground">
              {stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      {c.overview && <Narrative s={c.overview} index="01" />}

      {/* 2. Metrics */}
      <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
        <Eyebrow index="02">At a glance</Eyebrow>
        <h2 className={h2}>What we delivered.</h2>
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {c.metrics.map((m, i) => (
            <li key={m.label} className={cn("border-t border-foreground pt-4", spans[i % spans.length])}>
              <p
                className={cn(
                  "font-semibold leading-[0.85] tracking-tighter text-foreground tabular-nums",
                  i === 0 ? "text-7xl sm:text-8xl" : "text-6xl",
                )}
              >
                {m.value}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground">{m.label}</p>
              <p className="mt-1 max-w-[16rem] text-sm text-muted">{m.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Challenge (5) and solution (7, solid block) */}
      <section className="border-b border-line">
        <div className="grid lg:grid-cols-12">
          <div className="px-4 py-10 sm:py-12 sm:px-6 lg:col-span-5 lg:px-10">
            <Eyebrow index="03">Challenge</Eyebrow>
            <h2 className={h2}>{c.challenge.title}</h2>
            <p className="mt-5 text-muted">{c.challenge.intro}</p>
            <ul className="mt-8 border-t border-line">
              {c.challenge.points.map((p) => (
                <li key={p} className="border-b border-line py-3 text-sm text-foreground">{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-purple px-4 py-10 sm:py-12 text-white sm:px-6 lg:col-span-7 lg:px-12">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">04 / Solution</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter sm:text-5xl">
              {c.solution.title}
            </h2>
            <p className="mt-5 text-white/85">{c.solution.intro}</p>
            <ul className="mt-8 border-t border-white/30">
              {c.solution.points.map((p) => (
                <li key={p} className="border-b border-white/30 py-3 text-sm">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Features */}
      <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
        <Eyebrow index="05">Key features</Eyebrow>
        <h2 className={cn(h2, "max-w-4xl sm:text-6xl")}>
          {c.featuresHeading.lead}{" "}
          <span className="text-accent">{c.featuresHeading.accent}</span>
        </h2>
        <p className="mt-4 max-w-xl text-muted">{c.featuresHeading.description}</p>

        <div className="mt-8 border-t border-line">
          {groupFeatures(c.features).map((g) =>
            g.type === "phones" ? (
              <article
                key={g.items[0].f.title}
                className="grid gap-8 border-b border-line py-10 lg:grid-cols-12 lg:gap-12"
              >
                {/* Cropped device stage: phones sit top-aligned and bleed off the bottom, so tall screens never stretch the page */}
                <div className="relative flex h-[26rem] items-start justify-center gap-4 overflow-hidden bg-brand-midnight px-6 pt-10 sm:h-[32rem] sm:gap-8 lg:col-span-7">
                  {g.items.map(({ f }, k) => (
                    <div
                      key={f.title}
                      className={cn(
                        "relative aspect-[1290/2796] w-[44%] max-w-[15rem] shrink-0 overflow-hidden rounded-[1.75rem] border-[5px] border-black bg-black",
                        k % 2 === 1 && "mt-16",
                      )}
                    >
                      <Image
                        src={f.image}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 1024px) 240px, 44vw"
                        quality={90}
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
                <ol className="border-t border-line lg:col-span-5 lg:self-center">
                  {g.items.map(({ f, i }) => (
                    <li key={f.title} className="border-b border-line py-6">
                      <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">{f.title}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-muted">{f.text}</p>
                      {f.bullets && (
                        <ul className="mt-4 border-t border-line">
                          {f.bullets.map((bl) => (
                            <li key={bl} className="border-b border-line py-2.5 text-sm text-foreground">{bl}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </article>
            ) : (
              (() => {
                const { f, i } = g.items[0];
                const crop = f.crop;
                const ratio = f.ratio ?? 4 / 3;
                const portrait = ratio < 1;
                return (
                  <article
                    key={f.title}
                    className="grid items-center gap-8 border-b border-line py-10 lg:grid-cols-12 lg:gap-12"
                  >
                    <div className="lg:col-span-5">
                      <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tighter text-foreground">{f.title}</h3>
                      <p className="mt-3 max-w-md leading-relaxed text-muted">{f.text}</p>
                      {f.bullets && (
                        <ol className="mt-6 border-t border-line">
                          {f.bullets.map((bl, k) => (
                            <li key={bl} className="grid grid-cols-[2rem_1fr] border-b border-line py-3 text-sm text-foreground">
                              <span className="font-mono text-xs text-muted">{String(k + 1).padStart(2, "0")}</span>
                              {bl}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                    {/* Flat midnight stage: padded art is cropped to its content, portrait art gets a fixed height, landscape art keeps its ratio */}
                    <div className="flex justify-center bg-brand-midnight px-4 py-8 sm:px-10 sm:py-12 lg:col-span-7">
                      {crop ? (
                        <div
                          className="relative w-full max-w-[34rem] overflow-hidden"
                          style={{ aspectRatio: `${crop.w} / ${crop.h}` }}
                        >
                          <Image
                            src={f.image}
                            alt={f.alt}
                            width={crop.imgW}
                            height={crop.imgH}
                            sizes="(min-width: 1024px) 1000px, 100vw"
                            quality={90}
                            className="absolute max-w-none"
                            style={{
                              width: `${(crop.imgW / crop.w) * 100}%`,
                              left: `${(-crop.x / crop.w) * 100}%`,
                              top: `${(-crop.y / crop.h) * 100}%`,
                              height: "auto",
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          className={cn("relative w-full", portrait && "h-[26rem] sm:h-[30rem]")}
                          style={portrait ? undefined : { aspectRatio: String(Math.min(Math.max(ratio, 1), 1.6)) }}
                        >
                          <Image
                            src={f.image}
                            alt={f.alt}
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            quality={90}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                );
              })()
            ),
          )}
        </div>

        <ul className="mt-8 border-t border-line">
          {c.highlights.map((h, i) => (
            <li
              key={h.title}
              className="grid gap-2 border-b border-line py-6 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-10 lg:px-6"
            >
              <span className="font-mono text-xs text-muted [li:hover>&]:text-white/70 lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight lg:col-span-4">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted [li:hover>&]:text-white/80 lg:col-span-6 lg:col-start-7">
                {h.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Technical architecture: hairline flow */}
        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Architecture</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tighter text-foreground">
            {c.architecture.heading ?? "Technical architecture"}
          </h3>
          <p className="mt-2 max-w-xl text-muted">{c.architecture.intro}</p>
          <ol className="mt-8 grid border-l border-t border-line sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr">
            {c.architecture.nodes.map((a, i) => (
              <li key={a.label} className="border-b border-r border-line p-5">
                <p className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")} · {a.layer}
                </p>
                <p className="mt-3 font-semibold text-foreground">{a.label}</p>
                <p className="mt-1 font-mono text-xs text-accent">{a.tech}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {c.brand && <Narrative s={c.brand} index="06" />}

      {/* 5. Client review */}
      {review && (
        <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
          <Eyebrow index="07">Client review</Eyebrow>
          <blockquote className="mt-10 max-w-4xl border-l-2 border-brand-violet pl-6 sm:pl-10">
            <Stars rating={review.rating} />
            <p className="mt-5 text-xl leading-relaxed text-foreground sm:text-2xl">
              &ldquo;{review.review}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              {review.photo && (
                <Image
                  src={review.photo}
                  alt={review.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 border border-line object-cover"
                />
              )}
              <span>
                <span className="block font-semibold text-foreground">{review.name}</span>
                <span className="block text-sm text-muted">
                  {review.title}, {review.company}
                </span>
              </span>
            </footer>
          </blockquote>
        </section>
      )}

      {/* 6. Previous / next */}
      <section className="grid border-b border-line md:grid-cols-12">
        <Link
          href={`/our-work/${prev.slug}`}
          className="group flex items-center gap-4 border-b border-line px-4 py-8 transition-colors hover:bg-brand-purple hover:text-white sm:px-6 md:col-span-4 md:border-b-0 md:border-r lg:px-10"
        >
          <ArrowLeft className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1" />
          <span>
            <span className="block font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">Previous</span>
            <span className="mt-1 block text-xl font-semibold tracking-tight">{prev.name}</span>
          </span>
        </Link>
        <Link
          href={`/our-work/${next.slug}`}
          className="group flex items-center justify-between gap-4 px-4 py-8 transition-colors hover:bg-brand-purple hover:text-white sm:px-6 md:col-span-8 lg:px-10"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">Next case study</span>
            <span className="mt-1 block text-3xl font-semibold tracking-tighter sm:text-4xl">{next.name}</span>
            <span className="mt-1 block text-sm text-muted group-hover:text-white/80">{next.tagline}</span>
          </span>
          <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      <NhCta
        eyebrow="08 / Start"
        title={c.ctaTitle ?? "Build your product like this."}
        description="Tell us about your idea and we'll show you how we'd bring it to life, from first sketch to launch."
      />
    </>
  );
}
