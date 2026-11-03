import type { Metadata } from "next";
import { Compass, Lightbulb, Rocket, Target, Users, type LucideIcon } from "lucide-react";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CodeSwifters is a full-cycle product development company with expert designers and developers serving clients in 30+ countries.",
};

const stats = [
  { value: "30+", label: "Countries served" },
  { value: "350+", label: "Specialized experts" },
  { value: "4.9/5", label: "Average client rating" },
];

const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    text: "We put our clients at the center of everything we do, tailoring each project to your unique goals and challenges.",
  },
  {
    icon: Target,
    title: "Expert Team",
    text: "Our multidisciplinary team combines deep technical expertise with creative problem-solving to deliver exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    text: "We harness the latest tools and technologies to build scalable, future-proof digital products.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Expert Web Designers &amp; Developers{" "}
            <span className="text-accent-gradient">Shaping the Digital Future</span>
          </>
        }
        description="We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pioneering Digital Innovation Across{" "}
              <GradientText>30+ Countries</GradientText>
            </h2>
            <p className="mt-4 text-muted">
              Our solutions have no boundaries. From Silicon Valley startups to
              global enterprises, we collaborate with clients worldwide to
              deliver high-impact software solutions. With a future-ready
              mindset and a focus on long-term partnerships, we empower
              businesses to grow with confidence.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-2 sm:gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="min-w-0 p-3 text-center sm:p-5">
                <dd className="text-2xl font-extrabold text-foreground sm:text-4xl">
                  {s.value}
                </dd>
                <dt className="mt-1 text-[11px] leading-tight text-muted sm:text-sm">{s.label}</dt>
              </Card>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <ul className="grid gap-4 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line/80 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Elevating brands with{" "}
                <GradientText>strategy and visionary design</GradientText>
              </>
            }
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "What's our mission?",
                text: "To deliver cutting-edge, expert solutions that help businesses innovate, scale, and thrive in the digital economy.",
              },
              {
                icon: Compass,
                title: "What drives us?",
                text: "A passion for technology, commitment to client success, and a belief that innovation starts with collaboration.",
              },
              {
                icon: Lightbulb,
                title: "Bringing new digital ideas to life",
                text: "We are a global technology provider helping businesses accelerate their digital transformation journey. By focusing on scalability, efficiency, and a low total cost of ownership, we empower organizations to thrive in a rapidly evolving digital world.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-6 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FeaturedWork
        slugs={["nexus", "mcs", "wedfluencer", "luxe-vault"]}
        title={
          <>
            See what <GradientText>we&apos;ve built</GradientText>
          </>
        }
      />
      <ClientLogos />
      <CtaBanner />
    </>
  );
}
