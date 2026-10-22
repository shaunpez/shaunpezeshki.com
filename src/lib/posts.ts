import { getCollection, type CollectionEntry } from "astro:content"
import portrait from "../images/shaun-hero-in-light.jpg"

export type Post = CollectionEntry<"blog">

export const SITE = {
  title: "Shaun Pezeshki",
  description:
    "Shaun Pezeshki is a technical strategist in Columbus, Ohio with more than 16 years across marketing, development and automation.",
  url: "https://shaunpezeshki.com",
}

/** Who the site is about: Person schema on Home and About, and the author of every story. */
export const PERSON = {
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: "Shaun Pezeshki",
  url: `${SITE.url}/`,
  image: new URL(portrait.src, SITE.url).href,
  jobTitle: "Technical Strategist",
  description:
    "Technical strategist with more than 16 years across marketing, development and automation, building websites, systems and workflows for teams and small businesses.",
  worksFor: { "@type": "Organization", name: "Up High Studio", url: "https://uphighstudio.com" },
  address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
  knowsAbout: ["Technical strategy", "Web development", "Marketing automation", "Systems integration", "Workflow design"],
  sameAs: ["https://linkedin.com/in/shaunpez", "https://instagram.com/shaunpez", "https://twitter.com/shaunpez"],
}

export const POSTS_PER_PAGE = 8

const today = () => new Date().toISOString().slice(0, 10)

/** Published posts, newest first. Drafts and future-dated posts are excluded. */
export async function getPublishedPosts(): Promise<Post[]> {
  const now = today()
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.date <= now
  )
  return posts.sort((a, b) => b.data.date.localeCompare(a.data.date))
}

/** Same rule as the old gatsby-node.js, so "LGBTQ+" stays /category/lgbtq+. */
export const categorySlug = (category: string) =>
  category.toLowerCase().replace(/\s+/g, "-")

// Page URLs end in a slash, matching how Cloudflare serves them and the canonical tags.
export const postUrl = ({ data }: Post) =>
  `/${data.date.replaceAll("-", "/")}/${data.slug}/`

// Cloudflare serves "lgbtq+" at its encoded path (lgbtq%2B) and redirects the raw "+", so link to the encoded form.
export const categoryUrl = (category: string) => `/category/${encodeURIComponent(categorySlug(category))}/`

export const readingTime = (text = "") =>
  `${Math.ceil(text.split(/\s+/).length / 200)} min read`

export const formatDate = (date: string, month: "short" | "long" = "short") =>
  new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month,
    day: "numeric",
    year: "numeric",
  })

export const getCategories = (posts: Post[]) =>
  [...new Set(posts.map(post => post.data.category))].sort()

/** [year, posts] pairs, newest year first; posts keep their order. */
export const groupByYear = (posts: Post[]) =>
  Object.entries(Object.groupBy(posts, post => post.data.date.slice(0, 4)))
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, yearPosts]) => [year, yearPosts ?? []] as const)
