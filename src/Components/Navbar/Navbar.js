import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../img/i.svg';

export default function Navbar() {
  const [menuClass, setMenuClass] = useState('show-menu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toogleDrawer() {
    setMenuClass(isMenuOpen ? 'show-menu' : 'close-menu');
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div id="navbar-main">
        <div id="navbar-container" className="global-container">
          <div id="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div id="navbar-menu">
            <ul className={menuClass}>
              <li><a href="#about-container" onClick={toogleDrawer}>Sobre mim</a></li>
              <li><a href="#por-main" onClick={toogleDrawer}>Portipólio</a></li>
              <li><a href="#contact-main" onClick={toogleDrawer}>Contato</a></li>
            </ul>
          </div>
          <button
            type="button"
            id="check"
            onClick={toogleDrawer}
          >
            <i className={!isMenuOpen ? 'fas fa-bars' : 'fas fa-times'} />
          </button>
        </div>
      </div>
    </>
  );
}
