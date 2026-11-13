"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CalendarClock, Wallet } from "lucide-react";
import { Eyebrow } from "@/components/new-homepage/Frame";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Option = { id: string; label: string; hint: string };

const platforms: (Option & { cost: number; weeks: number })[] = [
  { id: "web", label: "Web App", hint: "Responsive web application", cost: 18000, weeks: 6 },
  { id: "mobile", label: "Mobile App", hint: "iOS & Android", cost: 24000, weeks: 8 },
  { id: "both", label: "Web + Mobile", hint: "Shared backend & design", cost: 38000, weeks: 12 },
  { id: "saas", label: "SaaS Platform", hint: "Multi-tenant, billing, admin", cost: 52000, weeks: 14 },
];

const depths: (Option & { mult: number; weeksMult: number })[] = [
  { id: "mvp", label: "MVP", hint: "Core features to validate", mult: 1, weeksMult: 1 },
  { id: "standard", label: "Standard", hint: "Full feature set + integrations", mult: 1.8, weeksMult: 1.5 },
  { id: "enterprise", label: "Enterprise", hint: "SSO, audit, scale & compliance", mult: 3, weeksMult: 2.2 },
];

const timelines: (Option & { costMult: number; weeksMult: number })[] = [
  { id: "relaxed", label: "Flexible", hint: "Lower cost, longer runway", costMult: 0.9, weeksMult: 1.3 },
  { id: "standard", label: "Standard", hint: "Balanced delivery", costMult: 1, weeksMult: 1 },
  { id: "rush", label: "Fast-track", hint: "Larger team, priority", costMult: 1.3, weeksMult: 0.7 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

function OptionGroup<T extends Option>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: T[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
        {legend}
      </legend>
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {options.map((o) => {
          const selected = o.id === value;
          return (
            <label
              key={o.id}
              className={cn(
                "flex cursor-pointer items-start gap-3 p-4 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-glow",
                selected
                  ? "bg-brand-purple text-white"
                  : "bg-background hover:bg-card",
              )}
            >
              <input
                type="radio"
                name={legend}
                value={o.id}
                checked={selected}
                onChange={() => onChange(o.id)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={cn(
                  "mt-1 h-3 w-3 shrink-0 border",
                  selected ? "border-white bg-white" : "border-muted",
                )}
              />
              <span>
                <span className="block text-sm font-semibold">{o.label}</span>
                <span
                  className={cn(
                    "block text-xs",
                    selected ? "text-white/80" : "text-muted",
                  )}
                >
                  {o.hint}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Estimator() {
  const [platform, setPlatform] = useState("web");
  const [depth, setDepth] = useState("mvp");
  const [timeline, setTimeline] = useState("standard");

  const estimate = useMemo(() => {
    const p = platforms.find((x) => x.id === platform)!;
    const d = depths.find((x) => x.id === depth)!;
    const t = timelines.find((x) => x.id === timeline)!;
    const mid = p.cost * d.mult * t.costMult;
    const weeks = Math.max(3, Math.round(p.weeks * d.weeksMult * t.weeksMult));
    return {
      low: roundTo(mid * 0.85, 500),
      high: roundTo(mid * 1.15, 500),
      weeksLow: weeks,
      weeksHigh: weeks + Math.max(1, Math.round(weeks * 0.2)),
      p,
      d,
      t,
    };
  }, [platform, depth, timeline]);

  const subject = encodeURIComponent("Project inquiry from estimator");
  const body = encodeURIComponent(
    `Hi CodeSwifters,\n\nI'd like to discuss a project:\n- Platform: ${estimate.p.label}\n- Scope: ${estimate.d.label}\n- Timeline: ${estimate.t.label}\n- Estimate: ${fmt(estimate.low)} - ${fmt(estimate.high)} over ${estimate.weeksLow}-${estimate.weeksHigh} weeks\n\nThanks!`,
  );

  return (
    <section
      id="estimator"
      className="scroll-mt-20 border-b border-line px-4 py-24 sm:px-6 lg:px-10"
    >
      <Eyebrow index="02">Project estimator</Eyebrow>
      <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-6xl">
        A ballpark in 30 seconds.
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Choose your scope and get an instant, no-commitment estimate. Final
        quotes follow a short discovery call.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <OptionGroup legend="Platform type" options={platforms} value={platform} onChange={setPlatform} />
          <OptionGroup legend="Feature depth" options={depths} value={depth} onChange={setDepth} />
          <OptionGroup legend="Timeline" options={timelines} value={timeline} onChange={setTimeline} />
        </div>

        <div className="flex flex-col bg-brand-purple p-6 text-white sm:p-10 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-widest text-white/70">
            Estimated investment
          </p>
          <p
            aria-live="polite"
            className="mt-3 text-4xl font-semibold leading-none tracking-tighter sm:text-5xl"
          >
            {fmt(estimate.low)} – {fmt(estimate.high)}
          </p>

          <div className="mt-8 space-y-3 border-t border-white/30 pt-6 text-sm">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-4 w-4" />
              <span>
                {estimate.weeksLow}–{estimate.weeksHigh} weeks delivery
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Wallet className="h-4 w-4" />
              <span>
                {estimate.p.label} · {estimate.d.label} · {estimate.t.label}
              </span>
            </div>
          </div>

          <ButtonLink
            href={`mailto:${site.email}?subject=${subject}&body=${body}`}
            size="lg"
            className="mt-8 w-full bg-white text-brand-midnight hover:bg-brand-midnight hover:text-white"
          >
            Send inquiry <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <p className="mt-3 text-xs text-white/70">
            Indicative only. Not a binding quote.
          </p>
        </div>
      </div>
    </section>
  );
}
