var express = require('express');
var router = express.Router();
var user = require('../models/user');
var passport = require('passport');

require('./api/users')(router, passport);
require('./api/group')(router);

module.exports = router;