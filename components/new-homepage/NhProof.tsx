"use client";

import Image from "next/image";
import { useState } from "react";
import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Frame";

type Fact = { value: string; label: string };

/** Counted facts on the left (5), a selectable client quote on the right (7). */
export function NhProof({
  facts,
  quotes,
}: {
  facts: Fact[];
  quotes: Testimonial[];
}) {
  const [i, setI] = useState(0);
  const q = quotes[i];
  return (
    <section className="border-b border-line px-4 py-24 sm:px-6 lg:px-10">
      <Eyebrow index="04">Proof</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        In the clients&rsquo; own words.
      </h2>

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:col-span-5 lg:self-start">
          {facts.map((f) => (
            <div key={f.label} className="bg-background p-6">
              <dd className="text-6xl font-semibold leading-none tracking-tighter text-foreground tabular-nums sm:text-7xl">
                {f.value}
              </dd>
              <dt className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                {f.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="lg:col-span-7">
          <blockquote
            key={q.name}
            className="border-l-2 border-brand-violet pl-6 sm:pl-10"
          >
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              &ldquo;{q.review}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              {q.photo && (
                <span className="relative h-12 w-12 shrink-0 overflow-hidden border border-line">
                  <Image
                    src={q.photo}
                    alt={q.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              )}
              <span>
                <span className="block font-semibold text-foreground">
                  {q.name}
                </span>
                <span className="block text-sm text-muted">
                  {q.title}, {q.company}
                </span>
              </span>
            </footer>
          </blockquote>

          <div
            role="tablist"
            aria-label="Choose a review"
            className="mt-10 flex flex-wrap border-t border-line"
          >
            {quotes.map((x, n) => (
              <button
                key={x.name}
                type="button"
                role="tab"
                aria-selected={i === n}
                onClick={() => setI(n)}
                className={cn(
                  "border-b-2 px-4 py-3 text-sm transition-colors",
                  i === n
                    ? "border-brand-violet text-foreground"
                    : "border-transparent text-muted hover:text-foreground",
                )}
              >
                {x.company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
