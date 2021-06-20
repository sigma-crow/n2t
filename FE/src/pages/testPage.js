import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import ResultBtn from '@components/resultBtn';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Rander from '@components/Markdown-it/render/index';
import {useHistory, useLocation} from 'react-router-dom';
import testString from '@utils/testString';

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

const TestPage = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  let inputText = testString;
  if (location.state) {
    inputText = location.state.inputText;
  }

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
          <Rander.HtmlToTest inputText={inputText} />
        </HtmlWrapper>
      </TestWrapper>
    </Container>
  );
};

export default TestPage;
