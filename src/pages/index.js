import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import { StaticImage } from 'gatsby-plugin-image';
import headerImage from '../images/shaun-hero-v3.jpg';
import { GatsbyImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  let posts = data.limitedPosts.edges;
  const total = data.totalCount.totalCount;

  const handleLinkClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem('currentPage', "1");
    }
  };
  

  // Get today's date in the same format as your post dates
  const today = new Date();
  const todayFormatted = today.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/-/g, '/');
  
  // Filter posts to include only those with a date of today or earlier
  posts = posts.filter(({ node }) => {
    const postDate = new Date(node.frontmatter.date);
    const postDateFormatted = postDate.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/-/g, '/');
  
    return postDateFormatted <= todayFormatted;
  });

  // Filter posts to include only those with a date of today or later
  const { siteUrl } = data.site.siteMetadata;

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
      title="Chronicles of a Millennial Techie"
      description="A journey of a millennial navigating technology, personal growth, and diverse experiences in today's dynamic world."
      meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology, Millennial Techie' }]}
      image={headerImage}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}></script>
    <Layout>
      
      <section className="homepage plant">

        
          <div className="content ">
            <div className="container">
              {/* <StaticImage
                    src="../images/shaun-bookstore3.jpg" // Adjust the path as necessary
                    alt="Chronicles of a Millennial Techie"
                    placeholder="blurred" // Optional: This prop defines the loading strategy
                    className="main-hero"   
              /> */}
              <div className="prose prose-xl">
                <h1>Chronicles of a Millennial Techie</h1>
                <p>I created this blog out of necessity—a lifeline to navigate through the fog of my anxiety. But as this space grew, so did its purpose. Now, it's not just about unburdening my mind; it's about offering you a mirror to perhaps see your own reflections differently. This journey is as much yours as it is mine. Together, let's uncover insights that challenge and reshape our perspectives, making each discovery a step towards a more profound understanding of ourselves and the world around us.</p>
              </div>
            </div>
          </div>
          <div class="first-post">
            <div className="container">
            {/* Render the first post separately */}
            {posts.length > 0 && (
              <div>
                {(() => {
                  const { node } = posts[0]; // Get the first post
                  const { title, date, slug, category, excerpt, image } = node.frontmatter
                  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                  const postUrl = `/${date}/${slug}`; // Constructing the complete URL

                  return (
                    <article key={slug} className="featured-blog-post">
                      <div className="blog-col">
                      {image && (
                        <div className="blog-hero" 
                            style={{ 
                              backgroundImage: `url(${image.childImageSharp.gatsbyImageData.images.fallback.src})`,
                            }}
                          >
                          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
                        </div>
                      )}
                      <div className={image ? "blog-main" : ""}>
                        <div className="blog-info">
                          <span className="blog-category">
                            {category}
                          </span>
                          <span className="blog-date">{formattedDate}</span> 
                        </div>
                        <h2><Link to={postUrl} onClick={handleLinkClick}>{title}</Link></h2>
                        <p>{excerpt}</p>
                        <Link to={postUrl} onClick={handleLinkClick} className="blog-link">
                          Read more
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                      </div>
                    </div>
                    </article>
                  );
                })()}
              </div>
            )}  
            </div>
          </div>
          <div className="container home">
            {total > 8 && (
                <div className="pagination">
                  <Link to="/page/2" rel="prev" className="prev">
                    Previous
                  </Link>
                  <span className="next text-gray-300">
                    Next
                  </span>
                </div>
              )}
            <div className="blog-posts">
              {posts.slice(1).map(({ node }) => {
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
                          <h2><Link to={postUrl}>{title}</Link></h2>
                          <p>{excerpt}</p>
                          <Link to={postUrl} className="blog-link">
                            Read more
                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
              })}         
            </div>
            {total > 8 && (
                <div className="pagination">
                  <Link to="/page/2" rel="prev" className="prev">
                    Previous
                  </Link>
                  <span className="next text-gray-300">
                    Next
                  </span>
                </div>
              )}
          </div>
      </section>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    totalCount: allMarkdownRemark {
      totalCount
    }
    limitedPosts: allMarkdownRemark(limit: 9, sort: {frontmatter: {date: DESC}}) {
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

export default IndexPage
