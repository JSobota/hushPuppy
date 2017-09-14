var express = require('express');
var router = express.Router();
var user = require('../models/user');
var passport = require('passport');

require('./api/users')(router, passport);
require('./api/group')(router);




router.route('/group')
  .get(function(req, res) {

  })

  .post(function(req, res) {

  })

router.route('/group/:id')
  // Get all users and messages for a specific group
  .get(function(req, res) {

  })

  // Update a group based on ID
  .put(function(req, res) {

  })

  // Delete a group based on ID
  .delete(function(req, res) {

  })

router.route('/group/:id/users')
  .get(function(req, res) {

  })

module.exports = router;