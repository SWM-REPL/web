import React from 'react';
import styled from 'styled-components';

import { Button } from '../atoms';
import { FormField } from '../molecules';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const FormFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  box-sizing: border-box;
`;

export function SignInForm() {
  return (
    <StyledForm onSubmit={() => {}}>
      <FormFieldBox>
        <FormField label='아이디' type='text' name='username' />
        <FormField label='비밀번호' type='password' name='password' />
      </FormFieldBox>
      <Button type='submit'>로그인하기</Button>
    </StyledForm>
  );
}
