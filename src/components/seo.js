/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../images/favicon.png'; // Adjust the path as necessary

function Seo({ description, lang = "en", meta = [], title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const imageUrl = image ? `${image}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        { rel: 'icon', type: 'image/x-icon', href: favicon },
      ]}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // Add new meta tags for the image
        imageUrl && {
          property: `og:image`,
          content: imageUrl,
        },
        imageUrl && {
          name: `twitter:image`,
          content: imageUrl,
        },
      ].concat(meta).filter(Boolean)}
    />
  );
}

export default Seo
