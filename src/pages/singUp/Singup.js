import React, {useRef} from 'react'
import './Singup.css'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Footer from '../../layouts/footer/Footer';

export default function Singup() {
  const emailRef = useRef();
  const passRef = useRef();
  const passconfirmRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-3'>Cadastro</h2>
          <Form className='w-50'>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} placeholder="Digite seu email" required/>
            </Form.Group>

            <Form.Group id="Senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="senha" ref={passRef} placeholder="Digite uma senha" required/>
            </Form.Group>

            <Form.Group id="Confirm">
              <Form.Label>Confirme a senha</Form.Label>
              <Form.Control type="senha" ref={passconfirmRef} placeholder="Digite sua senha novamente" required/>
            </Form.Group>
            <Button className='w-70'>
              Cadastre-se
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-80 text-center mt-2'>
        Já possui uma conta? <Link to="/login">Entre</Link>
      </div>
      <Footer/>
    </>
  )
}
