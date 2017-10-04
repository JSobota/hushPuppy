'use strict';
const faker = require('faker');
const bCrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize')
const models = require('../models/');

var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var tempPassword = generateHash('test');

var userData = [];
for (var i = 0; i < 3; i++) {
  userData[i] = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: 'admin' + (i + 1) + '@gmail.com',
    password: tempPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

for (var i = 0; i < 69; i++) {
  userData[i + 3] = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: 'user' + (i + 1) + '@gmail.com',
    password: tempPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

var groupData = [];
for (var i = 0; i < 3; i++) {
  groupData[i] = {
    name: 'Company' + i,
    inviteCode: 'joinMe' + i,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

var membershipData = [];
for (var i = 1; i < userData.length; i++) {
  membershipData[i] = {
    UserId: i,
    GroupId: ((i % 3) + 1),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}



module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', userData)
      .then(() => queryInterface.bulkInsert('Groups', groupData))
      .then(() => {
        models.User.findAll().then(userResults => {
          console.log(userResults);
          models.Group.findAll().then(groupResults => {
            console.log(groupResults);
          })
        })
        // queryInterface.bulkInsert('usergroups', membershipData) 
      })


  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
      .then(() => queryInterface.bulkDelete('Groups', null, {}))
      .then(() => queryInterface.bulkDelete('UserGroups', null, {}))
  }
};