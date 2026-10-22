import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const blog = defineCollection({
  // post-49.md-draft and friends don't match, so unfinished files stay out.
  loader: glob({ pattern: "post-*.md", base: "./src/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Kept as the raw "YYYY-MM-DD" string so URLs never shift with timezones.
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      slug: z.string(),
      category: z.string(),
      excerpt: z.string(),
      // Frontmatter allows image: "" for posts without one.
      image: z
        .union([image(), z.literal("")])
        .optional()
        .transform(value => value || undefined),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
})

export const collections = { blog }
