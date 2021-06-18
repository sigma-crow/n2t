import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Card,
  Container,
  IconButton,
  InputBase,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '150px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 900,
    marginBottom: 40,
  },
  input: {
    marginLeft: theme.spacing(3),
    width: 850,
  },
  inputButton: {
    padding: 10,
  },
  notesRoot: {
    width: 1200,
    height: 600,
    display: 'flex',
    justifyContent: 'center',
  },
  cardRoot: {
    height: 200,
    width: 180,
    margin: '0 auto',
  },
}));

const SectionSearch = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper className={classes.searchRoot} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder='Search..'
          inputProps={{'aria-label': 'search public notes'}}
        />
        <IconButton className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper className={classes.notesRoot} elevation={3}>
        <Grid container justify='center'>
          <Grid
            container
            item
            xs={12}
            spacing={4}
            justify='center'
            alignItems='center'
          >
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={4}
            justify='center'
            alignItems='center'
          >
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.cardRoot} />
            </Grid>
          </Grid>
        </Grid>

        {/* <Card className={classes.cardRoot}>
          <CardContent className={classes.cardContent}>
            <Typography component='h5' variant='h5'>
              토익
            </Typography>
          </CardContent>
        </Card> */}
      </Paper>
    </Container>
  );
};

export default SectionSearch;
