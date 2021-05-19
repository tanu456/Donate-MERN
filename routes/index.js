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
var ngos = require("./ngos");

// /api/v1/users
router.use("/users", users);

// /api/v1/ngos
router.use("/ngos", ngos);

module.exports = router;

