import React from 'react';
import logo from '../../components/img/logoSmall.svg';
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import "./Navbar.css";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <>
      <div className='contact' id='top'>
          <div className='phone' style={{color:'#033858'}}> ( 83 ) 96969-6969 </div>
            <div className='social'>
              <div >
                <a href='https://www.facebook.com/Vupty-102571939219080/' style={{color:'#033858'}}><FontAwesomeIcon icon={faFacebook} /></a>
                &nbsp;&nbsp;<a href='https://www.instagram.com/vuptyy/' style={{color:'#033858'}}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
                <a href='http://whatsappweb.com' style={{color:'#033858'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
          </div>
      </div>
    <header className='icon-bar'>
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <nav ref={navRef}>
          <div className="nav-social">
            <a href='http://facebook.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faFacebook} /></a>
            &nbsp;&nbsp;<a href='http://instagram.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
            <a href='http://whatsappweb.com' style={{color:'#f0f0f0'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
            <Scroll to="como" spy={true} offset={-10} duration={200} className='links' onClick={showNavbar}>
              <Link to="/" style={{textDecoration:'none', color:'#033858'}}>como usar</Link>
            </Scroll>
            <Scroll to="sobre" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              <Link to="/" style={{textDecoration:'none', color:'#033858'}}>sobre</Link>
            </Scroll>
            <Scroll to="contato" spy={true} offset={-10} duration={500} className='links' onClick={showNavbar}>
              <Link to="/" style={{textDecoration:'none', color:'#033858'}}>contato</Link>
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
    </>
  )
}
