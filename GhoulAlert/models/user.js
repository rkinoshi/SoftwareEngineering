'use strict';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  // Define the user model
  var User = sequelize.define('User', {
    // The user has a "username", of the string datatype, that is unique
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
          args: true,
          msg: "Username already exists; it must be unique."
      }
    },

    // The user has a "password", composed of a hash and salt
    hash: DataTypes.TEXT('long'),
    salt: DataTypes.TEXT('long')
  })

  User.prototype.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  }

  User.prototype.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  }

  User.prototype.generateJWT = function() {
    const today = new Date();
    const expires = new Date(today);
    expires.setDate(today.getDate() + 30);

    return jwt.sign({
      username: this.username,
      id: this._id,
      exp: parseInt(expires.getTime() / 1000, 10),
    }, 'secret');
  }

  User.prototype.toAuthJSON = function() {
      return {
        _id: this._id,
        username: this.username,
        token: this.generateJWT()
      };
  }

  return User;
}
