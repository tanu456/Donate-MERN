const Request = require("../models/donation.model");

// @desc    Request for donate
// @route   POST /api/v1/request
exports.request = async (req, res, next) => {
  var request = new Request({
    user: req.body.user,
    ngo: req.body.ngo,
    location: req.body.location,
    current_state: req.body.current_state,
    item_images: req.body.item_images,
    pickup_person: req.body.pickup_person,
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

// @desc   Cancel Request
// @route   POST /api/v1/request/:id/cancel

exports.requestCancel = async (req, res, next) => {
  var request = null;
  try {
    request = await Request.updateOne(
      { _id: req.params.id },
      { $set: { current_state: "CANCELLED" } }
    );

    res.status(200).send({
      message: "Request Cancelled Successfully",
      request,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while processing your request.",
    });
  }
};
