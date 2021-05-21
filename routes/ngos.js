var express = require("express");
var router = express.Router();

var ngoController = require("../controllers/ngo.controller");

// /api/v1/ngos/all
router.get("/all", ngoController.getAllNgos);

// /api/v1/ngos/:id
router.get("/get", ngoController.getNgoByQuery);

// /api/v1/ngos/:id
router.delete("/:id", ngoController.deleteNgoById);

// /api/v1/ngos/create
router.post("/create", ngoController.createNgo);

// /api/v1/ngos/:id
router.put("/:id", ngoController.editNgo);

module.exports = router;
