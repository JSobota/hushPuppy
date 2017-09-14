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
      notEmpty: true
    },
    endDate: {
      type: Sequelize.DATE
    },
  }, {
    classMethods: {
      associate: function(models) {
        Group.belongsTo(models.User, {through: UserGroups});
        Group.hasMany(models.Message);
      }
    }
  });
  return Group;
};