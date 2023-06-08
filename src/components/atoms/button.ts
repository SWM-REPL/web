import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.highlightPrimary};
  color: black;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fontMain};
  font-size: 1.5rem;

  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 255px 15px;
  border-bottom-left-radius: 15px 225px;
  border: 2px solid black;
`;
