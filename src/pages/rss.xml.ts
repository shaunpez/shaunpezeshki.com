import rss from "@astrojs/rss"
import { SITE, getPublishedPosts, postUrl } from "../lib/posts"

export async function GET() {
  const posts = await getPublishedPosts()
  return rss({
    title: "Chronicles of a Millennial Techie",
    description: SITE.description,
    site: SITE.url,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(`${post.data.date}T12:00:00Z`),
      link: postUrl(post),
    })),
  })
}
