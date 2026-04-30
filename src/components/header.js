import React from "react";
import { Link } from "gatsby";
import coffeeIcon from "../images/coffee-icon.svg";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="brand-mark" to="/" aria-label="Shaun Pezeshki home">
          Shaun Pezeshki
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link to="/blog" activeClassName="active">
            Stories
          </Link>
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/chat-with-shaun" activeClassName="active">
            Chat
          </Link>
          <a
            className="coffee-link"
            href="https://buymeacoffee.com/shaunpez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Shaun a coffee"
          >
            <img src={coffeeIcon} alt="" className="icon" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
