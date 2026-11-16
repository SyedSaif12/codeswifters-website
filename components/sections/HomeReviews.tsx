import Image from "next/image";
import { Stars } from "@/components/ui/Stars";
import { testimonials, type Testimonial } from "@/lib/testimonials";

const average =
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

function Avatar({ t, decorative }: { t: Testimonial; decorative: boolean }) {
  if (t.photo) {
    return (
      <Image
        src={t.photo}
        alt={decorative ? "" : `${t.name}, ${t.title} at ${t.company}`}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 object-cover"
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
      className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-purple text-sm font-semibold text-white"
    >
      {initials}
    </span>
  );
}

/** Flat review column: a raw rule on top, no box, no shadow. */
function Review({ t, decorative }: { t: Testimonial; decorative: boolean }) {
  return (
    <figure className="flex w-[82vw] max-w-[420px] shrink-0 flex-col border-t-2 border-foreground pt-5 sm:w-[420px]">
      <div className="flex items-center justify-between gap-3">
        <Stars rating={t.rating} />
        <span className="text-xs font-medium uppercase tracking-widest text-muted">
          {t.tag}
        </span>
      </div>
      <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
        “{t.review}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar t={t} decorative={decorative} />
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{t.name}</p>
          <p className="truncate text-sm text-muted">
            {t.title}, {t.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function ReviewRow({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul
      aria-hidden={decorative || undefined}
      className="flex shrink-0 items-stretch gap-10 pr-10"
    >
      {testimonials.map((t) => (
        <li key={t.name} className="flex">
          <Review t={t} decorative={decorative} />
        </li>
      ))}
    </ul>
  );
}

/**
 * Client reviews as a sliding strip of flat columns under an oversized
 * heading (8 / 4 split). Pauses on hover or focus.
 */
export function HomeReviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-background pb-10 pt-10 sm:pb-14 sm:pt-14"
    >
      <div className="grid items-end gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <h2 className="text-5xl font-semibold leading-[0.9] tracking-tighter text-foreground sm:text-7xl lg:col-span-8 lg:text-8xl 2xl:text-9xl">
          Loved by founders worldwide.
        </h2>
        <div className="lg:col-span-4 lg:pb-3">
          <div className="flex items-center gap-3">
            <Stars rating={Math.round(average * 2) / 2} />
            <span className="text-sm text-foreground/80">
              <strong className="font-semibold text-foreground">
                {average.toFixed(1)}
              </strong>{" "}
              from {testimonials.length} client reviews
            </span>
          </div>
          <p className="mt-3 max-w-sm text-base text-foreground/70">
            Real feedback from the teams we have built products with.
          </p>
        </div>
      </div>

      <div className="group mt-8 overflow-hidden px-4 sm:px-6 lg:px-10">
        <div className="flex w-max animate-marquee-reviews will-change-transform motion-reduce:[animation-duration:300s] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          <ReviewRow />
          <ReviewRow decorative />
        </div>
      </div>
    </section>
  );
}
