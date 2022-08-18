import React from 'react';
import "./partials/Tutorial.css";
import devices from './img/icones1.svg';
import credencials from './img/icones2.svg';
import time from './img/icones3.svg';
import img1 from './img/tutorialimg1.svg';
import img2 from './img/tutorialimg2.svg';
import img3 from './img/tutorialimg3.svg';



export default function Tutorial() {
  return (
    <>
    <div className='cards'>
      <div className='card-row'>
        <div className='card-text'>
          <img src={devices} alt="devices" className='tutorialIcon'/>
          <p>  Baixe nosso APP ou Visite nosso site de qualquer celular ou computador. </p>
        </div>
        <div className='card-image'>
          <img src={img1} alt="comprar"/>
        </div>
      </div>

      <div className='inverted-row'>
        <div className='card-row' style={{backgroundColor:'#f0f0f0'}}>
          <div className='card-image'>
            <img src={img3} alt="entregas"/>
          </div>
          <div className='card-text'>
            <img src={credencials} alt="credencials" className='tutorialIcon'/>
            <p> Faça seu cadastro e começe a comprar com alguns cliques. </p>
          </div>
        </div>
      </div>

      <div className='normal-row'>
        <div className='card-row' style={{backgroundColor:'#f0f0f0'}}>
          <div className='card-text'>
            <img src={credencials} alt="credencials" className='tutorialIcon'/>
            <p> Faça seu cadastro e começe a comprar com alguns cliques. </p>
          </div>
          <div className='card-image'>
            <img src={img3} alt="mercado"/>
          </div>
        </div>
      </div>
      <div id='hide'></div>
      <div className='card-row'>
        <div className='card-text'>
          <img src={time} alt="time" className='tutorialIcon'/>
          <p> Receba sua encomenda no dia seguinte, sem filas ou burocracia. </p>
        </div>
        <div className='card-image'>
          <img src={img2} alt="entrega"/>
        </div>
      </div>
    </div>

    <div className='tutorial' id='como'>
      <div className='row'>
        <div className='tutorial-wraper col-md-4 col-sm-12'>
          <div className='tutorial-number'>1</div>
        </div>
        <div className='col-md-8 col-sm-12 tutorial-text'>
          <p> Baixe nosso APP ou Visite nosso site de qualquer celular ou computador</p>
        </div>

        <div className='tutorial-wraper col-md-4 col-sm-12'>
          <div className='tutorial-number'>2</div>
        </div>
        <div className='col-md-8 col-sm-12 tutorial-text'>
          <p> Faça seu cadastro e começe a comprar com apenas alguns cliques, compre até as 9:00 e receba sua mercadoria no mesmo dia! </p>
        </div>

        <div className='tutorial-wraper col-md-4 col-sm-12'>
          <div className='tutorial-number'>3</div>
        </div>
        <div className='col-md-8 col-sm-12 tutorial-text'>
          <p> Agora é só esperar nosso entregador no dia seguinte, sem filas, sem estresse.</p>
        </div>

      </div>
    </div>
  </>
  );
}
