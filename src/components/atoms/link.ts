import styled from 'styled-components';

export const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: bold;

  cursor: pointer;
`;
