const Request = require("../models/request.model");

// @desc    Request for donate
// @route   POST /api/v1/users/request
exports.request = async (req, res, next) => {
  var request = new Request({
    user: req.body.user,
    ngo: req.body.ngo,
    address: req.body.address,
    items: req.body.items,
  });

  try {
    request = await request.save();
    res.status(200).send({
      message: "Request Added Successfully",
      request,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
