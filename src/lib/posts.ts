import { getCollection, type CollectionEntry } from "astro:content"

export type Post = CollectionEntry<"blog">

export const SITE = {
  title: "Shaun Pezeshki",
  description:
    "Stories about technology, identity, community and work from Shaun Pezeshki.",
  url: "https://shaunpezeshki.com",
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

export const postUrl = ({ data }: Post) =>
  `/${data.date.replaceAll("-", "/")}/${data.slug}`

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
