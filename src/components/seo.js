/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import faviconICO from '../images/favicon.ico'; 
import faviconPNG from '../images/favicon.png'; 

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
          { rel: 'icon', type: 'image/x-icon', href: faviconICO }, // For ICO favicon
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconPNG }, // For PNG favicon (32x32)
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconPNG }, // For PNG favicon (16x16)
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
