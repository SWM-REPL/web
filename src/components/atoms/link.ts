import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

export const Link = styled(RouterLink)`
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: bold;

  cursor: pointer;
`;
