import React from 'react';
import styled from 'styled-components';
import * as Render from '@components/Markdown-it/render/index';
import {useLocation} from 'react-router-dom';
import testString from '@utils/testString';

const Wrapper = styled.div`
  height: 100%;
  width: auto;
  flex: 1;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  background: #fffaf6;
`;

const Title = styled.div`
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  diplay: flex;
  border-bottom: 1px solid gray;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px 15px 80px;
  margin-top: 15px;
`;

const AnswerWrapper = styled.div`
  width: 90%;
  padding: 50px;
  padding-bottom: 70px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

const Answer = () => {
  const location = useLocation();
  console.log(location.state);
  let inputText = testString;
  if (location.state) {
    inputText = location.state.inputText;
  }
  return (
    <Wrapper>
      <Title>노트에 대한 답안</Title>
      <AnswerWrapper>
        <Render.StrToHtml inputText={inputText} />
      </AnswerWrapper>
    </Wrapper>
  );
};

export default Answer;
