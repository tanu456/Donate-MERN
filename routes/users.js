const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//Prefix:: /api/v1/users

router.get("/all", userController.getAllUsers);
router.get("/get", userController.getUsersByQuery);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);
router.post("/register",userController.register);
router.post("/login",userController.login);
router.get("/verify", userController.verify);

module.exports = router;
