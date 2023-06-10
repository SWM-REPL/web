import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';

import { SignUpApiProps } from '../../apis/user/signup';
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

interface SignUpFormProps {
  formData: UseFormReturn<SignUpApiProps>;
}

export function SignUpForm({ formData }: SignUpFormProps) {
  const { signUp } = useAuth();
  const { handleSubmit, register } = formData;

  return (
    <StyledForm onSubmit={handleSubmit(signUp)}>
      <FormFieldBox>
        <FormField
          label='이름'
          name='name'
          register={register}
          options={{ required: true }}
          type='text'
        />
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
        <FormField
          label='비밀번호 확인'
          name='passwordConfirm'
          register={register}
          options={{
            required: true,
            validate: (value, formValue) => value === formValue.password,
          }}
          type='password'
        />
      </FormFieldBox>
      <Button variant='primary' type='submit'>
        회원가입하기
      </Button>
    </StyledForm>
  );
}
