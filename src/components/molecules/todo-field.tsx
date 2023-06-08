import React from 'react';

import styled from 'styled-components';

import { Input, Checkbox } from '../atoms';

const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface TodoFieldProps {
  checked?: boolean;
  setChecked: (checked: boolean) => void;
}

export function TodoField({ checked, setChecked }: TodoFieldProps) {
  return (
    <StyledContainer>
      <Checkbox checked={checked ?? false} setChecked={setChecked} />
      <Input />
    </StyledContainer>
  );
}
