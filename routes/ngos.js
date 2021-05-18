var express = require("express");
var router = express.Router();

var ngoController = require("../controllers/ngo.controller");

// /api/v1/ngos/all
router.get("/all", ngoController.getAllNgos);

// /api/v1/ngos/:id
router.get("/:id", ngoController.getNgoById);

module.exports = router;
