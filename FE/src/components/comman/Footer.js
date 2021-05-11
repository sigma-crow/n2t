import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Copyright() {
  return (
    <Typography variant='body2' color='textPrimary'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/sigma-crow'>
        LΣC
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[700],
    color: theme.palette.grey[300],
  },
  box: {
    'display': 'flex',
    'flexDirection': 'row',
    'alignItems': 'center',
    'marginBottom': theme.spacing(1),
    '&:nth-child(2)': {
      marginBottom: theme.spacing(0),
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth='sm' className={classes.container}>
          <Box className={classes.box}>
            <GitHubIcon className={classes.icon} />
            <Typography variant='body2'>
              <Link color='inherit' href='https://github.com/sigma-crow/n2t/'>
                N2T
              </Link>
            </Typography>
          </Box>
          <Box className={classes.box}>
            <MailOutlineIcon className={classes.icon} />
            <Typography variant='body2'>mon823@gmail.com</Typography>
          </Box>
          <Copyright />
        </Container>
      </footer>
    </>
  );
}
