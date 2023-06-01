import React from 'react';

import { Span, Input } from '../atoms';

import styled from 'styled-components';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

interface FormFieldProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function FormField({ label, ...props }: FormFieldProps) {
  return (
    <StyledFormField>
      <Span>{label}</Span>
      <Input {...props} />
    </StyledFormField>
  );
}
