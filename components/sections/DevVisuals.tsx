import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Database,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

/**
 * Vector illustrations for the mobile, web and web-application service pages.
 * Same approach as ServiceVisuals: SVG, coloured only with theme tokens.
 */

const frame =
  "relative overflow-hidden rounded-xl border border-line bg-gradient-to-br from-brand-violet/10 via-card to-card aspect-[3/2]";

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

function Chip({
  x,
  y,
  w,
  icon: Icon,
  label,
}: {
  x: number;
  y: number;
  w: number;
  icon: LucideIcon;
  label: string;
}) {
  // Chips are scaled up so their labels stay legible when the SVG shrinks on phones.
  const cw = w * 1.22;
  const cx = Math.min(x, 592 - cw);
  return (
    <g>
      <rect x={cx} y={y} width={cw} height="46" rx="23" className="fill-card stroke-line" strokeWidth="1.5" />
      <Icon x={cx + 14} y={y + 11} width={24} height={24} className="text-accent" strokeWidth={2} />
      <text x={cx + 48} y={y + 30} className="fill-foreground text-[17px] font-semibold">
        {label}
      </text>
    </g>
  );
}

function Phone({
  x,
  y,
  w,
  h,
  rot = 0,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rot?: number;
  accent?: boolean;
}) {
  const p = w * 0.1;
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} rx={w * 0.17} className="fill-card stroke-line" strokeWidth="2" />
      <rect x={x + w * 0.36} y={y + 8} width={w * 0.28} height="5" rx="2.5" className="fill-line" />
      <rect
        x={x + p}
        y={y + 26}
        width={w - p * 2}
        height={h * 0.2}
        rx="10"
        className={accent ? "fill-brand-violet" : "fill-brand-violet/20"}
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={x + p} y={y + h * 0.36 + i * (h * 0.14)} width={h * 0.09} height={h * 0.09} rx="8" className="fill-brand-violet/25" />
          <rect x={x + p + h * 0.12} y={y + h * 0.37 + i * (h * 0.14)} width={w * 0.5} height="7" rx="3.5" className="fill-line" />
          <rect x={x + p + h * 0.12} y={y + h * 0.37 + i * (h * 0.14) + 13} width={w * 0.34} height="6" rx="3" className="fill-line" opacity="0.6" />
        </g>
      ))}
      <rect x={x + w * 0.2} y={y + h - 22} width={w * 0.6} height="6" rx="3" className="fill-line" />
    </g>
  );
}

/** Mobile app development: a fan of three phones with floating product chips. */
export function MobileVisual() {
  return (
    <div className={frame}>
      <svg viewBox="0 0 600 400" role="img" aria-label="Three mobile app screens with iOS and Android badges" className="h-full w-full">
        <defs>
          <radialGradient id="mb-glow">
            <stop offset="0" stopColor="currentColor" className="text-brand-glow" stopOpacity="0.5" />
            <stop offset="1" stopColor="currentColor" className="text-brand-glow" stopOpacity="0" />
          </radialGradient>
        </defs>
        <Dots id="mb-dots" />
        <circle cx="300" cy="210" r="170" fill="url(#mb-glow)" className="motion-safe:animate-pulse" />
        <Phone x={120} y={78} w={120} h={250} rot={-9} />
        <Phone x={360} y={78} w={120} h={250} rot={9} />
        <Phone x={228} y={48} w={144} h={300} accent />
        <Chip x={40} y={310} w={136} icon={Smartphone} label="iOS & Android" />
        <Chip x={432} y={36} w={128} icon={Bell} label="Push alerts" />
        <Chip x={438} y={310} w={122} icon={Zap} label="Native feel" />
      </svg>
    </div>
  );
}

