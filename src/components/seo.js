import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import faviconICO from '../images/favicon.ico'; 
import faviconPNG from '../images/favicon.png'; 

function Seo({ description, lang = "en", meta = [], title, image, noindex = false }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const imageUrl = image ? `${site.siteMetadata.siteUrl}${image}` : null;

  // Create the canonical URL without query parameters
  const canonicalUrl = typeof window !== 'undefined'
    ? `${site.siteMetadata.siteUrl}${window.location.pathname}`
    : `${site.siteMetadata.siteUrl}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        { rel: 'icon', type: 'image/x-icon', href: faviconICO }, // For ICO favicon
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconPNG }, // For PNG favicon (32x32)
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconPNG }, // For PNG favicon (16x16)
        { rel: 'canonical', href: canonicalUrl }, // Canonical link
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
        noindex && {
          name: `robots`,
          content: `noindex, follow`,
        },
      ].concat(meta).filter(Boolean)}
    />
  );
}

export default Seo;
