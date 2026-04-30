import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <Link to="/" className="footer-name">
            Shaun Pezeshki
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          <a href="https://linkedin.com/in/shaunpez" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://twitter.com/shaunpez" rel="noreferrer" target="_blank">
            X
          </a>
          <a href="https://instagram.com/shaunpez" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href="/rss.xml" rel="noreferrer" target="_blank">
            RSS
          </a>
          <Link to="/privacy-policy" activeClassName="active">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
