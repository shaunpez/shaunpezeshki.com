import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Pagination from '../components/pagination'; 
import headerImage from '../images/shaun-hero-v3.jpg';
import PostList from "../components/post-list";
import SeoSchema from "../components/seo-list-schema";

const BlogListPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const { siteUrl } = data.site.siteMetadata;
  
  // State to hold the current path
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <Seo
        title={`Threads of Perspective - Page ${currentPage}`}
        description="Insights on personal growth, tech, career development, mental health, LGBTQ+ and minority issues in modern life."
        image={headerImage}
        noindex={true} 
      />
      <SeoSchema posts={posts} siteUrl={siteUrl} />
      <Layout>
        <section className="archive-page archive-page--paginated">
          <div className="site-shell">
            <div className="archive-hero archive-hero--compact">
              <h1>Threads of Perspective</h1>
              <p>Page {currentPage}</p>
            </div>
            <Pagination currentPage={currentPage} numberOfPages={numPages} />
            <PostList posts={posts} currentPath={currentPath} />
            <Pagination currentPage={currentPage} numberOfPages={numPages} />
          </div>
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {draft: {ne: true}}}
      limit: $limit
      skip: $skip
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

export default BlogListPage;
