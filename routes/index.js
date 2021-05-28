const express = require("express");
const router = express.Router();

const ngos = require("./ngos");

const users = require("./users");
const contact = require("./contact");
const request = require("./request");

// /api/v1/users
router.use("/users", users);

// /api/v1/ngos
router.use("/ngos", ngos);

// /api/v1/contact
router.use("/contact", contact);

// /api/v1/request
router.use("/request", request);

module.exports = router;
