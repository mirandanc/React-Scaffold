import React from 'react';
import "./partials/Tutorial.css";
import logo from './img/logo.svg';
import devices from './img/icones1.svg';
import credencials from './img/icones2.svg';
import time from './img/icones3.svg';
import img1 from './img/tutorialimg1.svg';
import img2 from './img/tutorialimg2.svg';
// import img3 from './img/tutorialimg3.svg';

export default function Tutorial() {
  return (
  <>
    <div className='tutorial' id='como'>
      <div className='row'>
        <div className='col-md-4 col-sm-2'>
          <div className='tutorial-number'>1</div>
        </div>
        <div className='col-md-8 col-sm-4'>
          <div className='tutorial-text'> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</div>
        </div>

        <div className='col-md-4 col-sm-2'>
          <div className='tutorial-number'>2</div>
        </div>
        <div className='col-md-8 col-sm-4'>
          <div className='tutorial-text'> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</div>
        </div>

        <div className='col-md-4 col-sm-2'>
          <div className='tutorial-number'>3</div>
        </div>
        <div className='col-md-8 col-sm-4'>
          <div className='tutorial-text'> bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</div>
        </div>

      </div>
    </div>
    <h2 style={{marginTop:'25px', color:'#61dafb', fontWeight:'600'}}> Vupty </h2>
    <h1 style={{marginTop:'5px', marginBottom:'25px', fontWeight:'600'}}> USE IT NOW </h1>
    <div className='cards'>

      <div className='card-row'>
        <div className='card-text'>
          <img src={devices} alt="devices" className='tutorialIcon'/>
          <p> Cheia de manias, toda dengosa. Menina bonita, sabe que é gostosa</p>
        </div>
        <div className='card-image'>
          <img src={img1} alt="comprar"/>
        </div>
      </div>

      <div className='inverted-row'>
        <div className='card-row' style={{backgroundColor:'#f0f0f0'}}>
          <div className='card-image'>
            <img src={img2} alt="entregas"/>
          </div>
          <div className='card-text'>
            <img src={credencials} alt="credencials" className='tutorialIcon'/>
            <p> Com esse seu jeito faz o que quer de mim, domina o meu coração </p>
          </div>
        </div>
      </div>

      <div className='normal-row'>
        <div className='card-row' style={{backgroundColor:'#f0f0f0'}}>
          <div className='card-text'>
            <img src={credencials} alt="credencials" className='tutorialIcon'/>
            <p> Com esse seu jeito faz o que quer de mim, domina o meu coração </p>
          </div>
          <div className='card-image'>
            <img src={img2} alt="entregas"/>
          </div>
        </div>
      </div>

      <div className='card-row'>
        <div className='card-text'>
          <img src={time} alt="time" className='tutorialIcon'/>
          <p> Eu fico sem saber o que fazer. Quero te deixar você não quer, não quer. </p>
        </div>
        <div className='card-image'>
          <img src={logo} alt="hero"/>
        </div>
      </div>
    </div>
  </>
  );
}
