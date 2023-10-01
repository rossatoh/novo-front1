import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: .8rem;
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;
  }

  > svg {
      margin-left: 1.6rem;
  }
`;
