import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
    <Seo
      title="Code & Quirks: Chronicles of a Millennial Developer"
      description="Dive into 'Code & Quirks': A millennial dev's journey through tech, life, and whimsical musings."
      meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology' }]}
    />

    <Layout>
      <section className="homepage">
        <div className="container">
          <div className="content">
            <h1>Code & Quirks: Ramblings of a Weary Millennial Dev</h1>
            <p>Welcome to 'Code & Quirks,' a digital refuge where the structured world of coding meets the chaotic musings of a millennial developer's mind. Here, I, your weary yet whimsical host, embark on a journey through the ebbs and flows of tech, life, and the absurdities in between.</p>
          </div>
          <div className="blog-posts grid gap-8">
            {posts.map(({ node }) => {
              const { title, date, slug, category, excerpt } = node.frontmatter
              const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              const postUrl = `/${date}/${slug}`; // Constructing the complete URL
              return (
                <article key={slug} className="blog-post">
                  <div className="blog-info">
                    <span className="blog-category">
                      {category}
                    </span>
                    <span className="text-sm">{formattedDate}</span> {/* Display formatted date */}
                  </div>
                  <h2>
                    <Link to={postUrl}>{title}</Link>
                  </h2>
                  <p>{excerpt}</p>
                  <Link to={postUrl} className="blog-link">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            slug
            category
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
