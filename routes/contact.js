var express = require("express");
var router = express.Router();

var contactController = require("../controllers/contact.controller");

// /api/v1/conatct
router.post("/", contactController.contact_us);


module.exports = router;
