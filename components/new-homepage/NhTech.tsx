"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Frame";

const groups = [
  {
    id: "frontend",
    label: "Front-end",
    blurb: "Interfaces that feel instant.",
    items: [
      ["Next.js", "App Router, server components"],
      ["React", "Composable, accessible UI"],
      ["TypeScript", "End-to-end type safety"],
      ["Tailwind CSS", "Design-system driven styling"],
      ["Flutter", "iOS and Android from one codebase"],
      ["React Native", "Shared code across platforms"],
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    blurb: "APIs and data built for reliability.",
    items: [
      ["Node.js", "High-throughput services"],
      ["NestJS", "Structured, testable architecture"],
      ["PostgreSQL", "Relational data done right"],
      ["Redis", "Caching, queues, rate limiting"],
      ["GraphQL / tRPC", "Typed API contracts"],
      ["Stripe", "Payments and subscriptions"],
    ],
  },
  {
    id: "design",
    label: "Design",
    blurb: "Research-led, prototyped before built.",
    items: [
      ["Figma", "Interface design and prototyping"],
      ["Design systems", "Consistent, reusable UI"],
      ["User research", "Decisions grounded in real users"],
      ["Prototyping", "Clickable flows before development"],
      ["Motion", "Purposeful micro-interactions"],
      ["Accessibility", "Inclusive by default"],
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    blurb: "Automated, observable infrastructure.",
    items: [
      ["AWS", "Lambda, ECS, RDS, S3, CloudFront"],
      ["Docker", "Reproducible environments"],
      ["Kubernetes", "Orchestration at scale"],
      ["Terraform", "Infrastructure as code"],
      ["GitHub Actions", "CI/CD pipelines"],
      ["Datadog", "Monitoring and alerting"],
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    blurb: "Practical AI inside real product workflows.",
    items: [
      ["OpenAI & Claude APIs", "LLM-powered features"],
      ["LangChain", "Agents and tool use"],
      ["pgvector", "Semantic search and RAG"],
      ["Python", "Data and model pipelines"],
      ["Hugging Face", "Open-source model hosting"],
      ["Vercel AI SDK", "Streaming chat UX"],
    ],
  },
];

/** Technologies: category rail (4) + hairline ledger (8). Rows flood purple on hover. */
export function NhTech({ index = "04" }: { index?: string }) {
  const [i, setI] = useState(0);
  const g = groups[i];
  return (
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <Eyebrow index={index}>Technologies</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        The stack we ship with.
      </h2>

      <div className="mt-8 grid border border-line lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Technology categories"
          className="flex overflow-x-auto border-b border-line lg:col-span-4 lg:flex-col lg:border-b-0 lg:border-r"
        >
          {groups.map((x, n) => (
            <button
              key={x.id}
              type="button"
              role="tab"
              id={`tech-tab-${x.id}`}
              aria-selected={i === n}
              aria-controls="tech-panel"
              onClick={() => setI(n)}
              className={cn(
                "flex shrink-0 items-baseline gap-4 border-line px-6 py-4 text-left transition-colors lg:border-b lg:last:border-b-0",
                i === n ? "bg-brand-purple text-white" : "text-foreground hover:bg-card",
              )}
            >
              <span className="font-mono text-xs opacity-70">0{n + 1}</span>
              <span className="text-lg font-semibold tracking-tight sm:text-xl">{x.label}</span>
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="tech-panel"
          aria-labelledby={`tech-tab-${g.id}`}
          className="lg:col-span-8"
        >
          <p className="border-b border-line px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted sm:px-8">
            {g.blurb}
          </p>
          <ul>
            {g.items.map(([name, note]) => (
              <li
                key={name}
                className="grid gap-1 border-b border-line px-6 py-4 transition-colors last:border-b-0 hover:bg-brand-purple hover:text-white sm:grid-cols-[14rem_1fr] sm:px-8"
              >
                <span className="text-lg font-semibold tracking-tight">{name}</span>
                <span className="text-sm text-muted [li:hover>&]:text-white/80">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
