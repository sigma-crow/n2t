const passport = require('@config/passport.config');
const authController = require('@/controllers/auth');
const passportConfig = require('@/config/passport.config');

const jwtAuthenticate = passportConfig.authenticate('jwt', { session: false });
const express = require('express');

const router = express.Router();

router.post('/login', authController.login);
router.post('/reg', authController.singUp);
router.post('/reg/emaildup', authController.dupEmail);
router.post('/reg/iddup', authController.dupId);
router.get('/islogin', jwtAuthenticate, authController.islogin);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  authController.googleLogin
);

module.exports = router;
