'use strict';
module.exports = function(sequelize, Sequelize) {
  var Group = sequelize.define('Group', {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    inviteCode: {
      type: Sequelize.STRING,
      notEmpty: false
    },
    endDate: {
      type: Sequelize.DATE
    },
    isMatched: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  Group.associate = function(models) {
    Group.belongsToMany(models.User, { through: models.UserGroups });
    Group.hasMany(models.Message);
  }

  return Group;
};
