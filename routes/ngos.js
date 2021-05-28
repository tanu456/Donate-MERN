const express = require("express");
const router = express.Router();

const ngoController = require("../controllers/ngo.controller");

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

// /api/v1/ngos/login
router.post("/login", ngoController.login);

// /api/v1/ngos/verify/:id
router.get("/verify/:id", ngoController.verify);

module.exports = router;
