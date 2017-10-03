'use strict';
module.exports = function(sequelize, Sequelize) {
  var UserGroup = sequelize.define('UserGroups', {
    GroupId: {
      type: Sequelize.INTEGER,
      references: { model: 'Group', key: 'id' },
      onDelete: 'CASCADE'
    },
    UserId: {
      type: Sequelize.INTEGER,
      references: { model: 'User', key: 'id' },
      onDelete: 'CASCADE'
    },
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