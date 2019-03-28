'use strict';

module.exports = (sequelize, DataTypes) => {
  var Marker = sequelize.define('Marker', {
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      description: DataTypes.STRING
  })

  return Marker;
}
