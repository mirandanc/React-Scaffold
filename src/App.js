import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from 'react-elastic-carousel';
import Item from "./components/Item";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/Navbar';

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul className='menu'>
            <li><a href="/">como usar</a></li>
            <li><a href="/">parceiros</a></li>
            <li><a href="/">contato</a></li>
            <div className='bnt'> COMPRE </div>
          </ul>
        </nav>
      </header>
      <h2 style={{marginTop:'25px', color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> A SOLUÇÃO PARA O SEU COMERCIO </h1>
      <section className='flex'>
        <div className='hero-text'>
          <h3> text text </h3>
          <br></br>
          <h4> more and more and more and more</h4>
          <p> Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interessantiss quisso pudia ce receita de bolis, </p>
        </div>
        <div className='hero-image'>
          <img src={logo} alt="hero"/>
        </div>
      </section>

      <h1 style={{marginTop:'25px'}}>COMO USAR</h1>
      <section className='tutorial' id='como'>
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
      </section>

      <h2 style={{marginTop:'25px', color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> USE IT NOW </h1>
      <section className='cards'>
        <div className='card-row'>
          <div className='card-text'>
            <p> Cheia de manias, toda dengosa. Menina bonita, sabe que é gostosa</p>
          </div>
          <div className='card-image'>
            <img src={logo} alt="hero"/>
          </div>
        </div>
        <div className='card-row' style={{backgroundColor:'#f0f0f0'}}>
          <div className='card-image'>
            <img src={logo} alt="hero"/>
          </div>
          <div className='card-text'>
            <p> Com esse seu jeito faz o que quer de mim, domina o meu coração </p>
          </div>
        </div>
        <div className='card-row'>
          <div className='card-text'>
            <p> Eu fico sem saber o que fazer. Quero te deixar você não quer, não quer. </p>
          </div>
          <div className='card-image'>
            <img src={logo} alt="hero"/>
          </div>
        </div>
      </section>

      <h2 style={{color:'#61dafb'}}> Vupty </h2>
      <h1 style={{marginTop:'25px', marginBottom:'25px'}}> PARCEIROS </h1>
      <section className='parceiros row gx-sm-0' id='sobre'>
        <div className='background-image'>
          <img src="https://uploads-ssl.webflow.com/622733122c7daab530a8e8d3/622d4b777284faf3550406c6_home-benefits-background-img.svg" loading="lazy" alt='background'></img>
        </div>
            <div className='col-md-6 col-sm-12 col-12'>
              <img src={logo} alt="hero"/>
              <p>comida</p>
            </div>

            <div className='col-md-6 col-sm-12 col-12 '>
              <img src={logo} alt="hero"/>
              <p>canas</p>
            </div>

            <div className='col-md-6 col-sm-12 col-12'>
              <img src={logo} alt="hero"/>
              <p>putarias</p>
            </div>

            <div className='col-md-6 col-sm-12 col-12'>
              <img src={logo} alt="hero"/>
              <p style={{marginBottom:'40px'}}>outras paradas</p>
            </div>
      </section>

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>

      <section className='row' style={{ marginTop:'40px' }}>
          <div className='icon-block'>
            <div className='icon col-md-6 col-sm-12'><img src={logo} alt="hero"/><p>Restaurantes</p></div>
            <div className='icon col-md-6 col-sm-12 '><img src={logo} alt="hero"/><p>Mercadinhos</p></div>
            <div className='icon col-md-6 col-sm-12 '><img src={logo} alt="hero"/><p>Bares</p></div>
            <div className='icon col-md-6 col-sm-12'><img src={logo} alt="hero"/><p>Lanchonetes</p></div>
          </div>
      </section>

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

      <section className='footer' id='contato'>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
          &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} />
          </li>
        </ul>
        <p> <span>Vupty</span> &copy; 2022 </p>
      </section>

    </div>
  );
}

export default App;
