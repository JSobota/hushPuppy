'use strict';
var faker = require('faker');
var bCrypt = require('bcrypt-nodejs');

var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var tempPassword = generateHash('test');

var userData = [];
for (var i = 0; i < 50; i++) {
  if (i < 25) {
    userData[i] = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'user' + i + '@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  } else {
    userData[i] = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: 'admin' + (i - 24) + '@gmail.com',
      password: tempPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }

}
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', userData)
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
