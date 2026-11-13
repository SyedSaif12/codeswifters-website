"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Frame";

const phones = [
  {
    id: "luxe",
    label: "Luxe Vault",
    src: "/assets/case-studies/luxevault/explore.png",
    note: "Auctions and live gold pricing, mobile-first.",
  },
  {
    id: "wight",
    label: "Wight Guide",
    src: "/assets/case-studies/wightguide/home-screen.png",
    note: "Destination discovery with a map-led flow.",
  },
  {
    id: "bio",
    label: "BioTip",
    src: "/assets/case-studies/biotip/screen-home.png",
    note: "A health-focused app, from onboarding to release.",
  },
];

function Tile({
  className,
  index,
  title,
  href,
  children,
  visual,
}: {
  className?: string;
  index: string;
  title: string;
  href: string;
  children: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <article
      className={cn("group flex flex-col border border-line bg-card", className)}
    >
      <div className="p-6 pb-0 sm:p-8 sm:pb-0">
        <p className="font-mono text-xs text-accent">{index}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          <Link href={href} className="hover:text-accent">
            {title}
          </Link>
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          {children}
        </p>
      </div>
      <div className="mt-6 flex-1 border-t border-line">{visual}</div>
    </article>
  );
}

function MobileVisual() {
  const [i, setI] = useState(0);
  const p = phones[i];
  return (
    <div className="grid h-full sm:grid-cols-[auto_1fr]">
      <div className="flex border-b border-line sm:flex-col sm:border-b-0 sm:border-r">
        {phones.map((x, n) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setI(n)}
            aria-pressed={i === n}
            className={cn(
              "px-4 py-3 text-left font-mono text-xs transition-colors",
              i === n
                ? "bg-brand-purple text-white"
                : "text-muted hover:bg-line/60 hover:text-foreground",
            )}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className="flex items-end justify-center gap-6 overflow-hidden px-6 pt-6">
        <p className="mb-6 hidden max-w-[11rem] self-center text-sm text-muted lg:block">
          {p.note}
        </p>
        <div className="relative h-[280px] w-[150px] shrink-0 border border-b-0 border-line bg-white sm:h-[340px] sm:w-[180px]">
          <Image
            key={p.src}
            src={p.src}
            alt={`${p.label} app screen`}
            fill
            sizes="180px"
            quality={90}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

const milestones = [
  "Scope and data model agreed",
  "Auth, roles and core flows",
  "AI feature behind a flag",
  "First release to real users",
];

function MvpVisual() {
  const [done, setDone] = useState<number[]>([0]);
  const toggle = (n: number) =>
    setDone((d) => (d.includes(n) ? d.filter((x) => x !== n) : [...d, n]));
  return (
    <ul className="divide-y divide-line">
      {milestones.map((m, n) => {
        const on = done.includes(n);
        return (
          <li key={m}>
            <button
              type="button"
              onClick={() => toggle(n)}
              aria-pressed={on}
              className="flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-line/50 sm:px-8"
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center border",
                  on
                    ? "border-brand-violet bg-brand-violet text-white"
                    : "border-muted",
                )}
              >
                {on && <Check className="h-3 w-3" />}
              </span>
              <span
                className={cn(
                  "text-sm",
                  on ? "text-muted line-through" : "text-foreground",
                )}
              >
                {m}
              </span>
              <span className="ml-auto font-mono text-[11px] text-muted">
                M{n + 1}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function CropVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-white lg:aspect-auto lg:h-full lg:min-h-[320px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        quality={90}
        className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

/** Asymmetric 7/5 · 5/7 capability grid; every tile carries a real product visual. */
export function NhBento() {
  return (
    <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
      <Eyebrow index="01">Capabilities</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        Four ways we ship. One team behind each.
      </h2>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <Tile
          className="lg:col-span-7"
          index="01"
          title="Mobile apps"
          href="/services/mobile-development"
          visual={<MobileVisual />}
        >
          iOS and Android apps built for the store review and for the second
          year. Pick a product to preview.
        </Tile>

        <Tile
          className="lg:col-span-5"
          index="02"
          title="Web applications"
          href="/services/web-applications"
          visual={
            <CropVisual
              src="/assets/case-studies/nexus/dashboard.png"
              alt="NEXUS dashboard"
            />
          }
        >
          Dashboards, portals and platforms that stay fast as the data grows.
        </Tile>

        <Tile
          className="lg:col-span-5"
          index="03"
          title="Custom software"
          href="/services#custom-software"
          visual={
            <CropVisual
              src="/assets/case-studies/mcs/portal-dashboard.webp"
              alt="MCS Digitizing order portal"
            />
          }
        >
          Internal tools and workflow automation that replace spreadsheets and
          email chains.
        </Tile>

        <Tile
          className="lg:col-span-7"
          index="04"
          title="AI and MVP engineering"
          href="/services#ai"
          visual={<MvpVisual />}
        >
          A first release in front of real users, with AI features where they
          earn their place. Tick off a milestone.
        </Tile>
      </div>
    </section>
  );
}
