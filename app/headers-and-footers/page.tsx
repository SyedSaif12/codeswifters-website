import type { Metadata } from "next";
import {
  FooterCompactLight,
  FooterLedger,
  FooterSitemap,
  FooterTwoTone,
} from "@/components/layout-options/FooterOptions";
import {
  HeaderLightMinimal,
  HeaderMasthead,
  HeaderMenuOverlay,
  HeaderPurpleIndex,
} from "@/components/layout-options/HeaderOptions";

// Internal picker page for choosing a header and footer. Hidden from search.
export const metadata: Metadata = {
  title: "Headers and footers (options)",
  robots: { index: false, follow: false },
};

function Option({
  n,
  name,
  note,
  children,
}: {
  n: string;
  name: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 px-4 sm:px-6 lg:px-10">
        <h3 className="text-2xl font-semibold tracking-tighter text-foreground">
          <span className="mr-3 font-mono text-base font-normal text-muted">{n}</span>
          {name}
        </h3>
        <p className="text-sm text-muted">{note}</p>
      </div>
      <div className="border-y border-foreground/25">{children}</div>
    </section>
  );
}

export default function HeadersAndFooters() {
  return (
    <div className="bg-background pb-24 pt-16">
      <div className="px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted">Pick one of each</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-tighter text-foreground sm:text-7xl">
          Headers &amp; footers.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-foreground/75">
          Four new headers and four new footers, all flat and on-brand. The
          header at the very top and the footer at the very bottom of this page
          are your current live ones. Tell me e.g. &ldquo;header 3 and footer
          2&rdquo; and I will apply them across the whole site with the sticky,
          scroll and mobile behaviour.
        </p>
      </div>

      <h2 className="mt-20 px-4 text-sm font-semibold uppercase tracking-widest text-foreground sm:px-6 lg:px-10">
        Headers
      </h2>
      <Option n="H1" name="Light Minimal" note="Theme-aware, centred nav, hover dropdown">
        <HeaderLightMinimal />
      </Option>
      <Option n="H2" name="Centered Masthead" note="Logo in the middle, newspaper-style nav strip">
        <HeaderMasthead />
      </Option>
      <Option n="H3" name="Purple Index" note="Deep-purple bar, numbered links, midnight dropdown">
        <HeaderPurpleIndex />
      </Option>
      <Option n="H4" name="Menu Overlay" note="Logo + Menu button only. Click Menu to open it">
        <div className="min-h-[34rem]">
          <HeaderMenuOverlay />
        </div>
      </Option>

      <h2 className="mt-24 px-4 text-sm font-semibold uppercase tracking-widest text-foreground sm:px-6 lg:px-10">
        Footers
      </h2>
      <Option n="F1" name="Compact Light" note="One calm row, theme-aware">
        <FooterCompactLight />
      </Option>
      <Option n="F2" name="Ledger" note="Giant email, link groups as ruled rows, purple">
        <FooterLedger />
      </Option>
      <Option n="F3" name="Giant Sitemap" note="Oversized page links left, contact right, midnight">
        <FooterSitemap />
      </Option>
      <Option n="F4" name="Two-Tone" note="Light statement + links, midnight legal bar">
        <FooterTwoTone />
      </Option>
    </div>
  );
}
