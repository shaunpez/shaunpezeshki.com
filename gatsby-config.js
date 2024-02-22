module.exports = {
  siteMetadata: {
    title: `Shaun Pezeshki`,
    description: `Shaun's Journey`,
    author: `Shaun Pezeshki`,
    siteUrl: `https://shaunpezeshki.com`,
  },
  // pathPrefix: "/shaunpezeshki.com",
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    // Add any other plugins you need here
  ],
}
