import React from 'react';

import styled from 'styled-components';

import { More, Span, Title } from '../atoms';

const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export function TodoHeader() {
  return (
    <HeaderStack>
      <TitleStack>
        <Title medium>쏘마에서 할 일</Title>
        <Span>3명이 함께하고 있습니다</Span>
      </TitleStack>
      <MoreContainer>
        <More />
      </MoreContainer>
    </HeaderStack>
  );
}
