import React from 'react';
import herobg from './img/herobg.svg';
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
      <p> Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interessantiss quisso pudia ce receita de bolis, </p>
      <button className='loginBnt'><Link to="/login" style={{textDecoration:'none', color:'white'}}>ACESSE</Link></button>
    </div>
    <div className='hero-image'>
      <img src={heromilf} alt="hero" className='woman'/>
      {/* <img src={herobg} alt="gb" className='bg'/> */}
    </div>
  </section>
  );
}
