import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.sahil.bio",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: "vitesse-light", wrap: true },
  },
});
