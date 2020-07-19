'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    appMetadata: DataTypes.STRING,
    email: DataTypes.STRING,
    Verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    permissions: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post);
  };
  return User;
};