/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/global.css";

// Retain your existing onRouteUpdate function
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    window.scrollTo(0, 0);
  }
};
