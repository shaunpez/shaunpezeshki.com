// src/components/Layout.js
import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import BackToTopButton from "./back-to-top"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Function to handle the navigation event
    const handleNavigation = () => {
      // Scroll to the top only if it's not the initial page load
      if (!isInitialLoad) {
        window.scrollTo(0, 0);
      }
      setIsInitialLoad(false);
    };

    // Listen to the popstate event which is fired when the active history entry changes.
    window.addEventListener('popstate', handleNavigation);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('popstate', handleNavigation);
  }, [isInitialLoad]);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default Layout