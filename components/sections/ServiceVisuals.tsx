import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Cloud,
  Database,
  Layers,
  Sparkles,
  Workflow,
} from "lucide-react";

/**
 * Vector illustrations for the /services capability cards. Drawn in SVG so
 * they stay sharp at any size, and coloured with theme tokens (fill-card,
 * stroke-line, text-brand-*) so both themes work with no hardcoded hex.
 */

const frame =
  "relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-brand-violet/10 via-card to-card";

function Gradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="currentColor" className="text-brand-plum" />
      <stop offset="0.55" stopColor="currentColor" className="text-brand-violet" />
      <stop offset="1" stopColor="currentColor" className="text-brand-glow" />
    </linearGradient>
  );
}

function Dots({ id }: { id: string }) {
  return (
    <>
      <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" className="fill-line" />
      </pattern>
      <rect width="600" height="400" fill={`url(#${id})`} opacity="0.7" />
    </>
  );
}

/** Small icon node: a rounded card with an icon and a caption. */
function Node({
  x,
  y,
  icon: Icon,
  label,
}: {
  x: number;
  y: number;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <g>
      <rect
        x={x - 34}
        y={y - 34}
        width="68"
        height="68"
        rx="18"
        className="fill-card stroke-line"
        strokeWidth="1.5"
      />
      <rect
        x={x - 34}
        y={y - 34}
        width="68"
        height="68"
        rx="18"
        className="fill-brand-violet/10"
      />
      <Icon x={x - 14} y={y - 14} width={28} height={28} className="text-accent" strokeWidth={1.8} />
      <text
        x={x}
        y={y + 62}
        textAnchor="middle"
        className="fill-foreground text-[19px] font-semibold"
      >
        {label}
      </text>
    </g>
  );
}

/** AI-powered solutions: an AI core connected to data, automation, personalisation and insights. */
export function AiVisual() {
  const spokes = [
    { x: 110, y: 100, icon: Database, label: "Your data" },
    { x: 490, y: 100, icon: Workflow, label: "Automation" },
    { x: 110, y: 290, icon: Sparkles, label: "Personalisation" },
    { x: 490, y: 290, icon: BarChart3, label: "Insights" },
  ];
  return (
    <div className={`${frame} aspect-[3/2]`}>
      <svg
        viewBox="0 0 600 400"
        role="img"
        aria-label="An AI core connected to your data, automation, personalisation and insights"
        className="h-full w-full"
      >
        <defs>
          <Gradient id="ai-core" />
          <radialGradient id="ai-glow">
            <stop offset="0" stopColor="currentColor" className="text-brand-glow" stopOpacity="0.55" />
            <stop offset="1" stopColor="currentColor" className="text-brand-glow" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Dots id="ai-dots" />

        {/* spokes */}
        {spokes.map((s) => (
          <path
            key={s.label}
            d={`M300 195 L${s.x} ${s.y}`}
            className="stroke-brand-glow"
            strokeWidth="2"
            strokeDasharray="5 7"
            strokeLinecap="round"
            opacity="0.7"
            fill="none"
          />
        ))}

        {/* glow + rings */}
        <circle cx="300" cy="195" r="120" fill="url(#ai-glow)" className="motion-safe:animate-pulse" />
        <circle cx="300" cy="195" r="78" className="fill-none stroke-brand-violet/40" strokeWidth="1.5" />
        <circle cx="300" cy="195" r="62" className="fill-card stroke-line" strokeWidth="1.5" />

        {/* core */}
        <circle cx="300" cy="195" r="48" fill="url(#ai-core)" />
        <text
          x="300"
          y="207"
          textAnchor="middle"
          className="fill-white text-[34px] font-extrabold"
        >
          AI
        </text>

        {spokes.map((s) => (
          <Node key={s.label} {...s} />
        ))}
      </svg>
    </div>
  );
}

/** Custom software: web, mobile, AI and cloud joined into one platform. */
export function CustomSoftwareVisual() {
  return (
    <div className={`${frame} aspect-[3/2]`}>
      <svg
        viewBox="0 0 600 400"
        role="img"
        aria-label="Web, mobile, AI and cloud connected into one platform"
        className="h-full w-full"
      >
        <defs>
          <Gradient id="cs-hub" />
          <radialGradient id="cs-glow">
            <stop offset="0" stopColor="currentColor" className="text-brand-glow" stopOpacity="0.5" />
            <stop offset="1" stopColor="currentColor" className="text-brand-glow" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Dots id="cs-dots" />

        {/* connectors */}
        <g
          className="stroke-brand-glow"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        >
          <path d="M190 105 C 240 105, 240 180, 262 190" />
          <path d="M150 300 C 220 300, 230 225, 262 212" />
          <path d="M338 190 C 380 180, 400 110, 460 100" />
          <path d="M338 212 C 380 225, 400 290, 460 300" />
        </g>

        {/* hub */}
        <circle cx="300" cy="201" r="110" fill="url(#cs-glow)" className="motion-safe:animate-pulse" />
        <rect x="248" y="161" width="104" height="80" rx="22" fill="url(#cs-hub)" />
        <Layers x={276} y={172} width={24} height={24} className="text-white" strokeWidth={1.8} />
        <text x="300" y="219" textAnchor="middle" className="fill-white text-[15px] font-bold">
          One platform
        </text>

        {/* web: browser window */}
        <g>
          <rect x="30" y="52" width="170" height="106" rx="12" className="fill-card stroke-line" strokeWidth="1.5" />
          <path d="M30 76 H200" className="stroke-line" strokeWidth="1.5" />
          <circle cx="44" cy="64" r="3.5" className="fill-brand-glow" />
          <circle cx="56" cy="64" r="3.5" className="fill-brand-violet/60" />
          <circle cx="68" cy="64" r="3.5" className="fill-line" />
          <rect x="44" y="88" width="60" height="8" rx="4" className="fill-brand-violet/50" />
          <rect x="44" y="104" width="94" height="6" rx="3" className="fill-line" />
          <rect x="44" y="118" width="76" height="6" rx="3" className="fill-line" />
          <rect x="146" y="90" width="42" height="56" rx="8" className="fill-brand-violet/15" />
          <path d="M152 138 L162 124 L170 130 L182 108" className="stroke-brand-violet" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="115" y="178" textAnchor="middle" className="fill-foreground text-[19px] font-semibold">
            Web
          </text>
        </g>

        {/* mobile: phone */}
        <g>
          <rect x="66" y="238" width="84" height="128" rx="16" className="fill-card stroke-line" strokeWidth="1.5" />
          <rect x="94" y="246" width="28" height="5" rx="2.5" className="fill-line" />
          <rect x="78" y="262" width="60" height="30" rx="8" className="fill-brand-violet/15" />
          <rect x="78" y="300" width="60" height="8" rx="4" className="fill-line" />
          <rect x="78" y="314" width="42" height="8" rx="4" className="fill-line" />
          <rect x="78" y="332" width="60" height="22" rx="11" className="fill-brand-violet" />
          <text x="108" y="388" textAnchor="middle" className="fill-foreground text-[19px] font-semibold">
            Mobile
          </text>
        </g>

        {/* AI + cloud nodes */}
        <Node x={494} y={98} icon={Sparkles} label="AI" />
        <Node x={494} y={296} icon={Cloud} label="Cloud & APIs" />
      </svg>
    </div>
  );
}
