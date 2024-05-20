const path = require("path");

const createCategoryPath = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post-template.js`);
  const blogListTemplate = path.resolve(`src/templates/blog-list-template.js`);
  const categoryTemplate = path.resolve(`src/templates/category-template.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              date(formatString: "YYYY/MM/DD")
              category
            }
          }
        }
        totalCount
      }
      categories: allMarkdownRemark {
        group(field: {frontmatter: {category: SELECT}}) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const categories = result.data.categories.group;
  const postsPerPage = 8;
  const totalCount = result.data.allMarkdownRemark.totalCount - 1;
  const numPages = Math.ceil(totalCount / postsPerPage);

  // Create blog posts
  posts.forEach(({ node }) => {
    const { slug, date } = node.frontmatter;
    const currentDate = new Date();
    const postDate = new Date(date);

    if (postDate <= currentDate) {
      const path = `/${date}/${slug}`;
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    }
  });

  // Create paginated blog list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage + 1,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create paginated category pages with lowercase paths and dashes for spaces
  categories.forEach(category => {
    const numCategoryPages = Math.ceil(category.totalCount / postsPerPage);
    const categoryPath = createCategoryPath(category.fieldValue);

    Array.from({ length: numCategoryPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/${categoryPath}` : `/category/${categoryPath}/${i + 1}`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numCategoryPages,
          currentPage: i + 1,
        },
      });
    });
  });

  // Redirects
  const pathsToRedirect = ['/feed/', '/feed'];

  pathsToRedirect.forEach(path => {
    createRedirect({
      fromPath: path,
      toPath: '/',
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
};
