# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:8000
npm run build        # Production build
npm run serve        # Serve the production build locally
npm run clean        # Clear Gatsby cache (.cache/ and public/)
npm run deploy       # gatsby clean + build + gh-pages deploy to GitHub Pages
```

Run `gatsby clean` before builds when you see stale cache errors or GraphQL schema mismatches.

## Architecture

**Gatsby 5 static site** — Markdown files → GraphQL → React templates → static HTML.

### Content pipeline

- Blog posts live in `src/blog/post-N.md` (plain Markdown, not MDX despite MDX plugin being installed)
- Images: `src/blog/images/filename.jpg` — referenced in frontmatter as `./images/filename.jpg`
- Audio: `static/audio/{slug}.mp3` — auto-detected by the AudioPlayer component via HEAD request; no frontmatter needed
- Videos: referenced inline, copied to `public/blog/videos/` at build time via `gatsby-remark-copy-linked-files`

### Post frontmatter schema

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
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

Post URLs are generated as `/{YYYY}/{MM}/{DD}/{slug}` by `gatsby-node.js`. Posts with a future date are excluded at build time.

### Page generation (`gatsby-node.js`)

- One page per post at `/{date}/{slug}`
- Paginated blog list starting at `/page/2` (page 1 is `src/pages/index.js`)
- Category pages at `/category/{slug}` with 8 posts per page

### Templates & components

- `src/templates/blog-post-template.js` — single post view; renders `post.html` via `dangerouslySetInnerHTML`
- `src/templates/blog-list-template.js` — paginated post listing
- `src/templates/category-template.js` — filtered listing by category
- `src/components/audio-player.js` — checks `/audio/{slug}.mp3` existence; shows player only if file found
- `src/components/seo.js` — React Helmet wrapper for meta/OG tags

### Styling

Tailwind CSS with `@tailwindcss/typography` (the `prose` classes). PostCSS config in `postcss.config.js`. Global styles in `src/styles/global.css`.

### Numbering convention

Posts are numbered sequentially (`post-1.md` through current). The next post is one higher than the highest existing number in `src/blog/`.
