const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { comparePassword } = require('@utils/bcrypt');
const bcrypt = require('bcrypt');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require('dotenv').config();

const { auths, users, folders } = require('../models/index');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      const { id, displayName, emails } = profile;
      return auths.findOne({ where: { id } }).then((user) => {
        if (user) {
          users.findOne({ where: { user_idx: user.user_idx } }).then((userData) => {
            return cb(null, userData);
          });
        } else {
          users.create({ name: displayName, email: emails[0].value, oauth: 'Google' }).then((user) => {
            auths.create({ id, password: '', user_idx: user.user_idx }).then((auth) => {
              const query = {
                name: 'root',
                is_root: true,
                path: '/',
                parent_folder_idx: -1,
                user_idx: user.user_idx,
              };
              folders.create(query).then(() => {
                return cb(null, user);
              });
            });
          });
        }
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      return users
        .findByPk(jwtPayload.user_idx)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: 'id',
      passwordField: 'pass',
    },
    (id, password, done) => {
      return auths
        .findOne({ where: { id } })
        .then((user) => {
          const result = bcrypt.compareSync(password, user.password);
          if (!user || !result) {
            return done(null, false, { message: 'Incorrect' });
          }
          users.findOne({ where: { user_idx: user.user_idx } }).then((userData) => {
            return done(null, userData, { message: 'Logged In Successfully' });
          });
        })
        .catch((err) => done(err));
    }
  )
);
module.exports = passport;
