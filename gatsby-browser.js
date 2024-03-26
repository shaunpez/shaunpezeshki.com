/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/global.css";

// This is an ES6 module export. Ensure the entire file uses ES6 imports/exports.
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null) {
      window.scrollTo(0, 0);
    }
  };
  