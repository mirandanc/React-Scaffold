import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from 'react-elastic-carousel';
import Item from "./components/Item";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Tutorial from './components/Tutorial';
import Icons from './components/Icons';

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

function App() {
  return (
    <div className="App">
      <div className='contact' id='top'>
        <div className='phone' style={{color:'aliceblue'}}> ( 83 ) 96969-6969 </div>
        <div className='social'>
          <div>
          <a href='http://facebook.com' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faFacebook} /></a>
          &nbsp;&nbsp;<a href='http://instagram.com' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
          <a href='http://whatsappweb.com' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>
      <Navbar />
      <h2 style={{marginTop:'25px', color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> A SOLUÇÃO PARA O SEU COMERCIO </h1>
      <Hero />

      <h1 style={{marginTop:'25px'}}>COMO USAR</h1>
      <Tutorial />

      <h2 style={{color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> PARCEIROS </h1>

      <Icons />

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>


      <h1 style={{marginTop:'25px', marginBottom:'25px'}}>NOSSOS CLIENTES</h1>
      <section className='carousel'>
        <Carousel breakPoints={breakPoints}>
            <Item>
            <div className='user-text'>
              <p> Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Maria Silva</h4> <h6>Mercado da rua do sol</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Dos Dois</h4> <h6>Mercado da rua do sol</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Tem coisas que eu preciso ir na rua e ver o preço. Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Tres Tres</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Cuatro Quatro</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Tem coisas que eu preciso ir na rua e ver o preço. Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Cinco Five</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Seis Six</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Tem coisas que eu preciso ir na rua e ver o preço. Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Seven Sete</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h4>Oito Oito</h4> <h6>Mercado do Toin</h6>
            </div>
            </Item>
        </Carousel>
      </section>

      <Footer />
    </div>
  );
}

export default App;
