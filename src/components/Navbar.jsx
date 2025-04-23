import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {isHome ? (
          <a href="#home">Artist</a>
        ) : (
          <Link to="/">Artist</Link>
        )}
      </div>

      <ul className="navbar-center">
        {isHome ? (
          <>
            <li><a href="#projects">Art</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
          </>
        ) : (
          <>
            <li><Link to="/">Art</Link></li>
            <li><Link to="/">About</Link></li>
            <li>
              <a href = "/Vyomika_Resume.pdf" target= "_blank rel ="noopener noreferrer>Resume</a>
            </li>
          </>
        )}
      </ul>

      <div className="navbar-right">
        {isHome ? (
          <a href="#contact">Contact</a>
        ) : (
          <Link to="/">Contact</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
