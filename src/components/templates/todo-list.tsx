import React from 'react';

import styled from 'styled-components';

import { Button } from '../atoms';
import { TodoHeader } from '../molecules';
import { TodoForm } from '../organisms/todo-form';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3.75rem 1.5rem 0 1.5rem;
`;

export function TodoList() {
  return (
    <StyledContainer>
      <TodoHeader />
      <TodoForm />
      <Button variant='secondary'>+ 할 일 추가하기</Button>
    </StyledContainer>
  );
}
