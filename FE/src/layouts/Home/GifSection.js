import React from 'react';
import GifPlayer from 'react-gif-player';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Button, CardActions, Container} from '@material-ui/core';
import brown from '@material-ui/core/colors/brown';
import still from '../../../static/gif-still2.png';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '200px auto',
  },
  root: {
    height: '46vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 640,
    minWidth: 300,
    backgroundColor: theme.palette.grey[100],
    margin: '0px auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '10%',
  },
  appBar: {
    backgroundColor: '#82634c',
    maxWidth: 640,
    minWidth: 300,
    margin: '0px auto',
  },
  media: {
    margin: '15px 0px',
    width: '80%',
    height: '70%',
  },
  button: {
    color: '#795548',
  },
}));

const GifSection = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Typography component='h2' variant='h4'>
              N2T 배우기
            </Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.root} elevation={5}>
          <GifPlayer
            still={still}
            gif='https://post-phinf.pstatic.net/MjAxODEyMTFfMTAw/MDAxNTQ0NTA0MDgyOTMz.bD3_qYAKhivyntOXUfWOxIDab4msHT-KNMDDwq3oMnIg.4tDkeh83lxHseQFLoy4c9JAXtfdy3iyPzGlN_2JWLqYg.GIF/cat-typing-furiously.gif?type=w1200'
          />
          <CardContent className={classes.content}>
            <Button className={classes.button}>
              <Typography component='h5' variant='h5'>
                영상 따라해보기
              </Typography>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default GifSection;
