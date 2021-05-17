var express = require('express');
var router = express.Router();

var userController = require('../controllers/user.controller');


router.get('/all' , userController.getAllUsers);

module.exports =router;
