import React from "react";
import { Link } from 'gatsby';
import coffeeIcon from '../images/coffee-icon.svg';


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
            <li className="coffee-button">
              <a href="https://buymeacoffee.com/shaunpez" target="_blank" rel="noopener noreferrer">
                  <img src={coffeeIcon} alt="Buy Me Coffee" className="icon"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
    </>
  );
};

export default Header;
