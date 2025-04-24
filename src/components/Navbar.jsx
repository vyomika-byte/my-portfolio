import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a onClick={() => handleNavClick('home')} className="nav-link">Artist</a>
      </div>

      <ul className="navbar-center">
        <li><a onClick={() => handleNavClick('projects')} className="nav-link">Art</a></li>
        <li><a onClick={() => handleNavClick('about')} className="nav-link">About</a></li>
        <li>
          <a
            href="/Vyomika_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
