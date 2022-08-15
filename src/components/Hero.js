import React from 'react';
import heroimg from './img/heroimg.svg';
import herolong from './img/herolong.svg';
import "./partials/Hero.css";


export default function Hero() {
  return (
  <section className='flex' id='hero'>
    <div className='hero-text'>
      <h3> text text </h3>
      <br></br>
      <h4> more and more and more and more</h4>
      <p> Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interessantiss quisso pudia ce receita de bolis, </p>
    </div>
    <div className='hero-image'>
      <img src={herolong} alt="hero"/>
    </div>
  </section>
  );
}
