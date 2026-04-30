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

const FeaturedPost = ({ post, handleLinkClick }) => {
  if (!post) return null;

  const { title, date, slug, category, excerpt, image } = post.frontmatter;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const postUrl = `/${date}/${slug}`;

  return (
    <article key={slug} className="featured-blog-post">
      <div className="featured-blog-post__copy">
        <p className="list-label">Featured story</p>
        <div className="blog-info">
          <Link to={`/category/${createCategoryPath(category)}`} className="blog-category">
            {category}
          </Link>
          <span className="blog-date">{formattedDate}</span>
        </div>
        <h2>
          <Link to={postUrl} onClick={handleLinkClick}>
            {title}
          </Link>
        </h2>
        <p>
          {excerpt} <span>{calculateReadingTime(post.rawMarkdownBody)}</span>
        </p>
        <Link to={postUrl} onClick={handleLinkClick} className="text-link">
          Read more <Arrow />
        </Link>
      </div>
      {image && (
        <Link to={postUrl} onClick={handleLinkClick} className="blog-hero" aria-label={`Read ${title}`}>
          <GatsbyImage
            className="featured-image"
            image={image.childImageSharp.gatsbyImageData}
            alt=""
            imgStyle={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Link>
      )}
    </article>
  );
};

export default FeaturedPost;
