import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  explainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  howToUse: {
    width: '70%',
    padding: '15px',
    borderRadius: '10px',
    margin: '20px 0',
    backgroundColor: '#f2ebe6',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '15px 0',
    color: '#5F4836',
  },
  explain: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10px',
    borderRadius: '10px',
  },
  rule: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '96px',
    width: '80px',
    marginRight: '30px',
    maxWidth: '80px',
    backgroundColor: '#f2ebe6',
    color: '#5F4836',
  },
  testButton: {
    backgroundColor: '#aa856a',
    color: 'white',
    marginBottom: '30px',
  },
}));

const ExplainContainer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.explainContainer}>
      <Button
        className={classes.testButton}
        variant='contained'
        size='large'
        onClick={() => history.push('/test')}
      >
        시험보러가기
      </Button>
      <Paper className={classes.howToUse} elevation={3}>
        <Container className={classes.wrapper}>
          <Typography variant='h4'>N2T 설명서</Typography>
        </Container>
        <Container className={classes.wrapper}>
          <Card className={classes.rule} elevation={0}>
            <Typography variant='h5'>@u</Typography>
          </Card>
          <Card className={classes.explain} elevation={0}>
            <Typography variant='h6'>안녕 나는 @u최준@u이라고 해</Typography>
            <Typography variant='h6'>
              안녕 나는 <u>최준</u>이라고 해
            </Typography>
          </Card>
        </Container>
        <Container className={classes.wrapper}>
          <Card className={classes.rule} elevation={0}>
            <Typography variant='h5'>@h</Typography>
          </Card>
          <Card className={classes.explain} elevation={0}>
            <Typography variant='h6'>안녕 나는 @h최준@h이라고 해</Typography>
            <Typography variant='h6'>
              안녕 나는 <span id='highlight'>최준</span>이라고 해
            </Typography>
          </Card>
        </Container>
        <Container className={classes.wrapper}>
          <Card className={classes.rule} elevation={0}>
            <Typography variant='h5'>@b</Typography>
          </Card>
          <Card className={classes.explain} elevation={0}>
            <Typography variant='h6'>안녕 나는 @b최준@b이라고 해</Typography>
            <Typography variant='h6'>
              안녕 나는 <span id='blue'>최준</span>이라고 해
            </Typography>
          </Card>
        </Container>
        <Container className={classes.wrapper}>
          <Card className={classes.rule} elevation={0}>
            <Typography variant='h5'>**</Typography>
          </Card>
          <Card className={classes.explain} elevation={0}>
            <Typography variant='h6'>안녕 나는 **최준**이라고 해</Typography>
            <Typography variant='h6'>
              안녕 나는 <strong>최준</strong>이라고 해
            </Typography>
          </Card>
        </Container>
      </Paper>
    </Container>
  );
};

export default ExplainContainer;
