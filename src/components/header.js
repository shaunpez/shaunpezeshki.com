import React from "react";
import { Link } from 'gatsby';

const Header = ({ siteTitle, pageTitle }) => {


  return (
    <>
      <header>
      <div className="container">
        <h1>
          <Link to="/">SP</Link>
        </h1>
        <nav className="menu">
          <ul>
            <li><Link to="/about" activeClassName="underline">About Shaun</Link></li>
            <li><Link to="/chat-with-shaun" activeClassName="underline">Chat With Shaun</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
