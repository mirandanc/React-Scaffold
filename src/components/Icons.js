import logo from './img/logo.svg';
import cesta from './img/cesta.svg';
import lanche from './img/lanche.svg';
import talher from './img/talher.svg';
import taca from './img/taca.svg';
import './partials/Icons.css';

export default function Icons() {
  return (
    <>
    <section className='parceiros row gx-sm-0' id='sobre'>
      <div className='classes'>
        <div className='produto col-md-6 col-sm-12 col-12'>
           <img src={logo} alt="hero"/>
           <p>comida</p>
        </div>

        <div className='produto col-md-6 col-sm-12 col-12 '>
          <img src={logo} alt="hero"/>
          <p>canas</p>
        </div>

        <div className='produto col-md-6 col-sm-12 col-12'>
          <img src={logo} alt="hero"/>
          <p>putarias</p>
        </div>

        <div className='produto col-md-6 col-sm-12 col-12'>
          <img src={logo} alt="hero"/>
          <p style={{marginBottom:'40px'}}>outras paradas</p>
        </div>
      </div>
    </section>

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>

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
