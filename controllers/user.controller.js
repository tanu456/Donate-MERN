const Users = require("../models/user.model");

// @desc    Get all users
// @route   GET /api/v1/users/all
exports.getAllUsers =  (req, res, next) => {
    Users.find({})
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving entries.",
            });
        });
};
