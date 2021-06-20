const authService = require('@services/auth');
const userService = require('@services/user');
const folderService = require('@services/folder');
const { getEncryptedPassword } = require('@utils/bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const authController = {
  async googleLogin(req, res) {
    const { user } = req;
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '2h' });

    res.cookie('token', token);
    res.redirect('http://localhost:8080/');
  },
  async login(req, res) {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          result: false,
          message: 'Login Fail',
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '2h' });
        return res.json({ user, token });
      });
    })(req, res);
  },

  async dupId(req, res) {
    const { id } = req.body;
    const checkResult = await authService.checkId({ id });
    const response = {};
    response.result = checkResult;
    response.message = checkResult ? 'Pass Id Check' : 'This Id already exists';
    res.json(response);
  },
  async dupEmail(req, res) {
    const { email } = req.body;
    const checkResult = await userService.checkEmail({ email });
    const response = {};
    response.result = checkResult;
    response.message = checkResult ? 'Pass Email Check' : 'This Email already exists';
    res.json(response);
  },

  async singUp(req, res) {
    const { id, email, name, pass } = req.body;
    const response = {};
    const userResult = await userService.singup({ email, name });
    const { user_idx: userIdx } = userResult;
    if (!userResult) {
      response.result = false;
      response.message = 'Sign up Fail';
      res.status(500).json(response);
      return;
    }

    const encryptPassword = await getEncryptedPassword(pass);
    const authResult = await authService.singup({ id, pass: encryptPassword, userIdx });
    if (!authResult) {
      response.result = false;
      response.message = 'Sign up Fail';
      res.status(500).json(response);
      return;
    }

    const result = await folderService.createRoot({ userIdx });
    if (!result) {
      response.result = false;
      response.message = 'Sign up Fail';
      res.status(500).json(response);
      return;
    }
    // 여기서 root 폴더 만들기

    response.result = true;
    response.message = 'Sign up Success';
    res.json(response);
  },

  async islogin(req, res) {
    res.status(200).json({ result: true });
  },
};

module.exports = authController;
