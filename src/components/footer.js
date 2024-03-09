// src/components/Footer.js
import React from "react"
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li><a href="https://twitter.com/shaunpez" rel="noreferrer" target="_blank" className="hover:underline">Twitter</a></li>
          <li><a href="https://linkedin.com/in/shaunpez" rel="noreferrer" target="_blank" className="hover:underline">LinkedIn</a></li>
          <li><a href="https://instagram.com/shaunpez" rel="noreferrer" target="_blank" className="hover:underline">Instagram</a></li>
          <li><a href="/rss.xml" rel="noreferrer" target="_blank" className="hover:underline">RSS</a></li>
          <li><Link to="/privacy-policy" activeClassName="underline">Privacy</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer