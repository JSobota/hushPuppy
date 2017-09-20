'use strict';
module.exports = function(sequelize, Sequelize) {
  var Message = sequelize.define('Message', {
    message: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    }
  });

  Message.associate = function(models) {
    Message.belongsTo(models.User);
    Message.belongsTo(models.Group);
  }

  return Message;
};