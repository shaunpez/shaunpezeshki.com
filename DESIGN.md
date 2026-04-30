---
name: Shaun Pezeshki Warm Editorial Index
description: A photo-led editorial system for Shaun's consulting work, stories, and personal background.
colors:
  ink: "#202620"
  graphite: "#59635c"
  paper: "#fbf7ee"
  paper-soft: "#f0e8d9"
  surface: "#fffdf8"
  line: "#d8cdbc"
  teal: "#0e7c74"
  teal-deep: "#075f59"
  olive: "#697b45"
  clay: "#b85f45"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6.2vw, 5.4rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.45rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "0"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "8px"
  lg: "14px"
---

# Design System: Warm Editorial Index

## North Star

The site should feel like Shaun opened a well-organized field notebook: personal photos, clear pathways, practical consulting proof, and stories that feel central rather than bolted on. The first screen should lead with Shaun's practical value, show the person, and hint at the page below.

## Direction

Use the **Personal Map Masthead** direction from the visual probes:

- A personal photo leads the first viewport.
- The homepage opens with a direct consulting value headline and a personal photo.
- Consulting proof appears as clear services, industries, and quotes, not repeated equal cards.
- Writing appears as an archive of featured editorial entries with category/date/reading time.
- About and contact pages inherit the same index language instead of becoming isolated prose cards.

Do not literalize generated probe details such as fake handwritten notes or stock-looking landscape imagery. Use the existing local Shaun photos and blog images.

## Color

The strategy is **full palette, controlled**. Warm paper carries the surface, while teal is functional, clay is human/emotional, and olive supports personal/reflection sections.

- Notebook Ink `#202620`: primary text and strong rules.
- Muted Graphite `#59635c`: secondary text and metadata.
- Warm Paper `#fbf7ee`: page background.
- Soft Paper `#f0e8d9`: section bands and quiet panels.
- Fresh Surface `#fffdf8`: readable raised surfaces.
- Soft Line `#d8cdbc`: dividers and borders.
- Signal Teal `#0e7c74`: actions and active category states.
- Deep Signal Teal `#075f59`: hover and focus emphasis.
- Olive Leaf `#697b45`: personal/profile accents.
- Clay Warmth `#b85f45`: quotes, small editorial markers, and emotional emphasis.

Use OKLCH/color-mix where practical in CSS. Avoid pure black or white, gradient text, decorative orbs, and dark technical panels.

## Typography

Use the system sans stack for speed and directness. The editorial quality should come from scale, measure, rules, and image rhythm rather than a reflexive serif-magazine treatment.

- Keep display type below oversized hero scale. Shaun's name should be confident but human.
- Body line length should stay near 65-75ch on articles.
- Short labels may use caps with moderate tracking.
- Do not use monospace to imply technical credibility.

## Layout

The core pattern is an editorial index:

- Header: compact text-led navigation with clear work/blog/about/contact paths.
- Homepage: masthead, consulting proof, writing archive, personal bridge, contact close.
- Blog index: featured/latest/category hierarchy and an archive rhythm, not a generic grid.
- Article: readable masthead, date/category/audio/tags grouped cleanly, generous prose measure.
- About/contact: image-led editorial pages with clear actions.

Cards are allowed for repeated article previews and small action modules only. Do not nest cards or use identical icon-card grids for consulting proof.

## Motion

Motion should be subtle and reduced-motion safe:

- Hover lift on clickable editorial entries.
- Small image scale on hover.
- Soft entrance reveal for major sections when motion is allowed.
- No bounce, elastic, layout-property animation, or motion that blocks reading.

## Anti-Patterns

- No "Consulting + personal writing" bubble.
- No generic SaaS/agency consultant hero.
- No repeated two-column homepage sections.
- No identical card grid for services, industries, and testimonials.
- No beige newsletter minimalism where imagery and personal texture disappear.
- No dark tech-bro aesthetic.
