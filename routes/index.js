const express = require("express");
const router = express.Router();

const users = require("./users");
const ngos = require("./ngos");

// /api/v1/users
router.use("/users", users);

// /api/v1/ngos
router.use("/ngos", ngos);

module.exports = router;
