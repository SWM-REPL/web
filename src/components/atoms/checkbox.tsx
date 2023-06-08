import React, { useId } from 'react';

import styled from 'styled-components';

import Check from '../../assets/icons/Check.svg';

const StyledContainer = styled.div``;

const StyledCheckbox = styled.input`
  display: none;

  & + label {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.borderPrimary} inset;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.backgroundPrimary};
  }

  &:checked + label {
    background-image: url(${Check});
    background-color: ${({ theme }) => theme.borderSecondary};
  }
`;

interface CheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export function Checkbox({ checked, setChecked }: CheckboxProps) {
  const id = useId();

  return (
    <StyledContainer>
      <StyledCheckbox
        id={id}
        type='checkbox'
        checked={checked}
        onChange={({ target }) => {
          setChecked(target.checked);
        }}
      />
      <label htmlFor={id}></label>
    </StyledContainer>
  );
}
