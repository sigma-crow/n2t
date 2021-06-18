import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import EditorLayout from '@/layouts/editor-layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const EditorPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <EditorLayout />
    </Container>
  );
};

export default EditorPage;
