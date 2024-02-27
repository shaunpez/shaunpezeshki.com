import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
  // `data` prop will be injected by the GraphQL layer based on the query below
  const { markdownRemark: post } = data // Destructuring the post data

  return (
    <>
        <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.excerpt}
        />
        <Layout>
            <div key={post.frontmatter.slug}>
                <section class="p-4">
                    <div class="container mx-auto py-8 px-4 sm:px-0">
                    <div className="flex justify-end">
                        <button onClick={() => window.history.back()} className="text-black py-2 px-4 hover:underline">
                            Back to Posts
                        </button>
                    </div>
                    <article class="">
                        <div class="mb-5 text-gray-500">
                        <span class="text-sm">{post.frontmatter.date}</span>
                        </div>
                        <h1 class="mb-6 text-4xl tracking-tight font-extrabold text-gray-900">{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />                
                    </article>
                    </div>
                </section>    
            </div>
        </Layout>
    </>
  )
}

export default BlogPostTemplate

// Define the page query
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        excerpt
      }
    }
  }
`
