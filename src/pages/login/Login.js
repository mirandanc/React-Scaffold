import React, {useRef} from 'react'
import './Login.css'
import { Container } from 'react-bootstrap';
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Footer from '../../layouts/footer/Footer';

export default function Singup() {
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <>
      <Card>
        <Card.Body className='text-center' style={{backgroundColor: '#c0e8db'}}>
          <h2>Entre</h2>
          <div className='container' style={{width:'50vw'}}>
            <Form>
              <Form.Group id="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Digite seu email ou CNPJ" required/>
              </Form.Group>

              <Form.Group id="Senha" style={{marginTop:'20px'}}>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="senha" ref={passRef} placeholder="Digite sua senha" required/>
              </Form.Group>
              <Button className='w-70' style={{marginTop:'40px'}}>
                Entre
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <div className='w-80 text-center mt-2'>
        Ainda não possui uma conta? <Link to="/singup">Cadastre-se</Link>
      </div>
      <Footer/>
    </>
  )
}
