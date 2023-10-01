import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";

export function Recover() {
  const [ email, setEmail ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await axios
      .post('http://localhost:3333/recoveryPassword/sendemail',
        {
          email: email
        }
        )
        .then((response) => {
          if (response.response) {
            alert(response.response.data.message);
          } else {
            alert('E-mail enviado com sucesso');
          }
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert('Não foi possível enviar o e-mail');
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
