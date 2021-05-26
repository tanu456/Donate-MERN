var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.controller");
var { verify_token } = require("../middlewares");


//Prefix:: /api/v1/users

router.get("/all", verify_token, userController.getAllUsers);
router.get("/get", verify_token, userController.getUsersByQuery);
router.put("/:id", verify_token, userController.editUser);
router.delete("/:id", verify_token, userController.deleteUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/verify/:id", userController.verify);

module.exports = router;
