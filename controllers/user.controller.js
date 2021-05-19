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

// @desc    Get User by query params
// @route   GET /api/v1/users/get?field=value&....
exports.getUsersByQuery = async (req, res, next) => {
  var users = null;
  try {
    users = await Users.findOne(req.query);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Edit user by id
// @route   PUT /api/v1/users/:id
exports.editUser = async (req, res, next) => {
  var users = null;
  const filter = { _id: req.params.id };
  const changes = req.body;
  try {
    users = await Users.updateOne(filter, changes);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Delete user by id
// @route   DELETE /api/v1/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const response = await Users.deleteOne({ _id: req.params.id });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
