import React from 'react';

import styled from 'styled-components';

import { Title } from '../atoms';
import { SignUpForm } from '../organisms/signup-form';

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 2.5rem;
  row-gap: 1.5rem;
`;

const FormBox = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export function SignUp() {
  return (
    <StyledSignUp>
      <Title>회원가입</Title>
      <FormBox>
        <SignUpForm />
      </FormBox>
    </StyledSignUp>
  );
}
