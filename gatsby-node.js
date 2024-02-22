const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`);
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              date(formatString: "YYYY/MM/DD") 
            }
          }
        }
      }
    }
  `);

  // Check if data is defined before accessing it
  if (result.errors) {
    throw result.errors;
  }

  // Create blog post pages if there is data available
  if (result.data && result.data.allMarkdownRemark && result.data.allMarkdownRemark.edges) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, date } = node.frontmatter;
      const path = `/${date}/${slug}`; // Construct the complete path including the date
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  }
};
