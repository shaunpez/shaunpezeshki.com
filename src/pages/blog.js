import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import headerImage from "../images/shaun-hero-v3.jpg";
import PostList from "../components/post-list";
import CategoryButtons from "../components/category-buttons";
import FeaturedPost from "../components/featured-post";
import SeoSchema from "../components/seo-list-schema";

const BlogPage = ({ data }) => {
  const total = data.totalCount.totalCount;
  const allPosts = data.allPosts.edges;
  const firstPost = allPosts.length > 0 ? allPosts[0].node : null;
  const subsequentPosts = allPosts.slice(1, 10);
  const { siteUrl } = data.site.siteMetadata;
  const categories = ["All", ...data.categories.group.map((group) => group.fieldValue)];

  return (
    <>
      <Seo
        title="Threads of Perspective"
        description="Stories on personal growth, technology, career development, mental health, LGBTQ+ and minority issues in modern life."
        meta={[
          {
            name: "keywords",
            content:
              "Shaun Pezeshki, Technical Strategist, Marketing, Technology, Entrepreneur, Inclusive Techie",
          },
        ]}
        image={headerImage}
      />
      <SeoSchema posts={subsequentPosts} siteUrl={siteUrl} />
      <Layout>
        <section className="archive-page">
          <div className="site-shell archive-hero">
            <div>
              <p className="eyebrow">Stories and notes</p>
              <h1>Threads of Perspective</h1>
            </div>
            <p>
              Real talk on identity, tech, career, community, and what it means to grow in a world
              that keeps shifting.
            </p>
          </div>

          <div className="site-shell archive-controls">
            <CategoryButtons categories={categories} />
          </div>

          <div className="site-shell archive-feature">
            {firstPost && <FeaturedPost post={firstPost} />}
          </div>

          <div className="site-shell archive-layout">
            <aside className="archive-note">
              <p className="list-label">Archive</p>
              <h2>Latest entries</h2>
              <p>
                Explore {total} published stories on work, identity, community, and finding your
                way through change.
              </p>
            </aside>
            <PostList posts={subsequentPosts} />
          </div>

          {total > 10 && (
            <div className="site-shell pagination">
              <Link to="/page/2" rel="next" className="next">
                Older Posts
              </Link>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    categories: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
      }
    }
    totalCount: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      totalCount
    }
    allPosts: allMarkdownRemark(
      limit: 11
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
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

export default BlogPage;
