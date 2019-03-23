'use strict';

var models  = require('../models');
var passport = require('passport');
var localStrat = require('passport-local');

var User = model.User;

passport.use(new localStrat({
  usernameField: 'user[username]',
  passwordField: 'user[password]',
}, (username, password, done) => {
  User.findOne({ where: {title: 'aProject'} }).then((user) => {
    if(!user || !user.validatePassword(password)) {
      return done(null, false, { errors: {'username or password': 'is invalid'}});
    }

    return done(null, user);
  }).catch(done);
}));
