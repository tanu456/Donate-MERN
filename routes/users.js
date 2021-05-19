var express = require("express");
var router = express.Router();

var userController = require("../controllers/user.controller");

// /api/v1/users/all
router.get("/all", userController.getAllUsers);

module.exports = router;
