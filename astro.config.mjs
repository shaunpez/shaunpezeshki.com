import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://shaunpezeshki.com",
  // Gatsby emitted /path/index.html; keep the same output so old links resolve.
  build: { format: "directory" },
  integrations: [
    sitemap({ filter: page => !page.includes("/styleguide") }),
  ],
})
