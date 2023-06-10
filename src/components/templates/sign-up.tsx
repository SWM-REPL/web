import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';

import { SignUpApiProps } from '../../apis/user/signup';
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

interface SignUpProps {
  formData: UseFormReturn<SignUpApiProps>;
}

export function SignUp({ formData }: SignUpProps) {
  return (
    <StyledSignUp>
      <Title>회원가입</Title>
      <FormBox>
        <SignUpForm formData={formData} />
      </FormBox>
    </StyledSignUp>
  );
}
