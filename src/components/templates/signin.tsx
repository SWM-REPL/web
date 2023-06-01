import React from 'react';

import { Title, Link } from '../atoms';
import { SignInForm } from '../organisms';

import styled from 'styled-components';

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

const StyledForm = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export function SignIn() {
  return (
    <StyledSignIn>
      <Title>로그인</Title>
      <StyledForm>
        <SignInForm />
      </StyledForm>
      <div>
        계정이 없으시다면... <Link>만들러가기!</Link>
      </div>
    </StyledSignIn>
  );
}
