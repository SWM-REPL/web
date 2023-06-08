import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3rem;
  position: relative;

  &::before {
    content: '';

    position: absolute;
    width: calc(100% + 0.5rem);
    height: 1.75rem;
    left: -0.25rem;
    bottom: 0;
    z-index: -1;
    transform: rotate(-5deg);
    background: ${({ theme }) => theme.highlightPrimary};
  }
`;
