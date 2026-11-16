"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Frame";

const stages = [
  {
    name: "Discovery",
    lead: "We learn your users, your constraints and what success means before anything is drawn.",
    points: [
      "Goals and user journeys written down",
      "Risks and unknowns listed early",
      "A scope you can say yes or no to",
    ],
    file: "scope.md",
    code: [
      "# Scope",
      "- Who it is for",
      "- What v1 must do",
      "- What waits for v2",
      "- Open questions",
    ],
  },
  {
    name: "Architecture",
    lead: "Stack, data model and integrations chosen for the product you will have in a year, not just launch day.",
    points: [
      "Data model and API shape agreed",
      "Clear milestones with owners",
      "UI prototype to react to before we build",
    ],
    file: "architecture.md",
    code: [
      "client  -> api",
      "api     -> database",
      "api     -> third parties",
      "auth    -> roles",
      "deploy  -> environments",
    ],
  },
  {
    name: "Build",
    lead: "Clean code in regular increments you can open and use, reviewed by a senior engineer.",
    points: [
      "Working builds at every milestone",
      "Code review on every change",
      "Testing across devices and scenarios",
    ],
    file: "milestones.md",
    code: [
      "[x] Auth and roles",
      "[x] Core flows",
      "[ ] Payments",
      "[ ] Admin dashboard",
      "[ ] Release candidate",
    ],
  },
  {
    name: "Scale",
    lead: "Release, monitoring and support after launch. The team that built it stays on it.",
    points: [
      "Store and production release handled",
      "Monitoring in place on day one",
      "Next phase planned from real usage",
    ],
    file: "release.md",
    code: [
      "deploy   production",
      "monitor  errors, speed",
      "support  post-launch",
      "plan     next phase",
    ],
  },
];

/** Tabbed breakdown: the stage list drives a flat panel with a mono artifact. */
export function NhProcess() {
  const [i, setI] = useState(0);
  const s = stages[i];
  return (
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <Eyebrow index="03">How we build</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        Four stages. Nothing hidden between them.
      </h2>

      <div className="mt-8 grid border border-line lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Delivery stages"
          className="flex overflow-x-auto border-b border-line lg:col-span-4 lg:flex-col lg:border-b-0 lg:border-r"
        >
          {stages.map((x, n) => (
            <button
              key={x.name}
              type="button"
              role="tab"
              id={`stage-tab-${n}`}
              aria-selected={i === n}
              aria-controls="stage-panel"
              onClick={() => setI(n)}
              className={cn(
                "flex shrink-0 items-baseline gap-4 border-line px-6 py-5 text-left transition-colors lg:border-b lg:last:border-b-0",
                i === n
                  ? "bg-brand-purple text-white"
                  : "text-foreground hover:bg-card",
              )}
            >
              <span className="font-mono text-xs opacity-70">0{n + 1}</span>
              <span className="text-xl font-semibold tracking-tight sm:text-2xl">
                {x.name}
              </span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="stage-panel"
          aria-labelledby={`stage-tab-${i}`}
          className="grid gap-10 p-6 sm:p-10 lg:col-span-8 lg:grid-cols-8"
        >
          <div className="lg:col-span-5">
            <p className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
              {s.lead}
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {s.points.map((p) => (
                <li key={p} className="py-3 text-sm text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start border border-line bg-card lg:col-span-3">
            <p className="border-b border-line px-4 py-2 font-mono text-[11px] text-muted">
              {s.file} · example
            </p>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-foreground">
              {s.code.join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
