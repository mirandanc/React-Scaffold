import React from 'react';
import logo from './logo.svg';
import { Link as LinkS } from 'react-scroll';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
        <nav ref={navRef}>
          <LinkS to="como" spy={true} offset={-10} duration={500}>
            como usar
          </LinkS>
          <LinkS to="sobre" spy={true} offset={-10} duration={500}>
            sobre
          </LinkS>
          <LinkS to="contato" spy={true} offset={-10} duration={500}>
            contato
          </LinkS>
          <button className='loginBnt'><Link to="/signin">COMPRE AGORA</Link></button>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
  )
}
