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
        path: `${__dirname}/src/blog/images/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    // Add any other plugins you need here
  ],
}