/** Web development: a browser window with a hero, feature cards and a responsive phone. */
export function WebVisual() {
  return (
    <div className={frame}>
      <svg viewBox="0 0 600 400" role="img" aria-label="A responsive website shown in a browser window and on a phone" className="h-full w-full">
        <defs>
          <Gradient id="wb-hero" />
        </defs>
        <Dots id="wb-dots" />
        <rect x="50" y="46" width="440" height="296" rx="16" className="fill-card stroke-line" strokeWidth="2" />
        <path d="M50 82 H490" className="stroke-line" strokeWidth="1.5" />
        <circle cx="70" cy="64" r="4.5" className="fill-brand-glow" />
        <circle cx="84" cy="64" r="4.5" className="fill-brand-violet/60" />
        <circle cx="98" cy="64" r="4.5" className="fill-line" />
        <rect x="124" y="55" width="220" height="18" rx="9" className="fill-line" opacity="0.7" />
        <rect x="70" y="100" width="150" height="14" rx="7" className="fill-foreground" opacity="0.85" />
        <rect x="70" y="124" width="110" height="14" rx="7" className="fill-foreground" opacity="0.85" />
        <rect x="70" y="152" width="170" height="7" rx="3.5" className="fill-line" />
        <rect x="70" y="166" width="140" height="7" rx="3.5" className="fill-line" />
        <rect x="70" y="190" width="92" height="28" rx="14" fill="url(#wb-hero)" />
        <rect x="270" y="98" width="200" height="124" rx="12" fill="url(#wb-hero)" opacity="0.9" />
        <circle cx="440" cy="128" r="16" className="fill-white" opacity="0.35" />
        <path d="M270 200 L330 160 L380 190 L430 150 L470 190 V222 H270 Z" className="fill-white" opacity="0.22" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={70 + i * 140} y="244" width="124" height="76" rx="10" className="fill-brand-violet/10 stroke-line" strokeWidth="1.2" />
            <rect x={84 + i * 140} y="258" width="22" height="22" rx="7" className="fill-brand-violet/40" />
            <rect x={84 + i * 140} y="290" width="80" height="7" rx="3.5" className="fill-line" />
            <rect x={84 + i * 140} y="304" width="56" height="6" rx="3" className="fill-line" opacity="0.6" />
          </g>
        ))}
        <Phone x={440} y={170} w={104} h={196} rot={4} accent />
        <Chip x={366} y={10} w={122} icon={Search} label="SEO ready" />
        <Chip x={36} y={346} w={92} icon={Zap} label="Fast" />
      </svg>
    </div>
  );
}

/** Web applications: a dashboard window with KPIs, charts and a secure access badge. */
export function WebAppVisual() {
  const bars = [60, 100, 76, 130, 92];
  return (
    <div className={frame}>
      <svg viewBox="0 0 600 400" role="img" aria-label="A web application dashboard with metrics, charts and secure access" className="h-full w-full">
        <defs>
          <Gradient id="wa-bar" />
          <linearGradient id="wa-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" className="text-brand-violet" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" className="text-brand-violet" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Dots id="wa-dots" />
        <rect x="40" y="40" width="470" height="310" rx="16" className="fill-card stroke-line" strokeWidth="2" />
        <path d="M120 40 V350" className="stroke-line" strokeWidth="1.5" />
        <rect x="58" y="58" width="44" height="14" rx="7" fill="url(#wa-bar)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="58" y={92 + i * 34} width="16" height="16" rx="5" className={i === 0 ? "fill-brand-violet" : "fill-brand-violet/25"} />
            <rect x="82" y={96 + i * 34} width="22" height="7" rx="3.5" className="fill-line" />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={138 + i * 124} y="58" width="112" height="62" rx="12" className="fill-brand-violet/10 stroke-line" strokeWidth="1.2" />
            <rect x={150 + i * 124} y="72" width="46" height="7" rx="3.5" className="fill-line" />
            <rect x={150 + i * 124} y="88" width="66" height="14" rx="7" className="fill-foreground" opacity="0.85" />
          </g>
        ))}
        <rect x="138" y="136" width="236" height="198" rx="12" className="fill-card stroke-line" strokeWidth="1.2" />
        <path d="M152 300 C 186 270, 200 292, 232 250 S 290 262, 322 214 S 352 200, 360 190 V318 H152 Z" fill="url(#wa-area)" />
        <path d="M152 300 C 186 270, 200 292, 232 250 S 290 262, 322 214 S 352 200, 360 190" className="stroke-brand-violet" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="152" y="150" width="70" height="8" rx="4" className="fill-line" />
        <rect x="388" y="136" width="108" height="198" rx="12" className="fill-card stroke-line" strokeWidth="1.2" />
        {bars.map((b, i) => (
          <rect key={i} x={402 + i * 18} y={316 - b} width="12" height={b} rx="5" fill="url(#wa-bar)" />
        ))}
        <rect x="402" y="150" width="54" height="8" rx="4" className="fill-line" />
        <Chip x={430} y={10} w={150} icon={ShieldCheck} label="Secure access" />
        <Chip x={440} y={346} w={140} icon={Database} label="Scales with you" />
        <Chip x={20} y={346} w={130} icon={Users} label="Role-based" />
      </svg>
    </div>
  );
}
