// 'use strict';
// module.exports = function(sequelize, Sequelize) {
//   var usergroups = sequelize.define('usergroups', {
//     GroupId: {
//         type: Sequelize.INTEGER,
//         references: { model: 'Users', key: 'id' },
//         onDelete: 'CASCADE'
//       },
//       UserId: {
//         type: Sequelize.INTEGER,
//         references: { model: 'Groups', key: 'id' },
//         onDelete: 'CASCADE'
//       }
//       role: {
//         type: Sequelize.string
//       }
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return usergroups;
// };