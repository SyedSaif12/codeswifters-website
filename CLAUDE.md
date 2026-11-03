Rules for building an elite, high-converting software house website.

## Constraints

- **Design Style:** Modern violet-branded UI with dark mode as the default and a full light mode. Subtle glowing borders, glassy blur backdrops (`backdrop-blur-xl`), and violet accent highlights.
- **Architecture:** Modular Next.js App Router setup. Components live in `components/ui` (primitives), `components/layout` (Navbar, Footer, ThemeProvider) and `components/sections` (page sections).
- **UI Quality:** Card layouts must have micro-interactions (hover elevation, subtle border transitions).
- **Typography:** High contrast, explicit font hierarchy using Geist sans (Inter is an acceptable fallback).

## Brand & Design System

The palette is derived from the logo. **Never hardcode hex values or raw Tailwind palette colors (`slate-*`, `indigo-*`, `cyan-*`, `emerald-*`) in components.** Use the semantic tokens below so every element is correct in both themes.

### Brand Tokens (constant in both themes)

| Token                            | Hex       | Tailwind       | Use                                      |
| -------------------------------- | --------- | -------------- | ---------------------------------------- |
| Primary Accent (Electric Violet) | `#7C3AED` | `brand-violet` | CTAs, active states, key branding        |
| Secondary Accent (Glow Violet)   | `#8B5CF6` | `brand-glow`   | Secondary highlights, glows, focus rings |
| Brand Dark Navy                  | `#1E1B4B` | `brand-navy`   | Gradient start (dark), light-mode text   |
| Plum                             | `#6B21A8` | `brand-plum`   | Light-mode gradient start                |

### Theme Tokens (switch with the theme)

| Semantic token    | Tailwind          | Dark (default) | Light     |
| ----------------- | ----------------- | -------------- | --------- |
| Background        | `bg-background`   | `#090714`      | `#FAFAFC` |
| Card background   | `bg-card`         | `#120F24`      | `#FFFFFF` |
| Card border       | `border-line`     | `#231C42`      | `#E2E8F0` |
| Text primary      | `text-foreground` | `#F8FAFC`      | `#1E1B4B` |
| Text muted        | `text-muted`      | `#94A3B8`      | `#64748B` |
| Accent text/icons | `text-accent`     | `#8B5CF6`      | `#6B21A8` |

### Accent Gradient

- **Dark:** `from-[#1E1B4B] via-[#7C3AED] to-[#8B5CF6]`
- **Light:** `from-[#6B21A8] to-[#7C3AED]`
- Use the theme-aware utilities `bg-accent-gradient`, `bg-accent-gradient-br` (fills) and `text-accent-gradient` (gradient text, or `<GradientText>`). Do not rebuild the gradient with `from-*`/`to-*` classes.
- Dark-mode gradient _text_ uses a brighter violet range (`#7C3AED → #8B5CF6 → #A78BFA`) because the navy stop is invisible on the dark background.

### Where tokens live

- `tailwind.config.ts` defines the Tailwind color names. It is loaded by `app/globals.css` through `@config` (Tailwind v4 compat).
- `app/globals.css` defines the CSS variables: light values on `:root`, dark values on `.dark`. **Change a color there once and the whole site follows.**
- Tailwind v4 ignores `darkMode` in the config. The `dark:` variant is declared in CSS with `@custom-variant dark`.

### Theming (next-themes)

- `ThemeProvider` (`components/layout/ThemeProvider.tsx`) wraps the app in `app/layout.tsx` with `attribute="class"`, `defaultTheme="dark"` and `enableSystem={false}`. `<html>` carries `suppressHydrationWarning`.
- `ThemeToggle` (`components/ui/ThemeToggle.tsx`) switches themes. It reads the mount state with `useSyncExternalStore` to avoid hydration mismatches.
- Theme changes fade through a 300 ms color transition set in `globals.css` (`@layer base`). It is disabled under `prefers-reduced-motion`.
- Prefer semantic tokens over `dark:` overrides. Only add a `dark:` variant when a value truly differs and has no token.

### Components

- Primitives: `Button` / `ButtonLink` (variants: primary, secondary, ghost, light), `Card`, `Badge` (tones: neutral, violet, glow, soft), `SectionHeading`, `GradientText`.
- Merge class names with `cn()` from `lib/utils.ts` (`clsx` + `tailwind-merge`).

