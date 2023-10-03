import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function ChangePassword() {
  const { token } = useParams();
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const MySwal = withReactContent(Swal);

  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .put('http://localhost:3333/recoveryPassword/changepassword',
        {
          password: password,
          confirmPassword: confirmPassword,
          token: token
        }
      )
        .then((response) => {
          if (response.response) {
            MySwal.fire({
              icon: 'success',
              title: 'Sucesso!',
              text: response.response.data.message,
            })
          } else {
            MySwal.fire({
              icon: 'success',
              title: 'Sucesso!',
              text: 'Senha alterada!',
            })
          }
        })
        .catch(error => {
          if (error.response) {
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.response.data.message,
            })
          } else {
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Não foi possível alterar a senha',
            })
          }
        });
  }

  return (
    <Container>
      <Input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
      <Input type='password' placeholder='Confirmar senha' onChange={(e) => setConfirmPassword(e.target.value)} />
      <Button onClick={handleSubmit} type='submit' title='Trocar senha'/>
    </Container>
  )
};
