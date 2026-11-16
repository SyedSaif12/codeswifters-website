"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectCategories, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

/** Filterable portfolio index for /our-work: hairline rows, not a card grid. */
export function WorkGrid() {
  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="border-b border-line px-4 pb-10 sm:pb-14 pt-10 sm:px-6 lg:px-10">
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap border-b border-line"
      >
        {projectCategories.map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(c)}
              className={cn(
                "border-b-2 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors",
                selected
                  ? "border-brand-violet text-foreground"
                  : "border-transparent text-muted hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
        <span className="ml-auto self-center font-mono text-xs text-muted">
          {String(visible.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <ul>
        {visible.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <li key={p.slug}>
              <Link
                href={`/our-work/${p.slug}`}
                className="group grid gap-6 border-b border-line py-8 transition-colors hover:bg-brand-purple hover:text-white lg:grid-cols-12 lg:gap-12 lg:px-6"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden border border-line bg-card lg:col-span-5",
                    flip && "lg:order-2 lg:col-span-4 lg:col-start-9",
                  )}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} preview`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-col justify-between lg:col-span-7",
                    flip && "lg:order-1 lg:col-span-8 lg:pr-12",
                  )}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">
                      {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-6xl">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-lg text-foreground/80 group-hover:text-white">
                      {p.tagline}
                    </p>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted group-hover:text-white/80">
                      {p.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted group-hover:text-white/80">
                      {p.tags.slice(0, 3).map((t) => (
                        <li key={t}>#{t.toLowerCase().replace(/\s+/g, "-")}</li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 group-hover:underline">
                      Read the case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
