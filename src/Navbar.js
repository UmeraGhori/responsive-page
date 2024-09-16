import React from 'react';
import About from './About.js';
import Services from './Services.js';
import Industries from './Industries.js';
import Portfolio from './Portfolio.js';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg" 
          alt="Appinventiv Logo" 
        />
      </div>
      <ul className="nav-links">
        {/* About Modal */}
        <li> <About/> </li>

        {/* Services Modal */}
        <li> <Services/> </li>

        {/* Industries Modal */}
        <li> <Industries/> </li>

        {/* Portfolio Modal */}
        <li> <Portfolio/> </li>

        <li><a href="#contact" className='button'>Contact Us</a></li>
      </ul>
      <div className="menu-icon">&#9776;</div>
    </nav>
  );
}

export default Navbar;