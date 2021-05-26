var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.controller");
var middlewares = require('../middlewares');

//Prefix:: /api/v1/users

router.get("/all",middlewares.verify_token, userController.getAllUsers);
router.get("/get", userController.getUsersByQuery);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);
router.post("/register",userController.register);
router.post("/login",userController.login);
router.get("/verify/:id", userController.verify);

module.exports = router;
