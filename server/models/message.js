'use strict';
module.exports = function(sequelize, Sequelize) {
  var Message = sequelize.define('Message', {
    message: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.User);
        Message.belongsTo(models.Group);
      }
    }
  });
  return Message;
};
