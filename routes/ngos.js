const express = require("express");
const router = express.Router();
const { verify_token } = require("../middlewares");
const ngoController = require("../controllers/ngo.controller");

// /api/v1/ngos/all
router.get("/all",verify_token, ngoController.getAllNgos);

// /api/v1/ngos/:id
router.get("/get",verify_token, ngoController.getNgoByQuery);

// /api/v1/ngos/:id
router.delete("/:id",verify_token, ngoController.deleteNgoById);

// /api/v1/ngos/create
router.post("/create", ngoController.createNgo);

// /api/v1/ngos/:id
router.put("/:id",verify_token, ngoController.editNgo);

// /api/v1/ngos/login
router.post("/login", ngoController.login);

// /api/v1/ngos/verify/:id
router.get("/verify/:id", ngoController.verify);

module.exports = router;
