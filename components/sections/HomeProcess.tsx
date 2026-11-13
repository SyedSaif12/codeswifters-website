"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/process";

/**
 * Delivery workflow as a numbered ledger with a vertical progress rule that
 * fills as the visitor scrolls. Left column is sticky on desktop (5 / 7 split).
 */
export function HomeProcess() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section
      id="process"
      className="scroll-mt-20 bg-brand-midnight px-4 pb-24 pt-28 text-white sm:px-6 sm:pt-36 lg:px-10"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-widest text-white/70 sm:text-sm">
              How a project runs
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
              Six steps, no surprises.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/80">
              Every build moves through the same path, with milestones you can
              review at each stage and a senior engineer answering your
              messages.
            </p>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7 lg:col-start-6">
          <span
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-0.5 bg-white/25"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : fill, transformOrigin: "top" }}
            className="absolute bottom-0 left-0 top-0 w-0.5 bg-white"
          />
          {processSteps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid gap-3 border-b border-white/20 py-10 pl-8 first:pt-0 last:border-b-0 sm:grid-cols-12 sm:gap-8 sm:pl-12"
            >
              <span className="font-mono text-sm text-white/70 sm:col-span-2 sm:pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sm:col-span-10">
                <h3 className="text-3xl font-semibold leading-none tracking-tighter sm:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                  {s.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
