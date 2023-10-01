import { styled } from "styled-components";

import { Link } from 'react-router-dom';

export const Nav = styled.nav`

  > header {
    padding: 0 6.4rem 0;
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    box-shadow: 0 2px 5px rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;

    > div {
      font-size: 4rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
    
  }
`;

export const Button = styled(Link) `
  border-radius: .4rem;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  white-space: nowrap;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
`


export const Info = styled.section`
  width: 100%;
  height: 100vh;
  padding: 16rem 6.4rem 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  > img {
    width: clamp(45rem, 46rem + 11vh, 54rem)
  }

  .imgTwo {
    width: clamp(10rem, 46rem, 54rem)
  }

  > div {
    width: clamp(50rem, 35rem, 40rem);

    > p {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-size: 2.8rem;
      line-height: 1.6rem;
      letter-spacing: .14rem;
      margin-bottom: 1.6rem;
    }

    > h2 {
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: 2.4rem;
    }

    > span {
      display: block;
      color: #a9b3c1;
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-bottom: 3.5rem;
      text-align: justify;
    }
  }
`;

export const Container = styled.div`
  > section + section {
    gap: 10rem;
    background-color: white;

    > div {
      > h2 {
        color: #1c2237;
      }

      > span {
        color: #1c2237;
      }
    }
  }
`;


export const Footer = styled.footer`
  height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
