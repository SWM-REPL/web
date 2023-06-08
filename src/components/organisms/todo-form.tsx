import React from 'react';

import styled from 'styled-components';

import { TodoField } from '../molecules';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;
  width: 100%;
`;

export function TodoForm() {
  return (
    <StyledContainer>
      <TodoField
        checked
        setChecked={() => {
          console.log('Check');
        }}
      />
      <TodoField
        setChecked={() => {
          console.log('Check');
        }}
      />
    </StyledContainer>
  );
}
