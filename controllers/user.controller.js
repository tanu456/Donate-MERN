const Users = require("../models/user.model");

// @desc    Get all users
// @route   GET /api/v1/users/all
exports.getAllUsers = async (req, res, next) => {
  var users = null;
  try {
    users = await Users.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
