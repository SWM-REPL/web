import React from 'react';

import styled from 'styled-components';

import { NoteTitle as Title } from '../atoms/note-title';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export interface NoteTitleProps {
  title: string;
  subtitle?: string;
}

export function NoteTitle({ title, subtitle }: NoteTitleProps) {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      {subtitle && <Title variant='subtitle'>{subtitle}</Title>}
    </StyledContainer>
  );
}
