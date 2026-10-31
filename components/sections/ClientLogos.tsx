import { readdirSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

const CLIENTS_DIR = path.join(process.cwd(), "public", "assets", "clients");
const IMAGE_EXT = /\.(png|webp|jpe?g|svg)$/i;

// Files in the folder that should not appear in the marquee.
// lynacam.png is the same brand as lynaCam-mark.png (wordmark variant).
const EXCLUDE = new Set(["lynacam.png"]);

// Display names for alt text; unknown files fall back to a prettified filename.
const NAMES: Record<string, string> = {
  "agentlistpro-logo": "Agent Lists Pro",
  biotip: "BioTip",
  "dolphin-merchant-logo": "Dolphin Merchant",
  luxevault: "LuxeVault",
  "lynacam-mark": "LYNA Cam",
  mcs: "MCS",
  nexus: "Nexus",
  saltcreek: "Salt Creek",
  "spotlist-logo": "SpotList",
  wedfluencer: "WEDFluencer",
  wightguide: "Wight Guide",
};

function getClients() {
  // Runs on the server at build/prerender, so new files dropped into
  // public/assets/clients/ show up automatically on the next build.
  return readdirSync(CLIENTS_DIR)
    .filter((f) => IMAGE_EXT.test(f) && !EXCLUDE.has(f))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const key = file.replace(IMAGE_EXT, "").toLowerCase();
      const name =
        NAMES[key] ??
        key
          .replace(/-?logo$/, "")
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
      return { file, name, src: `/assets/clients/${file}` };
    });
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  const clients = getClients();
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-x-14 pr-14"
    >
      {clients.map((c) => (
        <li key={c.file} className="shrink-0">
          {/* Fixed box + object-contain keeps every logo visually consistent
              regardless of its native aspect ratio. */}
          <div className="relative h-11 w-32">
            <Image
              src={c.src}
              alt={hidden ? "" : c.name}
              fill
              sizes="128px"
              className="object-contain opacity-60 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 dark:opacity-70"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  const mask =
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

  return (
    <section
      aria-label="Our clients"
      className="border-y border-line/80 bg-card/30 py-10"
    >
      <p className="px-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Trusted by founders &amp; teams building the future
      </p>
      <div
        className="group relative mt-8 overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {/* Two identical rows; translating by -50% loops seamlessly. */}
        <div className="flex w-max animate-marquee will-change-transform motion-reduce:[animation-duration:90s] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
