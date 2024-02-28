// src/components/Footer.js
import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="space-x-4">
        <a href="https://twitter.com/shaunpez" rel="noreferrer" target="_blank" className="hover:underline">Twitter</a>
        <a href="https://linkedin.com/in/shaunpez" rel="noreferrer" target="_blank" className="hover:underline"> LinkedIn</a>
        <a href="https://instagram.com/shaunpez" rel="noreferrer" target="_blank" className="hover:underline">Instagram</a>
        <a href="/rss.xml" rel="noreferrer" target="_blank" className="hover:underline">RSS</a>
        <a href="/privacy-policy" className="hover:underline">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer