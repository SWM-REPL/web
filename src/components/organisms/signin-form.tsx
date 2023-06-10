import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';

import { SignInApiProps } from '../../apis/user/signin';
import { useAuth } from '../../hooks/useAuth';
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

interface SignInFormProps {
  formData: UseFormReturn<SignInApiProps>;
}

export function SignInForm({ formData }: SignInFormProps) {
  const { signIn } = useAuth();
  const { handleSubmit, register } = formData;
  return (
    <StyledForm onSubmit={handleSubmit(signIn)}>
      <FormFieldBox>
        <FormField
          label='아이디'
          name='username'
          register={register}
          options={{ required: true }}
          type='text'
        />
        <FormField
          label='비밀번호'
          name='password'
          register={register}
          options={{ required: true }}
          type='password'
        />
      </FormFieldBox>
      <Button variant='primary' type='submit'>
        로그인하기
      </Button>
    </StyledForm>
  );
}
