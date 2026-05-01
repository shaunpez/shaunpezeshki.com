import React, { useState } from "react";
import { Link } from "gatsby";
import coffeeIcon from "../images/coffee-icon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = "primary-navigation";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="brand-mark" to="/" aria-label="Shaun Pezeshki home">
          Shaun Pezeshki
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id={menuId}
          className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <Link to="/blog" activeClassName="active" onClick={closeMenu}>
            Stories
          </Link>
          <Link to="/about" activeClassName="active" onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/chat-with-shaun"
            activeClassName="active"
            onClick={closeMenu}
          >
            Chat
          </Link>
          <a
            className="coffee-link"
            href="https://buymeacoffee.com/shaunpez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Shaun a coffee"
            onClick={closeMenu}
          >
            <img src={coffeeIcon} alt="" className="icon" />
            <span className="coffee-link__label">Buy me coffee</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
