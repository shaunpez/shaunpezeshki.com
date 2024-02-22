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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Code & Quirks: Ramblings of a Weary Millennial Dev</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Welcome to 'Code & Quirks,' a digital refuge where the structured world of coding meets the chaotic musings of a millennial developer's mind. Here, I, your weary yet whimsical host, embark on a journey through the ebbs and flows of tech, life, and the absurdities in between.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map(({ node }) => {
              const { title, date, slug, category, excerpt } = node.frontmatter
              const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              const postUrl = `/${date}/${slug}`; // Constructing the complete URL
              return (
                <article key={slug} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      {category}
                    </span>
                    <span className="text-sm">{formattedDate}</span> {/* Display formatted date */}
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                    <Link to={postUrl}>{title}</Link>
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link to={postUrl} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                  </div>
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
