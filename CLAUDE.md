# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Production build into dist/
npm run preview      # Serve the production build locally
npm run deploy       # Build + wrangler deploy to Cloudflare
npm run audio        # Generate missing post audio with Google TTS (needs z_google/service-google-key.json)
```

## Architecture

**Astro 7 static site** on Cloudflare (a Worker serving `dist/` as static assets, see `wrangler.jsonc`). Markdown → content collection → `.astro` pages → static HTML. Almost no client JS: only the mobile nav toggle, the audio player, and lazy Disqus.

### Content pipeline

- Blog posts live in `src/blog/post-N.md` (plain Markdown). The `blog` collection in `src/content.config.ts` loads `post-*.md` only, so `post-49.md-draft` style files are ignored.
- Images: `src/blog/images/filename.jpg`, referenced in frontmatter and body as `./images/filename.jpg`. Astro optimizes them at build time. Raw HTML `<img>` tags in a post are not processed, so those images live in `public/images/blog/` and use `/images/blog/filename.jpg`. Prefer Markdown `![alt](./images/...)`.
- Audio: `public/audio/{slug}.mp3`. `AudioPlayer.astro` checks for the file at build time; no frontmatter needed.
- TikTok embeds in a post body load the TikTok script automatically on that post only.

### Post frontmatter schema

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"   # keep quoted; used verbatim for the URL
slug: "url-friendly-slug"
category: "Category Name"
excerpt: "Short description shown in listing"
image: "./images/filename.jpg"   # or "" if none
draft: false
tags:
  - Tag One
  - Tag Two
---
```

Post URLs are `/{YYYY}/{MM}/{DD}/{slug}`. Drafts and future-dated posts are excluded at build time (`getPublishedPosts()` in `src/lib/posts.ts`).

### Pages (`src/pages/`)

- `index.astro`: homepage; "Stories" shows the latest 4 posts automatically
- `blog.astro`: newest story featured, then every story as rows grouped by year; `page/[page].astro` keeps old `/page/N` links working
- `category/[category]/[...page].astro`: `/category/{slug}` and `/category/{slug}/2`, 8 per page. Slugs keep `+` (`/category/lgbtq+`).
- `[yyyy]/[mm]/[dd]/[slug].astro`: single post
- `styleguide.astro`: every token and shared component, rendered with real posts (noindex, not in sitemap). Check UI changes here first.
- `rss.xml.ts`, sitemap via `@astrojs/sitemap`, `public/_redirects` for `/feed`

### Shared code

- `src/lib/posts.ts`: `getPublishedPosts`, `postUrl`, `categorySlug`, `readingTime`, `formatDate`, `SITE`. Use these; don't rebuild URL or date logic in pages.
- `src/layouts/BaseLayout.astro`: head/SEO/OG/JSON-LD, Google Analytics (skipped under Do Not Track), header, footer
- `src/components/*.astro`: Header, Footer, Button, Photo (every image goes through it), PageHero, SplitRow, TextRow, Quotes, PostFeature, PostRow, PostMeta, Moments, ContactBand, CategoryNav, Pagination, AudioPlayer, Comments (Disqus). See DESIGN.md for the visual rules.

### Styling

One global stylesheet, `src/styles/global.css`, with color tokens on `:root` (see `DESIGN.md`). Tailwind v3 runs through `postcss.config.js` for its base reset and `@tailwindcss/typography` (`prose`); nearly all styling is plain CSS classes. Never hardcode hex values outside `:root`.

### Numbering convention

Posts are numbered sequentially (`post-1.md` through current). The next post is one higher than the highest existing number in `src/blog/`.
