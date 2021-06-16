import React from 'react';
import styled from 'styled-components';
import Header from '@components/header';
import ResultBtn from '../components/resultBtn';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  justify-content: center;
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
      </TestWrapper>
    </Container>
  );
};

export default TestPage;
