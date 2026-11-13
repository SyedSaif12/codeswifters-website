import Image from "next/image";

// Only logos with transparent backgrounds can be flattened to one tone.
const LOGOS = [
  { file: "wedfluencer.png", name: "WEDFluencer" },
  { file: "nexus.png", name: "Nexus" },
  { file: "luxevault.png", name: "Luxe Vault" },
  { file: "mcs.png", name: "MCS Digitizing" },
  { file: "biotip.png", name: "BioTip" },
  { file: "wightguide.png", name: "Wight Guide" },
  { file: "lynaCam-mark.png", name: "LYNA Cam" },
  { file: "agentlistpro-logo.png", name: "Agent Lists Pro" },
  { file: "spotlist-logo.png", name: "SpotList" },
  { file: "dolphin-merchant-logo.png", name: "Dolphin Merchant" },
];

/** Hairline-divided monochrome logo bar. Logos are flattened to the foreground tone. */
export function NhClientStrip() {
  return (
    <section
      aria-label="Clients"
      className="border-b border-line px-4 py-10 sm:px-6 lg:px-10"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        Built for teams at
      </p>
      <ul className="mt-6 grid grid-cols-2 border-l border-t border-line sm:grid-cols-5">
        {LOGOS.map((l) => (
          <li
            key={l.file}
            className="group flex h-24 items-center justify-center border-b border-r border-line px-6 transition-colors hover:bg-card"
          >
            <div className="relative h-9 w-full">
              <Image
                src={`/assets/clients/${l.file}`}
                alt={l.name}
                fill
                sizes="160px"
                className="object-contain opacity-50 brightness-0 transition-opacity duration-200 group-hover:opacity-100 dark:invert"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
