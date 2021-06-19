const passport = require('@config/passport.config');
const authController = require('@/controllers/auth');
const express = require('express');

const router = express.Router();

router.post('/login', authController.login);
router.post('/reg', authController.singUp);
router.post('/reg/emaildup', authController.dupEmail);
router.post('/reg/iddup', authController.dupId);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  authController.googleLogin
);
module.exports = router;
