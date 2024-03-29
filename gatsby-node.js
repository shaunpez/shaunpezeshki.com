const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`);
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`); // Path to your blog list template

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
        totalCount
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
      const currentDate = new Date();
      const postDate = new Date(date);

       // Check if the post date is not in the future
      if (postDate <= currentDate) {

        const path = `/${date}/${slug}`; // Construct the complete path including the date
        createPage({
          path,
          component: blogPostTemplate,
          context: {
            slug: node.frontmatter.slug,
          },
        });
      }
    });
  }

  // Create paginated blog list pages
  const postsPerPage = 8; // Define how many posts per page you want
  const totalCount = result.data.allMarkdownRemark.totalCount;
  const numPages = Math.ceil(totalCount / postsPerPage);
  

  if (totalCount >= postsPerPage) {
    // If the condition is met, proceed to create paginated blog list pages
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/page/${i + 1}`, // Set the first page to root, and subsequent pages to /page/2, /page/3, etc.
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }

  // Define an array of paths to redirect
  const pathsToRedirect = ['/feed/', '/feed']; // Add more paths as needed

  // Create redirects for each path
  pathsToRedirect.forEach(path => {
    createRedirect({
      fromPath: path,
      toPath: '/',
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
