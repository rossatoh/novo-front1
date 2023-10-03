import { useState } from 'react';
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { api } from '../../services/api';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  function handleSignUp() {
    if (!name || !email || !password) {
      return MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos!',
      })
    }

    api.post('/users', { name, email, password })
      .then(() => {
        MySwal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Cadastro criado!',
        })
        navigate('/signin');
      })
      .catch(error => {
        if (error.response) {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
          })
        } else {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não foi possível cadastrar',
          })
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>BrainDump</h1>
        <p>Aplicação para salvar e gerenciar suas notas úteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder='Nome' type='text' icon={FiUser} onChange={e => setName(e.target.value)} />
        <Input placeholder='E-mail' type='text' icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder='Password' type='password' icon={FiLock} onChange={e => setPassword(e.target.value)} />
        <Button title='Cadastrar' onClick={handleSignUp} />

        <Link to='/signin'>
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}
