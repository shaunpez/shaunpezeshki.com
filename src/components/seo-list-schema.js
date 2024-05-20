import React from 'react';

const SeoSchema = ({ posts, siteUrl, category = null }) => {
  const itemListElement = posts.map(({ node }, index) => {
    const { date, slug } = node.frontmatter;
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);

    return {
      "@type": "ListItem",
      "position": index + 1,
      "url": `${siteUrl}/${year}/${month}/${day}/${slug}`
    };
  });

  const formattedCategory = category ? category.toLowerCase().replace(/\s+/g, '-') : '';
  const structuredData = category
    ? {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "name": `${category}`,
        "description": `A list of posts in the category ${category}.`,
        "url": `${siteUrl}/category/${formattedCategory}`,
        "itemListElement": itemListElement
      }
    : {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "itemListElement": itemListElement
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    ></script>
  );
};

export default SeoSchema;
