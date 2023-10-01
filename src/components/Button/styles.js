import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
