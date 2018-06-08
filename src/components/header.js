import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header>
    <nav>
      <Link className="site-logo transition-link" to="/">
        <span className="logo-text">QA</span>
      </Link>

      <ul className="nav-right">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/experiences">Experience</Link>
        </li>
        <li className="list-item">
          <Link to="/education">Education</Link>
        </li>
        <li className="list-item">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="list-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="list-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
