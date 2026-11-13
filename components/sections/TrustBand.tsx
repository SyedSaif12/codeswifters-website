"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

type Fact = { value: number; suffix?: string; label: string; note: string };

/** Counts up from 0 when scrolled into view; shows the final value for reduced motion. */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce || !inView) return;
    const unsub = mv.on("change", (v) => {
      node.textContent = `${Math.round(v)}${suffix}`;
    });
    node.textContent = `0${suffix}`;
    const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, reduce, value, suffix, mv]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const spans = [
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
];

/**
 * Flat typographic fact band. Every figure is real: the headcount is the
 * owner-confirmed number, the rest is counted from the site's own data.
 * Uneven 5 / 3 / 2 / 2 split, raw dividers, no cards.
 */
export function TrustBand({ facts }: { facts: Fact[] }) {
  return (
    <section
      aria-label="CodeSwifters at a glance"
      className="border-b-2 border-foreground bg-background px-4 pb-14 pt-20 sm:px-6 sm:pt-28 lg:px-10"
    >
      <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`border-t-2 border-foreground pt-4 ${spans[i % spans.length]}`}
          >
            <dd
              className={`font-semibold leading-[0.85] tracking-tighter text-foreground tabular-nums ${
                i === 0
                  ? "text-7xl sm:text-8xl lg:text-9xl"
                  : "text-6xl sm:text-7xl"
              }`}
            >
              <CountUp value={f.value} suffix={f.suffix} />
            </dd>
            <dt className="mt-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              {f.label}
            </dt>
            <dd className="mt-1 max-w-[16rem] text-sm text-foreground/70">
              {f.note}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
