import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import LogIn from '@components/LogIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const LogInWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fffaf6;
`;
const LogInPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <LogInWrapper>
        <LogIn />
      </LogInWrapper>
    </Container>
  );
};

export default LogInPage;
