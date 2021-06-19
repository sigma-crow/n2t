import React from 'react';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import {FcGoogle} from 'react-icons/fc';
import ModalDialog from '@components/signup/ModalDialog';
import {Login, googleLogin} from '@api';
import {useInput} from '@hooks/useInput';
import storageHandler from '@utils/localStorage';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#AA856A',
    color: 'white',
    width: '200px',
  },
}));
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;
const TextWrapper = styled.a`
  display: flex;
  margin-left: 25px;
`;

const GLabel = styled.button`
  position: relative;
  display: inline-flex;
  outline: none;
  color: black;
  border: none;
  align-items: center;
  background-color: #e5e5e5;
  cursor: pointer;
  border-radius: 4px;
  width: 200px;
  height: 36.3px;
  margin-top: 50px;
  padding: 0 20px;

  &:hover {
    background: #c7c4bb;
  }
`;

const LogIn = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [id, setId] = useInput('');
  const [pass, setPass] = useInput('');
  const history = useHistory();
  const clickLogin = () => {
    Login({id, pass}).then((data) => {
      storageHandler.set(data.token);
      history.push('/');
    });
  };

  const googleLoginBtn = () => {
    googleLogin();
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='ID'
            onChange={setId}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            type='password'
            label='Password'
            onChange={setPass}
          />
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' color='inherit'>
                ID/Password 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link
                href='#'
                variant='body2'
                color='inherit'
                onClick={handleOpen}
              >
                회원가입
              </Link>
              <ModalDialog open={open} handleClose={handleClose} />
            </Grid>
          </Grid>
          <Wrapper>
            <Button
              variant='contained'
              onClick={clickLogin}
              className={classes.submit}
            >
              Log In
            </Button>
          </Wrapper>
          <Wrapper>
            <GLabel>
              <FcGoogle size='20' />
              <TextWrapper href='api/auth/google'>Google 로그인</TextWrapper>
            </GLabel>
          </Wrapper>
        </form>
      </div>
    </Container>
  );
};
export default LogIn;
