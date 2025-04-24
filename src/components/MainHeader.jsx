import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <nav className="nav-bar">
        <Link to="/" className="logo">MY PORTFOLIO <span className="dot">.</span></Link>
        <ul>
          <li className="home"><Link className="nav-bar-item" to="/">Home</Link></li>
          <li><Link className="nav-bar-item" to="/about">About Me</Link></li>
          <li><Link className="nav-bar-item" to="/skills">Skills</Link></li>
          <li><Link className="nav-bar-item" to="/projects">Project</Link></li>
          <li><Link className="nav-bar-item" to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;