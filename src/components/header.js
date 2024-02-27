import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle, pageTitle }) => (
  <header>
    <h1>
      <Link to="/" className="hover:underline">
        {siteTitle}
      </Link>
    </h1>
    <nav className="menu">
      <ul>
        <li><Link to="/about" activeClassName="underline">About Shaun</Link></li>
        <li><Link to="/chat-with-shaun" activeClassName="underline">Chat With Shaun</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
