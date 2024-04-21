import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from '../components/pagination'; 
import headerImage from '../images/shaun-hero-v3.jpg';
import { GatsbyImage } from 'gatsby-plugin-image';


const BlogListPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const { siteUrl } = data.site.siteMetadata;

  const handleLinkClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem('currentPage', currentPage);
    }
  };
  

  // Constructing the list of blog posts for structured data
  const itemListElement = posts.map(({ node }, index) => {
    const { date, slug } = node.frontmatter;
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2); // Ensure month is 2 digits
    const day = ('0' + dateObj.getDate()).slice(-2); // Ensure day is 2 digits

    return {
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/${year}/${month}/${day}/${slug}`
    };
  });

  // Structured data for the blog list
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElement
  };
  
  return (
    <>
    <Seo
      title={`Chronicles of a Millennial Techie - Page ${currentPage}`}
      description="A journey of a millennial navigating technology, personal growth, and diverse experiences in today's dynamic world."
      meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology, Millennial Techie' }]}
      image={headerImage}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}></script>
    <Layout>
      <section className="homepage plant plant-bottom">
        <div className="container">
          <div className="content pages">
            <h1>Chronicles of a Millennial Techie</h1>
            <h2>Page {currentPage}</h2>
          </div>          
          <Pagination currentPage={currentPage} numberOfPages={numPages} />

          <div className="blog-posts">
            {posts.map(({ node }) => {
              const { title, date, slug, category, excerpt, image } = node.frontmatter
              const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              const postUrl = `/${date}/${slug}`; // Constructing the complete URL
              
              return (
                <article key={slug} className="blog-post">     
          
                  <div className="blog-col">
                    {image && (
                      <div className="blog-hero">
                        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
                      </div>
                    )}
                    <div className="blog-info">
                      <span className="blog-category">
                        {category}
                      </span>
                      <span className="blog-date">{formattedDate}</span> 
                    </div>
                    <div className={image ? "blog-main" : ""}>
                      <h2><Link to={postUrl} onClick={handleLinkClick}>{title}</Link></h2>
                      <p>{excerpt}</p>
                      <Link to={postUrl} onClick={handleLinkClick} className="blog-link">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
            
          </div>
          <Pagination currentPage={currentPage} numberOfPages={numPages} />

        </div>
      </section>
    </Layout>
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            slug
            category
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
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

export default BlogListPage
