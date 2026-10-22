import { POSTS_PER_PAGE } from "./posts"

/** /blog shows the featured post plus 9 more; /page/2 onward pick up after that. */
export const BLOG_FIRST_PAGE = 10

export const blogPageCount = (total: number) =>
  1 + Math.max(0, Math.ceil((total - BLOG_FIRST_PAGE) / POSTS_PER_PAGE))

export const blogPageSlice = <T>(posts: T[], page: number) => {
  const start = BLOG_FIRST_PAGE + (page - 2) * POSTS_PER_PAGE
  return posts.slice(start, start + POSTS_PER_PAGE)
}
