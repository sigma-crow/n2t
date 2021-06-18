import React, {useEffect} from 'react';
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
const HtmlWrapper = styled.div`
  width: 50%;
  padding: 50px;
  padding-bottom: 70px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;

const useStyles = makeStyles((theme) => ({
  titleText: {
    margin: theme.spacing(4.2, 0, 2),
    fontWeight: 'bold',
  },
}));

const TestPage = ({history}) => {
  // Props 받기
  const classes = useStyles();
  // const history = useHistory();
  useEffect(() => {
    const unblock = history.block(() => {
      return window.confirm('정말이동하시겠습니까?');
    });
    return () => {
      unblock();
    };
  }, []);
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
        <HtmlWrapper id='boundary'>
          <Rander.HtmlToTest
            // 여기서 값을 바꾸고
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
        </HtmlWrapper>
      </TestWrapper>
    </Container>
  );
};

export default TestPage;
