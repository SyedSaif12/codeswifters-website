import type { Metadata } from "next";
import { Eyebrow } from "@/components/new-homepage/Frame";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { NhWork } from "@/components/new-homepage/NhWork";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CodeSwifters is a full-cycle product development company: 25+ senior designers and engineers building web, mobile and AI products from Milton, CA and Karachi.",
};

// Only verifiable figures: headcount is owner-confirmed, the rest is counted from site data.
const facts = [
  { value: "25+", label: "Senior engineers" },
  { value: String(projects.length), label: "Products shipped" },
  { value: String(testimonials.length), label: "Client reviews" },
  { value: String(site.offices.length), label: "Offices" },
];

const values = [
  {
    title: "Client-centric approach",
    text: "We put our clients at the center of everything we do, tailoring each project to your unique goals and challenges.",
  },
  {
    title: "Expert team",
    text: "Our multidisciplinary team combines deep technical expertise with creative problem-solving to deliver exceptional results.",
  },
  {
    title: "Innovative solutions",
    text: "We harness the latest tools and technologies to build scalable, future-proof digital products.",
  },
];

const beliefs = [
  {
    q: "What is our mission?",
    a: "To deliver cutting-edge, expert solutions that help businesses innovate, scale, and thrive in the digital economy.",
  },
  {
    q: "What drives us?",
    a: "A passion for technology, commitment to client success, and a belief that innovation starts with collaboration.",
  },
  {
    q: "What do we bring to life?",
    a: "New digital ideas. By focusing on scalability, efficiency, and a low total cost of ownership, we help organizations accelerate their digital transformation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
        title={
          <>
            The senior team
            <br />
            <span className="text-accent">behind the product.</span>
          </>
        }
        description="We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth."
      />

      {/* Story (7) + numbers (5) */}
      <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
        <Eyebrow index="01">Who we are</Eyebrow>
        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          <p className="text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:col-span-7">
            Expert designers and developers who stay with a product from the
            first sketch to the store release, and after it.
            <span className="text-muted">
              {" "}
              We collaborate with clients worldwide on high-impact software,
              with a focus on long-term partnerships.
            </span>
          </p>
          <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:col-span-5 lg:self-start">
            {facts.map((f) => (
              <div key={f.label} className="bg-background p-6">
                <dd className="text-6xl font-semibold leading-none tracking-tighter text-foreground tabular-nums">
                  {f.value}
                </dd>
                <dt className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Values ledger */}
      <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
        <Eyebrow index="02">How we work</Eyebrow>
        <ul className="mt-10 border-t border-line">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="grid gap-4 border-b border-line py-8 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-10 lg:px-6"
            >
              <span className="font-mono text-xs text-muted lg:col-span-1">
                0{i + 1}
              </span>
              <h3 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:col-span-5">
                {v.title}
              </h3>
              <p className="max-w-md text-muted [li:hover>&]:text-white/80 lg:col-span-5 lg:col-start-8">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Beliefs: 4 / 8 */}
      <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="03">What we believe</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl">
              Strategy first. Then visionary design.
            </h2>
          </div>
          <dl className="border-t border-line lg:col-span-8">
            {beliefs.map((b) => (
              <div
                key={b.q}
                className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <dt className="font-semibold tracking-tight text-foreground">
                  {b.q}
                </dt>
                <dd className="leading-relaxed text-muted">{b.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Offices */}
      <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
        <Eyebrow index="04">Offices</Eyebrow>
        <ul className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-12">
          {site.offices.map((o, i) => (
            <li
              key={o.country}
              className={`border-t border-foreground pt-4 ${
                i === 0 ? "lg:col-span-5" : "lg:col-span-6 lg:col-start-7"
              }`}
            >
              <p className="text-5xl font-semibold tracking-tighter text-foreground sm:text-6xl">
                {o.country === "Canada" ? "Milton, CA" : "Karachi, PK"}
              </p>
              <p className="mt-4 max-w-sm text-sm text-muted">{o.address}</p>
            </li>
          ))}
        </ul>
      </section>

      <NhWork index="05" eyebrow="What we have built" heading="Work that speaks for the team." />
      <NhClientStrip />
      <NhCta
        eyebrow="06 / Start"
        title="Meet the team that will build yours."
        description="Send a brief, a sketch or a half-formed plan. A senior engineer replies with questions, a rough scope and a realistic timeline."
      />
    </>
  );
}
