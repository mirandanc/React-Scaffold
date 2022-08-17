import React from 'react';
import logo from '../logo.svg';
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import "./partials/Navbar.css";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
        <nav ref={navRef}>
          <div className="nav-social">
            <a href='http://facebook.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faFacebook} /></a>
            &nbsp;&nbsp;<a href='http://instagram.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
            <a href='http://whatsappweb.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
            <Scroll to="como" spy={true} offset={-10} duration={200} className='links' onClick={showNavbar}>
              como usar
            </Scroll>
            <Scroll to="sobre" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              sobre
            </Scroll>
            <Scroll to="contato" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              contato
            </Scroll>
            <button className='loginBnt'><Link to="/login" style={{textDecoration:'none', color:'white'}}>COMPRE AGORA</Link></button>
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
