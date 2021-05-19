var express = require("express");
var router = express.Router();

var requestController = require("../controllers/request.controller");

// /api/v1/users/request
router.post("/", requestController.request);

module.exports = router;
