import React from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

import styled from 'styled-components';

import { Span, Input } from '../atoms';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface FormFieldProps<FormType extends FieldValues> {
  label: string;
  name: Path<FormType>;
  register: UseFormRegister<FormType>;
  options: RegisterOptions;
  [key: string]: unknown;
}

export function FormField<FormType extends FieldValues>({
  label,
  name,
  register,
  options,
  ...props
}: FormFieldProps<FormType>) {
  return (
    <StyledFormField>
      <Span>{label}</Span>
      <Input {...register(name, options)} {...props} />
    </StyledFormField>
  );
}
