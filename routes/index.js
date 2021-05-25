const express = require("express");
const router = express.Router();

const ngos = require("./ngos");

var users = require("./users");
var request = require("./request");
var contact = require("./contact");
// /api/v1/users
router.use("/users", users);

// /api/v1/request
router.use("/request", request);

// /api/v1/ngos
router.use("/ngos", ngos);

// /api/v1/contact
router.use("/contact", contact);

module.exports = router;
