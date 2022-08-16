import React from 'react';
import heromilf from './img/heromilf.svg';
import { Link } from "react-router-dom";
import "./partials/Hero.css";


export default function Hero() {
  return (
  <section className='hero' id='hero'>
    <div className='hero-text'>
      <h4> VUPTY </h4>
      <h3> more and more and more and more</h3>
      <br></br>
      <p> Temos como objetivo oferer ao seus parceiros a melhor forma de economizar tempo durante o dia a dia do seu negocio. Deforma seria e respeitosa visamos construir o melhor ambiente para que possamos te ajudar. </p>
      <button className='loginBnt'><Link to="/login" style={{textDecoration:'none', color:'white'}}>ACESSE</Link></button>
    </div>
    <div className='hero-image'>
      <img src={heromilf} alt="hero" className='woman'/>
    </div>
  </section>
  );
}
