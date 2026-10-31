import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/lib/testimonials";

const average =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

/** 5 Electric Violet stars; supports half ratings (e.g. 4.5). */
function Stars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star
              aria-hidden
              className="absolute inset-0 h-4 w-4 text-brand-violet/30"
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                aria-hidden
                className="h-4 w-4 fill-brand-violet text-brand-violet"
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function Avatar({ t, decorative }: { t: Testimonial; decorative: boolean }) {
  if (t.photo) {
    return (
      <Image
        src={t.photo}
        alt={decorative ? "" : `${t.name}, ${t.title} at ${t.company}`}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-brand-violet/40"
      />
    );
  }
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-gradient-br text-sm font-semibold text-white ring-2 ring-brand-violet/40"
    >
      {initials}
    </span>
  );
}

function ReviewCard({
  t,
  decorative,
}: {
  t: Testimonial;
  decorative: boolean;
}) {
  return (
    <figure className="w-[82vw] max-w-[400px] shrink-0 sm:w-[400px]">
      <Card className="relative flex h-full flex-col bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <Stars rating={t.rating} />
          <Badge tone="violet">{t.tag}</Badge>
        </div>
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
          “{t.review}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          <Avatar t={t} decorative={decorative} />
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-foreground">{t.name}</p>
            <p className="truncate text-xs text-muted">
              {t.title} · {t.company}
            </p>
          </div>
          <Quote
            aria-hidden
            className="h-7 w-7 shrink-0 text-brand-violet/25"
          />
        </figcaption>
      </Card>
    </figure>
  );
}

function ReviewRow({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul
      aria-hidden={decorative || undefined}
      className="flex shrink-0 items-stretch gap-6 pr-6"
    >
      {testimonials.map((t) => (
        <li key={t.name} className="flex">
          <ReviewCard t={t} decorative={decorative} />
        </li>
      ))}
    </ul>
  );
}

export function Testimonials() {
  const mask =
    "linear-gradient(to right, transparent, black 6%, black 94%, transparent)";

  return (
    <section id="reviews" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              Loved by <GradientText>founders worldwide</GradientText>
            </>
          }
          description="Real feedback from the teams we've built products with."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm text-muted">
          <Stars rating={Math.round(average * 2) / 2} />
          <span>
            <strong className="font-semibold text-foreground">
              {average.toFixed(1)}
            </strong>{" "}
            average from {testimonials.length} client reviews
          </span>
        </div>
      </div>

      {/* Full-bleed slider. Always sliding; pauses while hovered or focused.
          Vertical padding leaves room for the card hover-lift and glow. */}
      <div
        className="group mt-10 overflow-hidden py-6 sm:mt-12"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <div className="flex w-max animate-marquee-reviews will-change-transform motion-reduce:[animation-duration:300s] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          <ReviewRow />
          <ReviewRow decorative />
        </div>
      </div>
    </section>
  );
}
