import React from 'react';
import GifPlayer from 'react-gif-player';
import {makeStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Container} from '@material-ui/core';
import gif from '../../../static/tutorial.gif';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0px auto 200px auto',
  },
  root: {
    height: '46vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 800,
    minWidth: 800,
    backgroundColor: theme.palette.grey[100],
    margin: '0px auto',
  },
  appBar: {
    backgroundColor: '#82634c',
    maxWidth: 800,
    minWidth: 800,
    margin: '0px auto',
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
          <GifPlayer gif={gif} />
        </Card>
      </Container>
    </>
  );
};

export default GifSection;
