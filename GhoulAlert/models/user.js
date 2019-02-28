'use strict';

module.exports = (sequelize, DataTypes) => {
  // Define the user model
  var User = sequelize.define('User', {
    // The user has a "username", of the string datatype
    username: DataTypes.STRING,
    // The user has a "password", also of the string datatype
    // TEMPORARY - A more secure option will be used when authorization is integrated
    password: DataTypes.STRING
  })

  return User;
}
