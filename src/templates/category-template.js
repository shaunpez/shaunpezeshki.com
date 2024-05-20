import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/post-list";
import LoadMore from "../components/load-more";
import CategoryButtons from "../components/category-buttons";
import SeoSchema from "../components/seo-list-schema";

const CategoryTemplate = ({ data, pageContext }) => {
  const { category, currentPage, numPages } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const categories = ["All", ...data.categories.group.map(group => group.fieldValue)];
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
      <Seo title={`Posts in ${category}`} />
      <SeoSchema posts={posts} siteUrl={siteUrl} category={category} />
      <Layout>
        <div className="category-page">
          <div className="container">
            <h1>Posts on {category}</h1>
            <CategoryButtons categories={categories} />
            <PostList posts={posts} currentPath={currentPath} />
            <LoadMore currentPage={currentPage} numberOfPages={numPages} basePath={`/category/${category}`} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {category: {eq: $category}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            slug
            excerpt
            category
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
    categories: allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default CategoryTemplate;
