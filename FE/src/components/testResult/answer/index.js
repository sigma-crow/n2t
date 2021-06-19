import React from 'react';
import styled from 'styled-components';
import * as Render from '@components/Markdown-it/render/index';

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
  return (
    <Wrapper>
      <Title>N2T 노트에 대한 답안</Title>
      <AnswerWrapper>
        <Render.StrToHtml
          txt='
          # N2T

          ## 정리에서 @b문제@b를 내면??
          
          1. N2T는 @h@bNote to Test@b@h 의 줄임말이다.
          
          2. N2T는 @bLimit Sigma Crow@b 팀에서 제작 중이다.
          
          ## custom Tag

          - @ + u  -> @u밑줄@u 
          - @ + h  -> @h하이라이트@h
          - @ + b  -> @b색 변경(파랑 등 설정 가능)@b
          
        '
        />
      </AnswerWrapper>
    </Wrapper>
  );
};

export default Answer;
