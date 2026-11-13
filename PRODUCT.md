# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary (inferred from existing reviews, not yet confirmed):** founders and small teams who need a product built, such as an MVP, a mobile app, a web platform or an AI-enabled tool. Their reviews come from WEDFluencer, BioTip, LYNA Cam, Hooha, Luxe Vault, Wight Guide, Agent Lists Pro and HeyFlutter.
- **Secondary (inferred):** established businesses commissioning internal tools, CRMs, portals and workflow automation (NEXUS, MCS Digitizing).
- Visitors are deciding whether to hire a software house. They compare it to other agencies, check the case studies and reviews, then book a call or send a message.

## Product Purpose

CodeSwifters is a software house with offices in Milton, CA, Canada and Karachi, Pakistan. This site presents its services and past work and converts visitors into strategy calls and project enquiries. Success is a qualified enquiry through `/contact-us` or by email.

## Positioning

Confirmed by the owner: a team of **25+ senior members builds every product under the company's own supervision**. The company runs the work and its seniors do the building.

Open: the claim a neighbouring agency could not copy beyond that. Candidates seen in client reviews are Flutter depth, AI features inside real products, and milestone-based delivery with clear communication. None has been confirmed as the lead claim.

## Operating Context

- Services: web development, web applications, mobile apps (iOS and Android, Flutter), custom software and workflow automation, AI-powered features.
- Contact points: `info@codeswifters.com`, +1 (437) 365-5023, offices in Milton, CA and Karachi.
- Visitors reach the site mainly on desktop and mobile web. The site is English only.

## Capabilities and Constraints

- Next.js 16 App Router with Cache Components, React 19, Tailwind v4, next-themes (dark default, light available), framer-motion.
- Content lives in `lib/` (`site.ts`, `services.ts`, `projects.ts`, `testimonials.ts`, `case-studies/`). Routes: `/`, `/services` and three service pages, `/our-work` and seven case-study pages, `/about-us`, `/contact-us`.
- Seven case studies: NEXUS, MCS Digitizing, WEDFluencer, Luxe Vault, BioTip eyeApp, Wight Guide, LYNA Cam. Case-study copy beyond the live-site summaries was written from screenshots and client reviews and has not been checked with the clients.
- Known data issue: `app/about-us/page.tsx` references the slug `luxe-vault`, but the project slug is `luxevault`.

## Brand Commitments

- Name: CodeSwifters. Logo assets in `public/assets/brand/` (navy wordmark, white wordmark, light and dark marks).
- Brand colors named by the owner as binding: `#5114b9` (Deep Purple) and `#130449` (Midnight Blue). The owner's rules in `CLAUDE.md` require them to be used as solid fills only.
- `CLAUDE.md` sets structural rules the owner has made binding: no card grids, no glassmorphism or glows, no traditional centred hero, no fake metrics or placeholder copy, no floating or translucent nav.

## Evidence on Hand

- Nine client reviews with photos in `lib/testimonials.ts` and `public/assets/testimonials/`.
- Eleven client logos in `public/assets/clients/`.
- Seven projects with screenshots in `public/assets/home/` and `public/assets/case-studies/`.
- **Absent or unverified, do not present as fact:**
  - "350+ specialized experts" conflicts with the owner's statement of **25+ seniors**. Treat 350+ as wrong until corrected.
  - "30+ countries served" and "4.9/5 client rating" come from the old site and are not confirmed.
  - "Now booking Q4 engagements" is existing copy and is not confirmed as current.
  - No pricing, no named enterprise clients and no awards are on file.

## Product Principles

1. Say what the team is: 25+ seniors, supervised by the company, building the product. Do not inflate headcount.
2. Prove with the work. Real case studies and client words come before adjectives.
3. Write specific copy about what is built (platforms, apps, integrations), never generic agency phrases.
4. Every page leads toward a conversation. The path to contact stays short and always visible.
5. Anything unverified stays off the site until the owner confirms it.

## Accessibility & Inclusion

No product-specific requirement has been stated. Working baseline: WCAG AA contrast in both themes, visible keyboard focus, `prefers-reduced-motion` respected (already handled in `globals.css`).
