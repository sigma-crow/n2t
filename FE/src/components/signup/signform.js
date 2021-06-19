import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react';
import {dupEmail, dupId, singUp} from '@api';

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
  const history = useHistory();
  const [Email, setEmail] = useState('');
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [check, setCheck] = useState({id: false, email: false});

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
    setCheck({
      ...check,
      email: false,
    });
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
    setCheck({
      ...check,
      id: false,
    });
  };

  const hasNotSameError = (passwordEntered) =>
    Password != confirmPassword ? true : false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== confirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }
  };

  const dupEmailBtn = () => {
    dupEmail({email: Email}).then((data) => {
      if (!data.result) {
        alert('이메일 중복');
        setEmail('');
      } else {
        alert('이메일 사용가능');
        setCheck({
          ...check,
          email: true,
        });
      }
    });
  };
  const dupIdBtn = () => {
    dupId({id: Id}).then((data) => {
      if (!data.result) {
        alert('아이디 중복');
        setId('');
      } else {
        alert('아이디 사용가능');
        setCheck({
          ...check,
          id: true,
        });
      }
    });
  };
  const singUpBtn = () => {
    if (!check.id || !check.email) {
      alert('중복검사를 진행해주세요');
      return;
    }
    singUp({
      id: Id,
      name: Name,
      email: Email,
      pass: Password,
    }).then((data) => {
      if (data.result) {
        alert(data.message);
        window.location.reload();
      } else {
        alert(data.message);
      }
    });
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
              onClick={dupIdBtn}
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
              className={classes.idTextField}
              variant='outlined'
              fullWidth
              value={Email}
              onChange={onEmailHandler}
              id='email'
              label='이메일'
            />

            <Button
              className={classes.checkIdButton}
              size='small'
              variant='contained'
              color='primary'
              onClick={dupEmailBtn}
            >
              중복확인
            </Button>
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
            onClick={singUpBtn}
          >
            회원가입
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default RegisterPage;
