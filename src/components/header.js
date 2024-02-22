import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle, pageTitle }) => (
  <header className="container mx-auto p-4 flex flex-col md:flex-row justify-between border-b">
    <div className="text-logo font-bold text-4xl mb-4 md:mb-0 md:text-left">
      <Link to="/" className="hover:underline">
        {siteTitle}
      </Link>
    </div>
    <nav className="menu w-full md:w-auto md:text-right pt-2">
      <ul className="flex flex-col md:flex-row md:space-x-10 text-xl">
        <li><Link to="/about" className="hover:underline">About Shaun</Link></li>
        <li><Link to="/chat-with-shaun" className="hover:underline">Chat With Shaun</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
