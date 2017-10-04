'use strict';
module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('User', {
    firstname: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: true
    },
    last_login: {
      type: Sequelize.DATE
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Group, { through: models.UserGroups });
    User.hasMany(models.Message);
  }

  return User;
};
