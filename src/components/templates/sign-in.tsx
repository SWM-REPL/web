import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';

import { SignInApiProps } from '../../apis/user/signin';
import { Routes } from '../../routes';
import { Title, Link } from '../atoms';
import { SignInForm } from '../organisms';

const StyledSignIn = styled.div`
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

interface SignInProps {
  formData: UseFormReturn<SignInApiProps>;
}

export function SignIn({ formData }: SignInProps) {
  return (
    <StyledSignIn>
      <Title>로그인</Title>
      <FormBox>
        <SignInForm formData={formData} />
      </FormBox>
      <div>
        계정이 없으시다면...{' '}
        <Link to={Routes.SignUp.path ?? ''}>만들러가기!</Link>
      </div>
    </StyledSignIn>
  );
}
