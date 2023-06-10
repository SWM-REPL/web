import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  background: ${({ variant, theme }) =>
    variant === 'secondary'
      ? theme.backgroundSecondary
      : theme.highlightPrimary};
  color: black;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fontMain};
  font-size: 1.5rem;

  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 255px 15px;
  border-bottom-left-radius: 15px 225px;
  border-width: 2px;
  border-style: ${({ variant }) =>
    variant === 'secondary' ? 'dotted' : 'solid'};
  border-color: ${({ theme }) => theme.border.color};
`;
