import styled from 'styled-components';
import React from 'react';
import Mynote from '@components/mynote_content';
import Sidebar from '@components/sidebar';
import Header from '@components/header';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const ListWrapper = styled.div`
  flex: 1.3;
  overflow: auto;
`;
const Wrapper = styled.div`
  background: #fffaf6;
  flex: 4;
`;
const MynotePage = () => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <ListWrapper>
          <Sidebar />
        </ListWrapper>
        <Wrapper>
          <Mynote />
        </Wrapper>
      </Container>
    </>
  );
};
export default MynotePage;
