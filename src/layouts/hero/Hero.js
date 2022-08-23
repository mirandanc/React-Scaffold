import React from 'react';
import heromilf from '../../components/img/heromilf.svg';
import { Link } from "react-router-dom";
import "./Hero.css";


export default function Hero() {
  return (
  <section className='hero' id='hero'>
    <div className='hero-text'>
      <h3> PRATICIDADE, AGILIDADE E O MENOR PREÇO!</h3>
      <p> A melhor maneira de abastecer o seu negocio, abasteça seu estabelecimento sem perder tempo, evite filas e receba em até 24 horas. </p>
      <div className='d-flex justify-content-center'>
      <button className='AcssesBnt'><Link to="/login" style={{textDecoration:'none', color:'white'}}>ACESSE</Link></button>
      </div>
    </div>
    <div className='hero-image'>
      <img src={heromilf} alt="hero" className='woman'/>
    </div>
  </section>
  );
}
