import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import FindId from '../components/findId';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const FindIdWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fffaf6;
`;
const FindIdPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <FindIdWrapper>
        <FindId />
      </FindIdWrapper>
    </Container>
  );
};

export default FindIdPage;
