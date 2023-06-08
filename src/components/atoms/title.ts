import styled from 'styled-components';

interface TitleProps {
  readonly medium?: boolean;
}

export const Title = styled.h1<TitleProps>`
  display: inline-block;
  position: relative;
  font-size: ${({ medium }) => (medium ? '2rem' : '3rem')};
  margin: 0;

  &::before {
    content: '';

    position: absolute;
    width: calc(100% + 0.5rem);
    height: ${({ medium }) => (medium ? '1rem' : '1.75rem')};
    left: -0.25rem;
    bottom: 0;
    z-index: -1;
    transform: rotate(-3deg);
    background: ${({ theme }) => theme.highlightPrimary};
  }
`;
