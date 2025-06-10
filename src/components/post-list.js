import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import calculateReadingTime from '../utils/read-time'; 

const createCategoryPath = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

const PostList = ({ posts, handleLinkClick, currentPath }) => {
  return (
    <div className="blog-posts">
      {posts.map(({ node }) => {
        const { title, date, slug, category, excerpt, image } = node.frontmatter;
        const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const postUrl = `/${date}/${slug}`;
        return (
          <article key={slug} className="blog-post">
            <div className="blog-col">
              {image && (
                <div className="blog-hero">
                  <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
                </div>
              )}
              <div className="blog-info">
                <Link to={`/category/${createCategoryPath(category)}`} className="blog-category">{category}</Link>
                <span className="blog-date" data-nosnippet>{formattedDate}</span>
              </div>
              <div className={image ? "blog-main" : ""}>
                <h2><Link to={postUrl} state={{ from: currentPath }} onClick={handleLinkClick}>{title}</Link></h2>
                <p>{excerpt} <span>[{calculateReadingTime(node.rawMarkdownBody)}]</span></p>
                <Link to={postUrl} onClick={handleLinkClick} className="blog-link">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PostList;
