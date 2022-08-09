import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

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
      <h1> HERO </h1>
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

      <section className='tutorial'>
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

      <h1> USE IT NOW </h1>
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

      <h1> PARCEIROS </h1>
      <section className='row parceiros'>
            <div className='col-md-6 col-sm-12'>
              <img src={logo} alt="hero"/>
              <p>comida</p>
            </div>

            <div className='col-md-6 col-sm-12'>
              <img src={logo} alt="hero"/>
              <p>canas</p>
            </div>

            <div className='col-md-6 col-sm-12'>
              <img src={logo} alt="hero"/>
              <p>putarias</p>
            </div>

            <div className='col-md-6 col-sm-12'>
              <img src={logo} alt="hero"/>
              <p style={{marginBottom:'40px'}}>outras paradas</p>
            </div>
      </section>

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>

      <section className='row' style={{ marginTop:'40px' }}>
          <div className='icon-block'>
            <div className='col-md-6 col-sm-12' style={{maxWidth: '500px'}}><img src={logo} alt="hero"/><p>Restaurantes</p></div>
            <div className='col-md-6 col-sm-12' style={{maxWidth: '500px'}}><img src={logo} alt="hero"/><p>Mercadinhos</p></div>
            <div className='col-md-6 col-sm-12' style={{maxWidth: '500px'}}><img src={logo} alt="hero"/><p>Bares</p></div>
            <div className='col-md-6 col-sm-12' style={{maxWidth: '500px'}}><img src={logo} alt="hero"/><p>Lanchonetes</p></div>
          </div>
      </section>

      <div className='row icons'> <p>BLA BLA BLA BLA BLA BLA BLA</p></div>

      <section className='carousel-container'>
        <div className='indicator'>
          <span className='slider'></span>
          <span className='slider'></span>
          <span className='slider'></span>
          <span className='slider'></span>
        </div>
        <div className='testimonial'>
          <div className='carousel-row'>
          <div className='carousel-col'>
            <div className='user-text'>
              <p> Tem coisas que eu preciso ir na rua e ver o preço. Eu ia no CEASA para compra alguns itens e agora já não preciso mais. Já compro direto aqui no aplicativo de vocês.</p>
              <h3>Toin Caixão</h3>
              <p>Mercado do Toin</p>
            </div>
            <div className='user-img'>
              <img src={logo} alt="carousel"/>
            </div>
          </div>
          <div className='carousel-col'>
            <div className='user-text'>
              <p> A plataforma é muito boa e a logística de vocês é excelente. Muito bom</p>
              <h3>Ariadnes Pereira</h3>
              <p>Mercado do Sol</p>
            </div>
            <div className='user-img'>
              <img src={logo} alt="carousel"/>
            </div>
          </div>
          <div className='carousel-col'>
            <div className='user-text'>
              <p> Os muleque são brabo mermo, fita loka.</p>
              <h3>Reinaudin da Bala</h3>
              <p>Boca do Rei</p>
            </div>
            <div className='user-img'>
              <img src={logo} alt="carousel"/>
            </div>
          </div>
          <div className='carousel-col'>
            <div className='user-text'>
              <p> Nós mercadinhos precisamos muito dessas ofertas! precisamos dessa facilidade que a clubbi está trazendo pra gente.</p>
              <h3>Leusa Creusa</h3>
              <p>Mercadin TudoTem</p>
            </div>
            <div className='user-img'>
              <img src={logo} alt="carousel"/>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
