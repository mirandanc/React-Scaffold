import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import './partials/Footer.css';
import logo from '../logo.svg';


const Footer = () => {
  return (
    <footer id='contato'>
      <div className='contact' id='contact'>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom socialInfo'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>

            <div className='socialLogos'>
              <a href='http://facebook.com' className='me-4 text-reset' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faFacebook} /></a>
              <a href='http://instagram.com' className='me-4 text-reset' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faInstagram} /></a>
              <a href='http://whatsappweb.com' className='text-reset' style={{color:'aliceblue'}}><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
          </section>

          <section className=''>
            <MDBContainer fluid className='text-center text-md-start mt-7'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-1'>
                    <MDBIcon icon="gem" className="me-1" />
                    A VUPTY
                  </h6>
                  <p>
                    Tem como objetivo oferer ao seus parceiros a melhor forma de economizar tempo durante o dia a dia do seu negocio. Deforma seria e respeitosa visamos construir o melhor ambiente para que possamos te ajudar.
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{display:'flex',alignContent:'center',justifyContent:'space-evenly',flexDirection:'column',flexWrap:'nowrap'}}>
                  <button className='loginBntF'><Link to="/login" style={{textDecoration:'none', display:'inline-table', color:'white'}}>COMPRE AGORA</Link></button>
                  <Scroll to="top" spy={true} offset={-10} duration={200} className='links'>
                  <img src={logo} alt='logo' className='img-fluid' style={{marginTop:'20px'}}/>
                  </Scroll>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-1'>Contact</h6>
                  <p style={{ marginBottom:'12px' }}>
                    <FontAwesomeIcon icon={faHouseChimney} /> &nbsp;
                    &nbsp; R. Benjamin Constant, 170 - Estação Velha, Campina Grande - PB, 58410-003
                  </p>
                  <p style={{ marginBottom:'12px' }}>
                   <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                   &nbsp; contato@vupty.com.br
                  </p>
                  <p>
                   <FontAwesomeIcon icon={faPhone} /> &nbsp; &nbsp; +55 84 9 9999-9999
                  </p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: '#61dafb', color: 'white' }}>
            © 2022 Copyright:
            <a className='text-reset fw-bold' href='https://vupty.com.br/'>
            Vupty.com.br
            </a>
            <br></br>
            XX. XXX. XXX/0001-XX Rua Benjamin Constant, 170 - Campina Grande
          </div>
        </MDBFooter>
      </div>
    </footer>
  );
}

export default Footer;
