import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import * as Rander from '@components/Markdown-it/render/index';
import testString from '@utils/testString';
import {ImArrowRight} from 'react-icons/im';
const useStyles = makeStyles(() => ({
  exampleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '50px auto',
  },
  originalText: {
    padding: '15px',
    width: '48%',
    borderRadius: '10px',
    marginRight: '15px',
  },
  markdownText: {
    padding: '15px',
    width: '48%',
    borderRadius: '10px',
    marginLeft: '13px',
  },
}));

const ExampleContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.exampleContainer}>
      <Paper className={classes.originalText} elevation={3}>
        <Typography variant='body1'>
          # N2T
          <br />
          <br />
          ## 정리에서 @b문제@b를 내면??
          <br />
          <br />
          1. N2T는 @h@bNote to Test@b@h 의 줄임말이다.
          <br />
          2. N2T는 @bLimit Sigma Crow@b 팀에서 제작 중이다.
          <br />
          <br />
          ## custom Tag
          <br />
          <br />
          - @ + u -> @u밑줄@u
          <br />
          - @ + h -> @h하이라이트@h
          <br />- @ + b -> @b색 변경(파랑 등 설정 가능)@b
        </Typography>
      </Paper>
      <ImArrowRight fontSize='40px' color='red' />
      <Paper className={classes.markdownText} id='boundary' elevation={3}>
        <Rander.StrToHtml inputText={testString} />
      </Paper>
    </Container>
  );
};

export default ExampleContainer;
