/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/global.css";

// Add the Buy Me a Coffee widget script to the head
export const onClientEntry = () => {
  const script = document.createElement("script");
  script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
  script.setAttribute("data-name", "BMC-Widget");
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-id", "shaunpez");
  script.setAttribute("data-description", "Support me on Buy me a coffee!");
  script.setAttribute("data-message", "");
  script.setAttribute("data-color", "#5F7FFF");
  script.setAttribute("data-position", "Right");
  script.setAttribute("data-x_margin", "18");
  script.setAttribute("data-y_margin", "18");
  script.async = true;

  script.onload = () => {
    console.log("Script loaded successfully.");
  };

  script.onerror = () => {
    console.error("Error loading the script.");
  };

  document.head.appendChild(script);
};

// Retain your existing onRouteUpdate function
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    window.scrollTo(0, 0);
  }
};
