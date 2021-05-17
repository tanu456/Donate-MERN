var express = require('express');
var router = express.Router();
var path = require('path');

var users = require('./users');


router.use('/users',users)


module.exports = router;
