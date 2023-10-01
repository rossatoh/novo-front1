import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const navigate = useNavigate();

  async function handleSignIn() {
    await signIn({ email, password });

    const token = localStorage.getItem('@braindump:token');
    if(token != null){
      navigate('/');
    }
  }

  return (
    <Container>
      <Form>
        <h1>BrainDump</h1>
        <p>Aplicação para salvar e gerenciar suas notas úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder='Password' type='password' icon={FiLock} onChange={e => setPassword(e.target.value)} />
        <Button title='Entrar' onClick={handleSignIn} />
        <Link id="button-signup" to="/signup"><Button title='Cadastrar'/></Link>
        <div className="Link">
        <Link to='/'>
          Voltar
        </Link>

        <Link to='/recovery'>
          Esqueci minha senha
        </Link>
        </div>
      </Form>
      <Background />
    </Container>
  )
}
