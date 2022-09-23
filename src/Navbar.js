import React from "react";

export default function Navbar() {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          IET
        </a>
        <div
          className="navigation-menu">
          <ul>
            <li> <a href="/home">HOME</a>             </li>
            <li> <a href="/about">ABOUT US</a> </li>
            <li>
              <a href="/contact">ACADEMICS</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }