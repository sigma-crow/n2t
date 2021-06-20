require('module-alias/register');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passportConfig = require('@/config/passport.config');

const authRouter = require('@routes/auth');
const noteRouter = require('@routes/note');
const searchRouter = require('@routes/search');
const indexRouter = require('@routes/index');
const usersRouter = require('@routes/users');
const { sequelize } = require('@models/index');

sequelize.sync();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passportConfig.initialize());
const jwtAuthenticate = passportConfig.authenticate('jwt', { session: false });

app.use('/api/auth', authRouter);
app.use('/api/note', jwtAuthenticate, noteRouter);
app.use('/api/search', searchRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
