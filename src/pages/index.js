import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import headerImage from '../images/shaun-hero-v3.jpg';
import PostList from "../components/post-list";
import CategoryButtons from "../components/category-buttons";
import FeaturedPost from "../components/featured-post";
import SeoSchema from "../components/seo-list-schema";

const IndexPage = ({ data }) => {
  const total = data.totalCount.totalCount;
  const today = new Date();
  const todayFormatted = today.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/-/g, '/');


  // Filter posts to only include those published up to today
  const allPosts = data.allPosts.edges.filter(({ node }) => {
    const postDate = new Date(node.frontmatter.date);
    const postDateFormatted = postDate.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/-/g, '/');
    return postDateFormatted <= todayFormatted;
  });
 
  // Extract the first post
  const firstPost = allPosts.length > 0 ? allPosts[0].node : null;

  // Extract the next 8 posts (ignoring the first one)
  const subsequentPosts = allPosts.slice(1, 9);

  const { siteUrl } = data.site.siteMetadata;

  // List of categories
  const categories = ["All", ...data.categories.group.map(group => group.fieldValue)];

  return (
    <>
      <Seo
        title="The Inclusive Techie"
        description="Insights on personal growth, tech, career development, mental health, LGBTQ+ and minority issues in modern life."
        meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology, Entrepreneur, Inclusive Techie' }]}
        image={headerImage}
      />
      <SeoSchema posts={subsequentPosts} siteUrl={siteUrl} />
      <Layout>
        <section className="homepage plant">
          <div className="category-select">
            <div className="container home">
              <div className="main-title prose prose-xl">
                <h1>The Inclusive Techie</h1>
              </div>
              <CategoryButtons categories={categories} />
            </div>
          </div>

          <div className="first-post">
            <div className="container home">
            {firstPost && <FeaturedPost post={firstPost} />}
            </div>
          </div>
          <div className="container home">
            <PostList posts={subsequentPosts} />
            {total > 9 && (
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
          <div className="content">
            <div className="container">
              <div className="prose prose-xl">
                <h3>The Story Behind the Blog</h3>
                <p>I started this blog as a space to share my experiences as a millennial navigating life. What began as a personal outlet has grown into a community for growth, learning, and connection. This journey is as much yours as it is mine, offering you a mirror to see your own reflections differently. Together, let's uncover insights that challenge and reshape our perspectives.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    categories: allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
    totalCount: allMarkdownRemark {
      totalCount
    }
    allPosts: allMarkdownRemark(limit: 9, sort: {frontmatter: {date: DESC}}) {
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
          rawMarkdownBody
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default IndexPage;
