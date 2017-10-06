'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('UserGroups', {
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserGroups');
  }
};