import type { Metadata } from "next";
import { MobileVisual, WebAppVisual, WebVisual } from "@/components/sections/DevVisuals";
import { AiVisual, CustomSoftwareVisual } from "@/components/sections/ServiceVisuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TechStack } from "@/components/sections/TechStack";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/services";
import { otherCapabilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web development, web applications, mobile apps and AI-powered solutions, delivered end to end by CodeSwifters.",
};

const cardVisuals: Record<string, React.ReactNode> = {
  "mobile-development": <MobileVisual />,
  "web-development": <WebVisual />,
  "web-applications": <WebAppVisual />,
};

const blurbs: Record<string, string> = {
  "mobile-development":
    "High-quality iOS and Android apps that deliver meaningful experiences and long-term engagement.",
  "web-development":
    "Pixel-perfect websites that are fast, secure, and optimized for conversion.",
  "web-applications":
    "Robust, scalable and secure web applications that solve real business challenges.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title={
          <>
            Everything you need to{" "}
            <span className="text-accent-gradient">build and scale</span>
          </>
        }
        description="We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        actions={
          <>
            <ButtonLink href="/contact-us" size="lg">
              Book a free call <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" size="lg">
              See our work
            </ButtonLink>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow"
              >
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="p-4 pb-0 transition-transform duration-500 group-hover:scale-[1.02]">
                    {cardVisuals[s.slug]}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {blurbs[s.slug]}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Explore service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Capabilities without a dedicated page; targets for #custom-software / #ai */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {otherCapabilities.map(({ id, label, description, icon: Icon }) => (
            <Card
              key={id}
              id={id}
              hover={false}
              className="flex scroll-mt-24 flex-col p-6 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-foreground">{label}</h2>
              <p className="mt-3 text-muted">{description}</p>
              {id === "ai" && (
                <>
                  <p className="mt-3 text-muted">
                    We embed intelligent AI into your web and mobile systems to
                    automate workflows, personalize user experiences, and turn
                    data into real business insights.
                  </p>
                  <div className="mt-auto pt-6">
                    <AiVisual />
                  </div>
                </>
              )}
              {id === "custom-software" && (
                <>
                  <p className="mt-3 text-muted">
                    One intelligent ecosystem connecting your web, mobile, and AI
                    into a single powerful business solution.
                  </p>
                  <div className="mt-auto pt-6">
                    <CustomSoftwareVisual />
                  </div>
                </>
              )}
              <ButtonLink href="/contact-us" variant="secondary" className="mt-6 self-start">
                Discuss your project
              </ButtonLink>
            </Card>
          ))}
        </div>
      </section>

      <TechStack />
      <ClientLogos />
      <ProcessSteps />
      <CtaBanner />
    </>
  );
}
