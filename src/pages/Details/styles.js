import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
    
    #button-red:hover{
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  border: 2px solid #3e3e3e;
  max-width: 80rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #1b2132;


  > button:first-child {
    align-self: flex-end;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p {
    margin-top: 1.6rem;
    text-align: justify;
  }
`;
