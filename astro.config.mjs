import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://shaunpezeshki.com",
  // Gatsby emitted /path/index.html; keep the same output so old links resolve.
  build: { format: "directory" },
  integrations: [
    // Only indexable pages: no styleguide, no legacy /page/N archive, no page 2+ of a category (all noindex).
    sitemap({
      filter: page => !/\/styleguide\/|\/page\/\d+\/|\/category\/[^/]+\/\d+\/$/.test(page),
      // Match the canonical tags: "+" in a path is listed as %2B, the form Cloudflare serves.
      serialize: item => ({ ...item, url: item.url.replaceAll("+", "%2B") }),
    }),
  ],
})
