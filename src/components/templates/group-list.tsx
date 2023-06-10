import React from 'react';

import styled from 'styled-components';

import { Title } from '../atoms';
import { GroupCard } from '../organisms/group-card';

const StyledGroupList = styled.div`
  box-sizing: border-box;
  padding: 0 2.5rem;
  row-gap: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export function GroupList() {
  return (
    <StyledGroupList>
      <Title>그룹 상세</Title>
      <GroupCard />
    </StyledGroupList>
  );
}
