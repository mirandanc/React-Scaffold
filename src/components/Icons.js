import cesta from './img/cesta.svg';
import lanche from './img/lanche.svg';
import talher from './img/talher.svg';
import taca from './img/taca.svg';
import cerva from './img/cerva.svg';
import comida from './img/comida.svg';
import frios from './img/frios.svg';
import limpeza from './img/limpeza.svg';
import './partials/Icons.css';

export default function Icons() {
  return (
    <>
    <section className='parceiros row gx-sm-0' id='sobre'>
      <div className='classes'>
        <div className='produto col-lg-6 col-sm-12 col-12'>
             <img src={comida} alt="cereal"/>
          <a href='http://www.vupty.com.br/basicos' style={{color:'#53bf9d', textDecoration: 'none'}}>
            <p>BASICOS</p>
          </a>
        </div>

        <div className='produto col-lg-6 col-sm-12 col-12 '>
            <img src={cerva} alt="cerva"/>
          <a href='http://www.vupty.com.br/bebidas' style={{color:'#53bf9d', textDecoration: 'none'}}>
            <p>BEBIDAS</p>
          </a>
        </div>

        <div className='produto col-lg-6 col-sm-12 col-12'>
            <img src={frios} alt="frios"/>
          <a href='http://www.vupty.com.br/frios' style={{color:'#53bf9d', textDecoration: 'none'}}>
            <p>FRIOS</p>
          </a>
        </div>

        <div className='produto col-lg-6 col-sm-12 col-12'>
            <img src={limpeza} alt="limpeza"/>
          <a href='http://www.vupty.com.br/limpeza' style={{color:'#53bf9d', textDecoration: 'none'}}>
            <p style={{marginBottom:'40px'}}>LIMPEZA</p>
          </a>
        </div>
      </div>
    </section>

      <div className='row icons g-0'> <p>CONHEÇA NOSSOS PARCEIROS</p></div>

      <section className='row' style={{ marginTop:'40px' }}>
          <div className='icon-block'>
            <div className='icon col-lg-6 col-sm-12 col-12'><img src={talher} alt="hero"/><p>RESTAURANTES</p></div>
            <div className='icon col-lg-6 col-sm-12 col-12'><img src={cesta} alt="hero"/><p>MERCADINHOS</p></div>
            <div className='icon col-lg-6 col-sm-12 col-12'><img src={taca} alt="hero"/><p>BARES</p></div>
            <div className='icon col-lg-6 col-sm-12 col-12'><img src={lanche} alt="hero"/><p>LANCHONETES</p></div>
          </div>
      </section>
    </>
  )
}
