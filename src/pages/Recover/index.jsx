import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function Recover() {
  const [ email, setEmail ] = useState('');

  const MySwal = withReactContent(Swal);

  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .post('https://braindumpapi.onrender.com/recoveryPassword/sendemail',
        {
          email: email
        }
        )
        .then((response) => {
          if (response.response) {
            MySwal.fire({
              icon: 'info',
              title: 'Atenção!',
              text: response.response.data.message,
            })
          } else {
            MySwal.fire({
              icon: 'info',
              title: 'Atenção!',
              text: 'E-mail enviado com sucesso',
            })
          }
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
              text: 'Não foi possível enviar o e-mail',
            })
          }
        });
  }

  return (
    <Container>
      <Input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={handleSubmit} type='submit' title='Recuperar senha'/>
      <Link to='/signin'><ButtonText id="button-back" title="Voltar"/></Link>
    </Container>

  )
};
