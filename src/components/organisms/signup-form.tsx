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

export function SignUpForm() {
  return (
    <StyledForm
      onSubmit={() => {
        console.log('submitted');
      }}>
      <FormFieldBox>
        <FormField label='이름' type='text' name='nickname' />
        <FormField label='아이디' type='text' name='username' />
        <FormField label='비밀번호' type='password' name='password' />
        <FormField
          label='비밀번호 확인'
          type='password'
          name='password-confirm'
        />
      </FormFieldBox>
      <Button type='submit'>회원가입하기</Button>
    </StyledForm>
  );
}
