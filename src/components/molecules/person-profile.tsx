import React from 'react';

import styled from 'styled-components';

import { CirclePicture, NoteTitle } from '../atoms';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PersonProfileProps {
  profileUrl: string;
  name: string;
}

export function PersonProfile({ profileUrl, name }: PersonProfileProps) {
  return (
    <StyledContainer>
      <CirclePicture src={profileUrl} />
      <NoteTitle variant='subtitle'>{name}</NoteTitle>
    </StyledContainer>
  );
}