### Logo Guidelines

- **Logo Asset Location:** `/public/assets/brand/logo.png` (navy wordmark, Light mode)
- **Dark Mode Variant:** `/public/assets/brand/logo-dark.png` (white wordmark, Dark mode)
- **Favicon Light Asset Location:** `/public/assets/brand/mark-light.png`
- **Favicon Dark Asset Location:** `/public/assets/brand/mark-dark.png`
- **Usage:** Always render the logo through `components/ui/Logo.tsx`, which uses the Next.js `<Image>` component and swaps variants with `dark:` classes (no hydration flash). The source art is 370x111, so it renders 40px tall (`height={40}`, `width={133}`) to keep its aspect ratio; do not force a 160x40 box. It sits on the far left of the Navbar and in the Footer.
- **Favicon:** set through `metadata.icons` in `app/layout.tsx` with `prefers-color-scheme` media queries (`mark-light.png` for light, `mark-dark.png` for dark; `mark-light.png` is also the Apple icon). Do not add `app/favicon.ico`, which would override this.
- `public/assets/brand/mark.svg` is an old cyan/dark-navy mark that is off-palette. Do not use it.

## Site structure (multi-page App Router)

| Route | File | Notes |
| ----- | ---- | ----- |
| `/` | `app/page.tsx` | Hero, ClientLogos, Services overview, FeaturedWork, Testimonials, CTA |
| `/services` | `app/services/page.tsx` | All capabilities, TechStack, process. Anchors `#custom-software`, `#ai` |
| `/services/mobile-development` | `app/services/mobile-development/page.tsx` | Driven by `lib/services.ts` through `ServiceDetail` |
| `/services/web-development` | `app/services/web-development/page.tsx` | same |
| `/services/web-applications` | `app/services/web-applications/page.tsx` | same |
| `/our-work` | `app/our-work/page.tsx` | Filterable `WorkGrid` |
| `/our-work/<slug>` | `app/our-work/<slug>/page.tsx` | One page per project (wedfluencer, biotip, mcs, nexus, luxevault, lynacam, wightguide). Each renders `CaseStudyView` with content from `lib/case-studies/<slug>.ts`. Core stack badges come from `CORE_STACK` in `lib/case-studies/types.ts` |
| `/about-us` | `app/about-us/page.tsx` | |
| `/contact-us` | `app/contact-us/page.tsx` | Contact form, Estimator, FAQ |

- `Navbar` and `Footer` live in `app/layout.tsx` (not in pages). The Navbar has a Services dropdown (hover for mouse, tap/Enter to toggle, Esc/outside click closes) and a mobile accordion.
- **Content lives in `lib/`**: `site.ts` (contact details, offices, nav), `services.ts`, `projects.ts`, `testimonials.ts`. Adding a project means: an entry in `projects.ts` (card), `lib/case-studies/<slug>.ts` and `app/our-work/<slug>/page.tsx`. There is no generic fallback route.
- Contact details and wording come from the live site (codeswifters.com). Case-study copy beyond the live summaries was written from screenshots and client reviews, so review it before publishing.
- Use `ButtonLink` for links styled as buttons: internal `/paths` use `next/link`, while `mailto:`/`tel:`/external stay plain anchors.
- Images: always `next/image` with `fill` + `sizes` inside an aspect-ratio box. Avoid asset filenames with spaces or parentheses.

## Next.js 16 Cache Components rules (enabled in `next.config.ts`)

- Do **not** export `dynamicParams` or other route segment configs (the build fails). Use `notFound()` for unknown params.
- Await `params` inside `<Suspense>` (Partial Prefetching is on). Case study pages are static (no params).
- Client components that call `usePathname()` in a shared layout must be wrapped in `<Suspense>` (see `Navbar` + `NavbarFallback` in `app/layout.tsx`).
- If dev shows stale or mismatched HTML after running `npm run build`, stop the dev server and delete `.next`.

## Next.js notes

- This is Next.js 16. Do not read the clock (`new Date()`) during render of statically prerendered components. See `components/layout/Footer.tsx` for the `useSyncExternalStore` pattern.
- See `AGENTS.md` for the bundled Next.js docs.
