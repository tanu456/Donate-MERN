var express = require("express");
var router = express.Router();

var requestController = require("../controllers/request.controller");

// /api/v1/request
router.post("/", requestController.request);

// /api/v1/request/:id/cancel
router.get("/:id/cancel", requestController.requestCancel);


module.exports = router;
