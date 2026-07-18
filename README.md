# sahil.bio

portfolio and writing. v2 — minimal, light, serif/sans.

built with [astro](https://astro.build). fonts: inter + eb garamond.
content managed with [keystatic](https://keystatic.com).

```sh
pnpm install
pnpm dev      # local dev
pnpm build    # build (vercel adapter)
```

## content

everything editable lives in two places:

- `src/content/writing/` — blog posts (mdx)
- `src/data/` — intro copy, work, and projects (json)

edit by hand, or use the cms at `/keystatic`:

- **local dev** — `pnpm dev`, open http://localhost:4321/keystatic.
  edits write straight to the files on disk.
- **production** — the deployed `/keystatic` uses github storage and
  commits to this repo. first visit walks you through creating a
  github app; then set these env vars on vercel:
  `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`,
  `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
