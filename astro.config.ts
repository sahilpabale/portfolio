import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://www.sahil.bio",
  adapter: vercel(),
  integrations: [
    react(),
    mdx(),
    // keystatic admin is local-only; github storage mode needs a GitHub App
    // (KEYSTATIC_* env vars on vercel) before it can ship to prod
    ...(process.env.NODE_ENV !== "production" ? [keystatic()] : []),
    sitemap(),
  ],
  markdown: {
    shikiConfig: { theme: "vitesse-light", wrap: true },
  },
});
