var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.controller");

//Prefix:: /api/v1/users

router.get("/all", userController.getAllUsers);
router.get("/get", userController.getUsersByQuery);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);
router.post("/register",userController.register);
router.post("/login",userController.login);
router.get("/verify", userController.verify);

module.exports = router;
