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
        <div className='phone' style={{color:'#033858'}}> ( 83 ) 96969-6969 </div>
        <div className='social'>
          <div>
          <a href='http://facebook.com' style={{color:'#033858'}}><FontAwesomeIcon icon={faFacebook} /></a>
          &nbsp;&nbsp;<a href='http://instagram.com' style={{color:'#033858'}}><FontAwesomeIcon icon={faInstagram} /></a>&nbsp;&nbsp;
          <a href='http://whatsappweb.com' style={{color:'#033858'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>
      <Navbar />
      {/* <h2 style={{marginTop:'25px', color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> A SOLUÇÃO PARA O SEU COMERCIO </h1> */}
      <Hero />

      <h1 style={{marginTop:'5px', fontWeight:'600', color:'#53bf9d'}}>COMO USAR</h1>
      <Tutorial />

      <h2 style={{color:'#61dafb', fontWeight:'600'}}> Vupty </h2>
      <h1 style={{marginTop:'5px', marginBottom:'25px'}}> PARCEIROS </h1>

      <Icons />

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>


      <h1 style={{marginTop:'25px', marginBottom:'25px'}}>NOSSOS CLIENTES</h1>
      <section className='carousel'>
        <Carousel breakPoints={breakPoints}>
            <Item>
            <div className='user-text'>
              <p> Campina Grande estava precisando de um serviço assim, facilitou muito minha rotina.</p>
              <h4>Renato</h4> <h6> Monte Santo</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Fazem entrega aqui em Lagoa Seca também, bem rápido </p>
              <h4>Luis</h4> <h6>Bela Vista</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Uma das entregas mais rapidas que já vi. Pessoal muito atencioso. Compro sempre. </p>
              <h4>Julia</h4> <h6>Malvinas</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Eu perdia muito tempo do meu dia indo ao mercado, agora posso pesquisar tudo pelo celular. </p>
              <h4>Suenia</h4> <h6>Centenario</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Nunca imaginei que uma empresa da cidade iria ajudar tanto a minha vida.</p>
              <h4>Kelly</h4> <h6>Santa Rosa</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Pagar com cartão sem sair de casa é uma dadiva.</p>
              <h4>Roberto</h4> <h6>São Jose</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> Otima variedade de produtos, com o melhor preço da cidade.</p>
              <h4>Adriano</h4> <h6>Liberdade</h6>
            </div>
            </Item>
            <Item>
            <div className='user-text'>
              <p> É vapt vupty!</p>
              <h4 style={{marginLeft: '-140px'}}>Vagner</h4> <h6 style={{marginLeft: '220px'}}>Zé Pinheiro</h6>
            </div>
            </Item>
        </Carousel>
      </section>

      <Footer />
    </div>
  );
}

export default App;
