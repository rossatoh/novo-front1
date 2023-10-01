import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;
  padding: 2.2rem;
  margin-bottom: 1.6rem;
  -webkit-box-shadow: 7px 9px 18px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 7px 9px 18px -7px rgba(0,0,0,0.75);
  box-shadow: 7px 9px 18px -7px rgba(0,0,0,0.75);
  
 

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
  }
`;
