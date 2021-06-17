import React from 'react';
import styled from 'styled-components';
import Answer from '@/components/testResult/answer';
import TestResult from '@/components/testResult/testResult';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(100vh - 5rem);
  background: #fffaf6;
`;

const Line = styled.div`
  height: 100%;
  border-right: 2px solid gray;
`;

const TestResultLayout = () => {
  return (
    <Wrapper>
      <TestResult />
      <Line />
      <Answer />
    </Wrapper>
  );
};

export default TestResultLayout;
