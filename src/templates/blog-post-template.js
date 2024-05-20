import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { getSrc } from "gatsby-plugin-image";
import { Disqus } from 'gatsby-plugin-disqus';

const BlogPostTemplate = ({ data, location }) => {
  const [fromPage, setFromPage] = useState("/");
  const { markdownRemark: post } = data;
  const { siteUrl } = data.site.siteMetadata;
  const imageUrl = post.frontmatter.image ? `${getSrc(post.frontmatter.image.childImageSharp)}` : null;
  const { title, date, slug, category } = post.frontmatter;
  const formattedDate = new Date(date).toISOString();

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObj.getDate()).slice(-2);
  const postUrl = `${siteUrl}/${year}/${month}/${day}/${slug}`;

  useEffect(() => {
    // Dynamically load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.from) {
      setFromPage(location.state.from);
    }
  }, [location.state]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "datePublished": formattedDate,
    "articleBody": post.html,
    "author": {
      "@type": "Person",
      "name": "Shaun Pezeshki"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chronicles of a Millennial Techie"
    },
    "image": imageUrl, 
    "url": postUrl,
    "genre": category 
  };

  const structuredDataScript = JSON.stringify(structuredData);

  const disqusConfig = {
    url: postUrl,
    identifier: slug,
    title: title,
  };

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        image={imageUrl}
      />
      <Layout>
        <div key={post.frontmatter.slug}>
          <section className="blog">
            <Link to={fromPage} className="back-button">
              Back to Posts
            </Link>
            <article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredDataScript }} />
              <div className="date">
                {post.frontmatter.date}
              </div>
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />  
              <div className="blog-separator">
                <span className="dots">&middot;</span>
                <span className="dots">&middot;</span>
                <span className="dots">&middot;</span>
              </div>
              <Disqus config={disqusConfig} />
            </article>
          </section>    
        </div>
      </Layout>
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        excerpt
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 1200, layout: FIXED)
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
`;
