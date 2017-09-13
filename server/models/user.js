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
    },
    status: {
      type: Sequelize.ENUM("user", "admin"),
      defaultValue: "user"
    },
  });
  
  return User;
};