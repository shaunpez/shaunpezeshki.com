import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import calculateReadingTime from '../util/read-time';

const createCategoryPath = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

const FeaturedPost = ({ post, handleLinkClick }) => {
  if (!post) return null;

  const { title, date, slug, category, excerpt, image } = post.frontmatter;
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const postUrl = `/${date}/${slug}`;

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
              <Link to={`/category/${createCategoryPath(category)}`} className="blog-category">{category}</Link>
              <span className="blog-date">{formattedDate}</span>
            </div>
            <h2><Link to={postUrl} onClick={handleLinkClick}>{title}</Link></h2>
            <p>{excerpt} <span>[{calculateReadingTime(post.rawMarkdownBody)}]</span></p>
            <Link to={postUrl} onClick={handleLinkClick} className="blog-link">
              Read more
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </article>
  );
};

export default FeaturedPost;
