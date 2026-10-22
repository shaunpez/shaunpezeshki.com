---
name: Shaun Pezeshki Light
description: Light, airy and organized, in the spirit of uphighstudio.com. The original section order, with each section redesigned to flow.
colors:
  ink: "#161b18"
  graphite: "#5a635d"
  paper: "#fafaf9"
  band: "#f1f5f2"
  mint-band: "#e8f4ed"
  surface: "#ffffff"
  teal: "#0e7c74"
  teal-deep: "#075f59"
  cta: "#9edbbc"
  cta-hover: "#8dd3b0"
  cta-ink: "#0b3d2e"
typography:
  headings: "Manrope Variable (self-hosted via @fontsource-variable/manrope), weight 650, tracking -0.03em, sentence case"
  body: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif at 17-18px"
rounded:
  photos: "20px (thumbnails 14-16px)"
  buttons: "pill"
---

# Design System: Light

Chosen Oct 2026 after Shaun compared real reference sites (board: https://app.superset.sh/page/shaun-s-site-directions-p8qgvr). He picked a mix:

- Light and airy like uphighstudio.com (his studio), not copied from it.
- The clean text structure of justinwelsh.me and jamesclear.com.
- More imagery, like nesslabs.com and fs.blog.
- From stevenbartlett.com: lots of photos of him, a story, a business showcase. Told through his own essays, not his upbringing.

Two earlier passes were rejected: a recolor that kept the old boxy cards, and a bold "name as monument" redesign (giant all-caps type, dark colour chapters). Do not bring back all caps, tiny text, dark sections, or giant type.

## Rules

- Light only. No dark mode.
- Call the writing "stories", never "essays", in anything a visitor reads.
- Sentence case everywhere. Body text 17-18px; nothing under 14px.
- Sections separated by space and soft tone bands (`--band`, `--mint-band`), not boxes or borders. Thin rules only between list rows.
- Photos with soft rounded corners, always through `Photo.astro` (20px, or 14px with `small` for thumbnails). Never style an `<img>` corner directly. Phones crop large photos to 4 / 3.
- Pistachio pill buttons (`--cta` with `--cta-ink` text). Green (`--teal-deep`) for links, years, categories.
- Real content only: Shaun's photos, essay covers, Up High Studio case-study screenshots. Proudly Paired stays off the site (matchmaking is not public yet).

## Homepage order (unchanged from the original site)

The homepage is the trailer; the About page is the full story.

1. Hero (`PageHero`): headline, one paragraph, Let's talk + Read my stories, large photo.
2. What I do (band): four `SplitRow`s that alternate sides.
3. Kind words: two quotes.
4. Stories: newest story as a feature, three more as rows with thumbnails.
5. About teaser (band): photo, two short paragraphs, "More about me".
6. Contact band (mint): one line and buttons.

## About page order

1. Hero (`PageHero`): "I love making life easier for people."
2. How I got here (band): `TextRow`.
3. What I care about: three photos with short values.
4. Where I've been (band): `Moments` timeline of stories (slugs listed in `src/pages/about.astro`).
5. Community and writing: `TextRow`.
6. Contact band (mint).

The contact page (`/chat-with-shaun`) is a `PageHero` and three ways to reach me, as rows with thin rules.

## Components (src/components)

`Header`, `Footer`, `Button` (primary/secondary), `Photo`, `PageHero`, `SplitRow` (photo + text), `TextRow` (heading + text), `Quotes`, `PostFeature`, `PostRow`, `PostMeta` (category, date, read time), `Moments`, `ContactBand`, `CategoryNav`, `Pagination`, `AudioPlayer`, `Comments`. `/styleguide` renders them with real content.

## Story page

A reading column (`.shell--narrow`, 720px): All stories link, `PostMeta`, title, summary, Listen button (secondary button). The cover is the first image in the Markdown. Body text is `.prose`, themed with the site tokens; pull quotes get a pistachio bar. Then tags as quiet pills, comments, and a "Keep reading" band of three `PostRow`s (same category first).

Listen opens a player docked bottom right (full width on phones): seek bar, time played and left, back and forward 15 seconds, speed 0.75× to 2×, close. It remembers each story's place and the speed, and supports lock-screen controls. It's the only floating element besides the phone menu.
