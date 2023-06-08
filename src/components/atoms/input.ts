import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.textPrimary};
  outline: none;
  border-radius: 0;
  border: none;
  border-bottom: 0.1rem dotted ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontUser};

  box-sizing: border-box;
  width: 100%;
  height: 1.5rem;

  &:focus {
    border-bottom: 0.1rem solid ${({ theme }) => theme.textPrimary};
  }
`;
