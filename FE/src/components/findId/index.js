import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submit: {
    'margin': theme.spacing(3, 3, 2),
    'background': '#AA856A',
    'color': 'white',
    'width': '150px',
    '&:hover': {
      backgroundColor: '#8f7667',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));
const Wrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  display-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

const FindId = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5' className={classes.title}>
          ID/비밀번호 찾기
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='email'
          />
          <Wrapper>
            <Button variant='contained' className={classes.submit}>
              ID 찾기
            </Button>

            <Button variant='contained' className={classes.submit}>
              비밀번호 찾기
            </Button>
          </Wrapper>
        </form>
      </div>
    </Container>
  );
};
export default FindId;
