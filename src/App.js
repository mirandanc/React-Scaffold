import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><a href="/">como usar</a></li>
            <li><a href="/">parceiros</a></li>
            <li><a href="/">contato</a></li>
          </ul>
          <div className='bnt'> COMPRE </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
