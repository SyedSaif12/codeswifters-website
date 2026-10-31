import type { Config } from "tailwindcss";

/**
 * Loaded from app/globals.css via `@config` (Tailwind v4 compat).
 * Semantic colors resolve to CSS variables defined in globals.css, so one
 * class (e.g. `bg-card`) is correct in both Light and Dark mode.
 * Note: v4 ignores `darkMode` here; the `dark` variant is declared in CSS.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand tokens (logo palette) — constant across themes
        brand: {
          violet: "#7C3AED", // Primary Accent — Electric Violet
          glow: "#8B5CF6", // Secondary Accent — Glow Violet
          navy: "#1E1B4B", // Brand Dark Navy
          plum: "#6B21A8", // Light-mode gradient start
        },
        // Semantic tokens — switch with the theme
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        line: "var(--line)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
    },
  },
};

export default config;
