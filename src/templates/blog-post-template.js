import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { getSrc } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  // `data` prop will be injected by the GraphQL layer based on the query below
  const { markdownRemark: post } = data // Destructuring the post data
  const { siteUrl } = data.site.siteMetadata;
  const imageUrl = post.frontmatter.image ? `${siteUrl}${getSrc(post.frontmatter.image.childImageSharp)}` : null; // Constructing absolute URL for the image
  const { title, date, slug, category } = post.frontmatter;
  const formattedDate = new Date(date).toISOString();

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Ensure month is 2 digits
  const day = ('0' + dateObj.getDate()).slice(-2); // Ensure day is 2 digits
  const postUrl = `${siteUrl}/${year}/${month}/${day}/${slug}`;

  // Structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "datePublished": formattedDate,
    "articleBody": post.html,
    "author": {
      "@type": "Person",
      "name": "Shaun Pezeshki"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chronicles of a Millennial Techie"
    },
    "image": imageUrl, 
    "url": postUrl,
    "genre": category 
  };

  const structuredDataScript = JSON.stringify(structuredData);

  return (
    <>
        <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.excerpt}
            image={imageUrl}
        />
        <Layout>
            <div key={post.frontmatter.slug}>
                <section className="blog">
                    <Link to="/" className="back-button">
                        Back to Posts
                    </Link>
                    <article>
                        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataScript }} />
                        <div className="date">
                          {post.frontmatter.date}
                        </div>
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />                
                    </article>
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
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 1200, layout: FIXED)
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    } 
  }
`
