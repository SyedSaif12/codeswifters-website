import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials, type Testimonial } from "@/lib/testimonials";

/** First sentence of a review, used as the oversized pull quote. */
function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

function Avatar({ t }: { t: Testimonial }) {
  if (t.photo) {
    return (
      <Image
        src={t.photo}
        alt={`${t.name}, ${t.title} at ${t.company}`}
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

/**
 * One oversized pull quote, then a flat single-column ledger of reviews split
 * 4 / 8 with raw dividers. Solid midnight block, no cards, no marquee.
 */
export function Testimonials() {
  const [lead, ...rest] = testimonials;
  const ledger = rest.slice(0, 4);

  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-brand-midnight px-4 pb-16 pt-32 text-white sm:px-6 sm:pt-40 lg:px-10"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-white/70 sm:text-sm">
        In their words
      </p>

      <figure className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-10">
        <blockquote className="text-3xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:col-span-10 lg:text-6xl 2xl:text-7xl">
          “{firstSentence(lead.review)}”
        </blockquote>
        <figcaption className="flex items-center gap-4 lg:col-span-5 lg:col-start-1">
          <Avatar t={lead} />
          <span>
            <span className="block font-semibold">{lead.name}</span>
            <span className="block text-sm text-white/75">
              {lead.title}, {lead.company}
            </span>
          </span>
        </figcaption>
      </figure>

      <ul className="mt-24 border-t-2 border-white sm:mt-32">
        {ledger.map((t) => (
          <Reveal
            as="li"
            key={t.name}
            className="grid gap-6 border-b border-white/25 py-10 md:grid-cols-12 md:gap-10"
          >
            <div className="flex items-start gap-4 md:col-span-4">
              <Avatar t={t} />
              <div className="min-w-0">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/75">
                  {t.title}, {t.company}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
                  {t.tag}
                </p>
              </div>
            </div>
            <blockquote className="text-lg leading-relaxed text-white/90 md:col-span-8">
              “{t.review}”
            </blockquote>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
