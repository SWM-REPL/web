import styled from 'styled-components';

interface NoteTitleProps {
  variant?: 'title' | 'subtitle';
}

export const NoteTitle = styled.h2<NoteTitleProps>`
  font-size: ${({ variant }) => (variant === 'subtitle' ? '0.75rem' : '2rem')};
  font-weight: normal;
  text-align: center;
  width: 100%;

  border: none;
  border-bottom: ${({ variant }) => (variant === 'subtitle' ? '0' : '1px')}
    dashed ${({ theme }) => theme.border.color};
  padding-bottom: ${({ variant }) =>
    variant === 'subtitle' ? '0' : '0.75rem'};
  margin: 0;
`;
