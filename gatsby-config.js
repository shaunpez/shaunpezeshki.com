require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Shaun Pezeshki`,
    description: `Insights on personal growth, tech, career development, mental health, LGBTQ+ and minority issues in modern life.`,
    author: `Shaun Pezeshki`,
    siteUrl: `https://shaunpezeshki.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/blog/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JF4CNN7RZ6", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`], 
        gatsbyRemarkPlugins: [
          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `shaunpezeshki`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600, // Adjust the maxWidth as necessary
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                }
            }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                const year = node.frontmatter.date.split("-")[0]; // Extracting the year from the date
                const month = node.frontmatter.date.split("-")[1]; // Extracting the month from the date
                const day = node.frontmatter.date.split("-")[2]; // Extracting the day from the date
            
                const postURL = `${site.siteMetadata.siteUrl}/${year}/${month}/${day}/${node.frontmatter.slug}`;
            
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.excerpt,
                  date: node.frontmatter.date,
                  url: postURL,
                  guid: postURL,
                  // custom_elements: [{ "content:encoded": node.html }],
                }
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {frontmatter: {date: DESC}}
                  filter: {frontmatter: {draft: {ne: true}}}
                ) {
                  nodes {
                    html
                    frontmatter {
                      title
                      date
                      slug
                      excerpt
                      image {
                        childImageSharp {
                          gatsbyImageData(width: 1200, layout: FIXED)
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Chronicles of a Millennial Techie",
            // other options here...
          },
        ],
      },
    },
    // "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
    //     accessToken: process.env.STRAPI_TOKEN,
    //     collectionTypes: [
    //       {
    //         singularName: "article",
    //       },
    //       {
    //         singularName: "author",
    //       },
    //       {
    //         singularName: "category",
    //       },
    //     ]
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    // Add any other plugins you need here
  ],
}