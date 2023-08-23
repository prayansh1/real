import { useState } from 'react'
import React from 'react'
import './Nav.css'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
    <div className="navbar-container">
      <img src="your-icon-image.png" alt="Icon" className="navbar-icon" />
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </nav>

  )
}

export default Nav