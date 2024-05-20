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
        title={`Chronicles of a Millennial Techie - Page ${currentPage}`}
        description="Discover a millennial techie's personal insights on growth, learning, LGBTQ+ and minority issues, mental health, and navigating life's modern complexities."
        image={headerImage}
        noindex={true} 
      />
      <SeoSchema posts={posts} siteUrl={siteUrl} />
      <Layout>
        <section className="homepage plant plant-bottom">
          <div className="container">
            <div className="content pages">
              <h1>Chronicles of a Millennial Techie</h1>
              <h2>Page {currentPage}</h2>
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
