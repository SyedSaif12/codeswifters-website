import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NhClientStrip } from "@/components/new-homepage/NhClientStrip";
import { NhCta } from "@/components/new-homepage/NhCta";
import { NhTech } from "@/components/new-homepage/NhTech";
import { PageIntro } from "@/components/new-homepage/PageIntro";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { otherCapabilities } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web development, web applications, mobile apps and AI-powered solutions, delivered end to end by CodeSwifters.",
};

const blurbs: Record<string, string> = {
  "mobile-development":
    "High-quality iOS and Android apps that deliver meaningful experiences and long-term engagement.",
  "web-development":
    "Pixel-perfect websites that are fast, secure, and optimized for conversion.",
  "web-applications":
    "Robust, scalable and secure web applications that solve real business challenges.",
};

const extraImages: Record<string, { src: string; alt: string; fit: string }> = {
  "custom-software": {
    src: "/assets/home/offer-custom-software.png",
    alt: "Custom software dashboards built by CodeSwifters",
    fit: "object-cover",
  },
  ai: {
    src: "/assets/services/ai-solutions.png",
    alt: "AI-powered solutions",
    fit: "object-contain p-6",
  },
};

const extraDetail: Record<string, string> = {
  ai: "We embed intelligent AI into your web and mobile systems to automate workflows, personalize user experiences, and turn data into real business insights.",
  "custom-software":
    "One intelligent ecosystem connecting your web, mobile, and AI into a single powerful business solution.",
};

function Row({
  i,
  title,
  text,
  extra,
  image,
  imageClass,
  alt,
  href,
  id,
}: {
  i: number;
  title: string;
  text: string;
  extra?: string;
  image: string;
  imageClass: string;
  alt: string;
  href?: string;
  id?: string;
}) {
  const flip = i % 2 === 1;
  const body = (
    <>
      <div className={cn("relative aspect-[16/10] overflow-hidden border border-line bg-card lg:col-span-7", flip && "lg:order-2 lg:col-span-5")}>
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 58vw, 100vw" quality={90} className={imageClass} />
      </div>
      <div className={cn("flex flex-col justify-between gap-8 lg:col-span-5", flip && "lg:order-1 lg:col-span-7 lg:pr-12")}>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-md text-muted group-hover:text-white/80">{text}</p>
          {extra && <p className="mt-3 max-w-md text-sm text-muted group-hover:text-white/80">{extra}</p>}
        </div>
        {href ? (
          <span className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 group-hover:underline">
            Explore service
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        ) : (
          <ButtonLink href="/contact-us" variant="secondary" className="self-start group-hover:border-white group-hover:text-white">
            Discuss your project
          </ButtonLink>
        )}
      </div>
    </>
  );
  const cls =
    "group grid gap-8 border-b border-line py-10 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-12 lg:px-6";
  return href ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <div id={id} className={cn(cls, "scroll-mt-24")}>
      {body}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={
          <>
            Everything you need
            <br />
            <span className="text-accent">to build and scale.</span>
          </>
        }
        description="We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth."
      >
        <ButtonLink href="/contact-us" size="lg">
          Book a free call <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/our-work" variant="secondary" size="lg">
          See our work
        </ButtonLink>
      </PageIntro>

      <section className="border-b border-line px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <div className="border-t border-line">
          {services.map((s, i) => (
            <Row
              key={s.slug}
              i={i}
              title={s.title}
              text={blurbs[s.slug]}
              image={s.hero.image}
              imageClass="object-cover"
              alt={s.hero.alt}
              href={s.href}
            />
          ))}
          {/* Targets for #custom-software and #ai */}
          {otherCapabilities.map((o, n) => (
            <Row
              key={o.id}
              id={o.id}
              i={services.length + n}
              title={o.label}
              text={o.description}
              extra={extraDetail[o.id]}
              image={extraImages[o.id].src}
              imageClass={extraImages[o.id].fit}
              alt={extraImages[o.id].alt}
            />
          ))}
        </div>
      </section>

      <NhTech index="02" />
      <NhClientStrip />
      <ProcessSteps index="03" />
      <NhCta eyebrow="04 / Start" />
    </>
  );
}
