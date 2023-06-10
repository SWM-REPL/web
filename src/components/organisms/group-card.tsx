import React from 'react';

import styled from 'styled-components';

import { Button } from '../atoms';
import { NoteTitle, PersonProfile } from '../molecules';

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 1px solid ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 0.5rem 1rem;
`;

const ProfileContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

export function GroupCard() {
  return (
    <CardContainer>
      <NoteTitle title='그루비룸' subtitle='어쩔티비저쩔그룹' />
      <ProfileContainer>
        <PersonProfile
          profileUrl='https://unsplash.com/photos/aTbBancIbUg/download'
          name='리엑트1'
        />
        <PersonProfile
          profileUrl='https://unsplash.com/photos/aTbBancIbUg/download'
          name='리엑트2'
        />
        <PersonProfile
          profileUrl='https://unsplash.com/photos/aTbBancIbUg/download'
          name='리엑트3'
        />
        <PersonProfile
          profileUrl='https://unsplash.com/photos/aTbBancIbUg/download'
          name='리엑트4'
        />
      </ProfileContainer>
      <Button>참여하기</Button>
    </CardContainer>
  );
}
