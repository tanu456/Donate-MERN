const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact.controller");

// /api/v1/conatct
router.post("/", contactController.contactUs);


module.exports = router;

