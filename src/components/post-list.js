import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import calculateReadingTime from "../utils/read-time";

const createCategoryPath = (category) => category.toLowerCase().replace(/\s+/g, "-");

const Arrow = () => (
  <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11.25 3.75 17.5 10l-6.25 6.25-1.06-1.06 4.44-4.44H2.5v-1.5h12.13L10.19 4.81l1.06-1.06Z" />
  </svg>
);

const PostList = ({ posts, handleLinkClick, currentPath }) => {
  return (
    <div className="blog-posts">
      {posts.map(({ node }) => {
        const { title, date, slug, category, excerpt, image } = node.frontmatter;
        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        const postUrl = `/${date}/${slug}`;

        return (
          <article key={slug} className="blog-post editorial-entry">
            {image && (
              <Link
                to={postUrl}
                state={{ from: currentPath }}
                onClick={handleLinkClick}
                className="blog-hero"
                aria-label={`Read ${title}`}
              >
                <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
              </Link>
            )}
            <div className="blog-main">
              <div className="blog-info">
                <Link to={`/category/${createCategoryPath(category)}`} className="blog-category">
                  {category}
                </Link>
                <span className="blog-date" data-nosnippet>
                  {formattedDate}
                </span>
              </div>
              <h2>
                <Link to={postUrl} state={{ from: currentPath }} onClick={handleLinkClick}>
                  {title}
                </Link>
              </h2>
              <p>
                {excerpt} <span>{calculateReadingTime(node.rawMarkdownBody)}</span>
              </p>
              <Link to={postUrl} onClick={handleLinkClick} className="text-link">
                Read more <Arrow />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PostList;
