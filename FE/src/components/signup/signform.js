import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  formContainer: {
    width: '412px',
    height: '520px',
    marginTop: '24px',
  },
  idTextField: {
    margin: '8px',
    width: '207px',
  },
  FormTextField: {
    margin: '8px',
    width: '300px',
  },
  checkIdButton: {
    margin: '10px',
    marginTop: '20px',
  },
  multiButton: {
    margin: theme.spacing(2),
    width: '300px',
  },
}));
const RegisterPage = (props) => {
  // props , state -> 이 안에서는 state 를 변화시켜서 이 안의 데이터를 변화시킬 수 있음
  // 입력한 이메일과 비밀번호를 서버에 넘길 수 있도록 state 에서 받고 있음
  const [Email, setEmail] = useState('');
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onconfirmPasswordHandler = (e) => {
    setconfirmPassword(e.currentTarget.value);
  };

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const hasNotSameError = (passwordEntered) =>
    Password != confirmPassword ? true : false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== confirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs' className={classes.formContainer}>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5' className={classes.title}>
          Sign Up
        </Typography>
        <form className={classes.root} noValidate onSubmit={onSubmitHandler}>
          <Grid item xs={12}>
            <TextField
              className={classes.idTextField}
              id='id'
              label='ID'
              variant='outlined'
              value={Id}
              onChange={onIdHandler}
            />
            <Button
              className={classes.checkIdButton}
              size='small'
              variant='contained'
              color='primary'
            >
              중복확인
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.FormTextField}
              variant='outlined'
              fullWidth
              value={Name}
              onChange={onNameHandler}
              id='name'
              label='이름'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.FormTextField}
              variant='outlined'
              fullWidth
              value={Email}
              onChange={onEmailHandler}
              id='email'
              label='이메일'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.FormTextField}
              variant='outlined'
              fullWidth
              value={Password}
              onChange={onPasswordHandler}
              label='비밀번호'
              type='password'
              id='password'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.FormTextField}
              variant='outlined'
              fullWidth
              value={confirmPassword}
              onChange={onconfirmPasswordHandler}
              error={hasNotSameError('confirmPassword')}
              helperText={
                hasNotSameError('confirmPassword')
                  ? '입력한 비밀번호와 일치하지 않습니다.'
                  : null
              }
              label='비밀번호 확인'
              type='password'
              id='confirmPassword'
            />
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onSubmit={onSubmitHandler}
            color='primary'
            className={classes.multiButton}
          >
            회원가입
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default RegisterPage;
