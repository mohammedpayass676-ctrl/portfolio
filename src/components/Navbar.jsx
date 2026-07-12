import React from 'react';

export default function Navbar({ isMenuOpen, setIsMenuOpen, handleNavLinkClick }) {
  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo">MP</div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
        <li><a href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
        <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')}>Services</a></li>
        <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a></li>
      </ul>
      <div 
        className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
        id="navToggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavLinkClick(e, 'contact')}>
        Let's Talk <i className="fa-solid fa-arrow-right"></i>
      </a>
    </nav>
  );
}
