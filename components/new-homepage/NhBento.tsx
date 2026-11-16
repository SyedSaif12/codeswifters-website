"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Frame";

const phones: {
  id: string;
  label: string;
  src: string;
  note: string;
  bezel?: boolean;
}[] = [
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
    id: "lyna",
    label: "LYNA Cam",
    // Cropped from the case-study hero; the art carries its own device bezel.
    src: "/assets/case-studies/lynacam/screen-mycycle.png",
    note: "Cycle tracking and meal scanning in one health app.",
    bezel: true,
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

/** Three real app screens on one flat midnight stage: centre phone raised, sides dropped, all cropped at the bottom edge. */
function MobileVisual() {
  const order = [phones[1], phones[0], phones[2]];
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-[19rem] flex-1 items-start justify-center gap-3 overflow-hidden bg-brand-midnight px-4 pt-8 sm:h-[24rem] sm:gap-6 sm:px-8">
        {order.map((p, n) => (
          <div
            key={p.id}
            className={cn(
              "relative w-[30%] max-w-[10.5rem] shrink-0",
              p.bezel
                ? "aspect-[377/759]"
                : "aspect-[1290/2796] overflow-hidden rounded-[1.4rem] border-[4px] border-black bg-black",
              n !== 1 && "mt-10",
            )}
          >
            <Image
              src={p.src}
              alt={`${p.label} app screen`}
              fill
              sizes="(min-width: 640px) 170px, 30vw"
              quality={90}
              className={p.bezel ? "object-contain" : "object-cover object-top"}
            />
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-3 divide-x divide-line border-t border-line">
        {order.map((p) => (
          <li key={p.id} className="p-3 sm:p-4">
            <p className="font-mono text-xs text-foreground">{p.label}</p>
            <p className="mt-1 hidden text-xs leading-snug text-muted sm:block">{p.note}</p>
          </li>
        ))}
      </ul>
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
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <Eyebrow index="01">Capabilities</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        Four ways we ship. One team behind each.
      </h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <Tile
          className="lg:col-span-7"
          index="01"
          title="Mobile apps"
          href="/services/mobile-development"
          visual={<MobileVisual />}
        >
          iOS and Android apps built for the store review and for the second
          year.
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
