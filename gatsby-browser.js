/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/global.css";

export const onClientEntry = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
};

const getScrollStorageKey = (location) => {
  const key = location.key;
  return `@@scroll|${location.pathname}${key ? `|${key}` : ""}`;
};

const preservePreviousScrollPosition = (location) => {
  if (!location || typeof window === "undefined") {
    return;
  }

  const scrollY = window.scrollY;
  const storageKey = getScrollStorageKey(location);

  window.setTimeout(() => {
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify(scrollY));
    } catch (error) {
      // Gatsby falls back gracefully when sessionStorage is unavailable.
    }
  }, 50);
};

export const onPreRouteUpdate = ({ prevLocation }) => {
  preservePreviousScrollPosition(prevLocation);
};

export function shouldUpdateScroll({
  routerProps: { location },
}) {
  if (location.hash) {
    return decodeURI(location.hash.slice(1));
  }

  if (location.action === "POP") {
    return true;
  }

  return [0, 0];
}
