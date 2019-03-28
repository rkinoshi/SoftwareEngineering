var passport = require('passport');
var router = require('express').Router();
var auth = require('../authorize');
var models  = require('../../models');
const Sequelize = require('sequelize');

var User = models.User;

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
  var user = req.body;

  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  var finalUser = User.build(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json(finalUser.toAuthJSON()))
    .catch(Sequelize.ValidationError, function (error) {
      res.json({ error: { message: error.message } });
    });
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
  var user = req.body;

  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json(user.toAuthJSON());
    }

    return res.status(400).info;
  })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  var username = req.payload.username;

  return User.findOne({ where: {username: username} })
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json(user.toAuthJSON());
    });
});

module.exports = router;
