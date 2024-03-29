// src/components/Layout.js
import React from "react";
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