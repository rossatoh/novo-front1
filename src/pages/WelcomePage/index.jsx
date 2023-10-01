import { GiBrainDump } from 'react-icons/gi';

import { Container, Nav, Button, Info, Footer } from "./styles";
import img1 from '../../assets/img1.svg';
import img2 from '../../assets/img2.svg';

export function WelcomePage() {
  return (
    <Container>
      <Nav>
        <header>
          <div>
            <GiBrainDump />
            BrainDump
          </div>
          <Button to='/signin'>
            Login
          </Button>
        </header>
      </Nav>

      <Info>
        <div>
          <p>Anotações</p>
          <h2>Braindump: sua plataforma intuitiva e segura de anotações</h2>
          <span>
          Braindump é uma plataforma de anotações que foi projetada para ser fácil de usar e acessível de qualquer lugar com conexão à internet. Com uma interface simples e intuitiva, é possível adicionar, organizar e personalizar suas anotações de forma rápida e eficiente. Com o Braindump, você pode personalizar suas anotações com diferentes cores, fontes e estilos, dando vida às suas ideias de uma maneira única e criativa. Além disso, se você estiver trabalhando em um projeto em equipe, a plataforma permite a colaboração fácil e eficiente.
          </span>
        </div>

        <img src={img1} alt="first img" />
      </Info>

      <Info>
        <img className='imgTwo' src={img2} alt="first img" />

        <div>
          <p>Anotações</p>
          <h2>Braindump: sua plataforma intuitiva e segura de anotações</h2>
          <span>
          A segurança é uma das principais preocupações do Braindump, por isso, possui recursos de segurança integrados, como backups automáticos e login seguro, garantindo que suas anotações estarão sempre seguras. Em resumo, o Braindump é uma plataforma de anotações acessível e fácil de usar que permite a personalização e a colaboração eficiente em projetos em equipe, enquanto garante a segurança de suas informações.
          </span>
        </div>
      </Info>

      <Footer>
        <p>© BrainDump 2023</p>
        <span>By: Adryann Layon & Pedro Rossato</span>
      </Footer>

    </Container>
  )
}
