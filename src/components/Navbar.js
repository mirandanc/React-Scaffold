import React from 'react';
import logo from '../logo.svg';
import { Link as Scroll } from 'react-scroll';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';
import "./partials/Navbar.css";
import { Router } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
        <nav ref={navRef}>
            <Scroll to="como" spy={true} offset={-10} duration={200} className='links' onClick={showNavbar}>
              como usar
            </Scroll>
            <Scroll to="sobre" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              sobre
            </Scroll>
            <Scroll to="contato" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              contato
            </Scroll>
            <button className='loginBnt'><Link to="/login" style={{textDecoration:'none'}}>COMPRE AGORA</Link></button>
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
