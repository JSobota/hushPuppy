'use strict';
module.exports = function(sequelize, Sequelize) {
  var UserGroup = sequelize.define('UserGroups', {
    role: {
      type: Sequelize.STRING,
    },
    matchId: {
      type: Sequelize.INTEGER,
      notEmpty: false
    }
  });

  return UserGroup;
};