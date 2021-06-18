import React from 'react';
import styled from 'styled-components';
import TestResultLayout from '@layouts/testResult-layout';
import Header from '@components/header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;

const TestResult = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <TestResultLayout />
    </Container>
  );
};

export default TestResult;
