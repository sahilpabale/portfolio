import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://www.sahil.bio",
  adapter: vercel(),
  security: {
    // without this astro distrusts the Host header on SSR requests and
    // rewrites the request origin to localhost, breaking keystatic oauth
    allowedDomains: [
      { hostname: "sahil.bio", protocol: "https" },
      { hostname: "www.sahil.bio", protocol: "https" },
    ],
  },
  integrations: [react(), mdx(), keystatic(), sitemap()],
  markdown: {
    shikiConfig: { theme: "vitesse-light", wrap: true },
  },
});
