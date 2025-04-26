import React, { useState } from 'react';
import MYlogo from '../assets/LOGO.png';
import '../cssfiles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <div className='index'>
      <img src={MYlogo} alt='logo' />
      
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`header1 ${menuOpen ? 'show' : ''}`}>
        <label onClick={() => scrollToSection('about')}>ABOUT</label>
        <label onClick={() => scrollToSection('projects')}>PROJECTS</label>
        <label onClick={() => scrollToSection('contact')}>CONTACT</label>
      </div>
    </div>
  );
}

export default Header;
