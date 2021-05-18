var express = require("express");
var router = express.Router();
var path = require("path");

var users = require("./users");

// /api/v1/users
router.use("/users", users);
var express = require("express");
var router = express.Router();
var path = require("path");

var users = require("./users");

// /api/v1/users
router.use("/users", users);

module.exports = router;

module.exports = router;
