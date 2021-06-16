import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import ResultBtn from '@components/resultBtn';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Rander from '@components/Markdown-it/render/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  height: 80px;
`;
const TestWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  // justify-content: center;
  background: #fffaf6;
`;
const TitleWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  width: 70%;
  height: 100px;
  flex-direction: row;
  justify-content: center;
`;
const useStyles = makeStyles((theme) => ({
  titleText: {
    margin: theme.spacing(4.2, 0, 2),
    fontWeight: 'bold',
  },
}));
const TestPage = () => {
  // Props 받기
  const classes = useStyles();
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <TestWrapper>
        <TitleWrapper>
          <Typography variant='h4' component='h2' className={classes.titleText}>
            N2T 노트에 대한 시험
          </Typography>
          <ResultBtn />
        </TitleWrapper>
        <Rander.HtmlToTest
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
      </TestWrapper>
    </Container>
  );
};

export default TestPage;
