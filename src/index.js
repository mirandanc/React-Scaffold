import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Singup from './pages/singUp/Singup';
import Login from './pages/login/Login';
import Navbar from './layouts/navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './components/assets/fonts/stylesheet.css';
import { Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>

            <Route path='/singup' element={<Singup />}></Route>

            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
