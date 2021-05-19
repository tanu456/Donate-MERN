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
var request = require("./request");

// /api/v1/users
router.use("/users", users);
router.use("/request", request);

module.exports = router;

module.exports = router;
