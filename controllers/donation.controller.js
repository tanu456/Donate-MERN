const Donation = require("../models/donation.model");
const Users = require("../models/user.model");
const NGOs = require("../models/ngo.model");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const logger = require("../utils/logger");

//Make account on sendgrid and create api key and add in env file and verify sender
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// @desc    Request for donate
// @route   POST /api/v1/request
exports.request = async (req, res, next) => {
  const user = await Users.findOne({_id : req.body.userId});
  logger.debug("Donation User", user);

  const ngo = await NGOs.findOne({_id : req.body.ngoId})
  logger.debug("Donation NGO", ngo);

  const donation = new Donation({
    user: user._id,
    ngo: ngo._id,
    location: req.body.location,
    current_state: req.body.current_state,
    // item_images: req.body.item_images,
    items: req.body.items,
  });
  logger.debug("Donation", donation);

  try {
    const donate = await donation.save();
    logger.info("Donation request saved", donate);

    await sgMail.send({
      from: "ngo.donation.108@gmail.com",
      to: "ngo.donate.querry@gmail.com",
      subject: "Notification",
      text:
        "You have got a pickup request from "+req.body.username+"\n Please pickup from the address "+ req.body.location + 
        "\n\nThank You!\n",
    });

    logger.info("Donation request email sent successfully");

    res.status(200).send({
      message: "Request Added Successfully and notified ngos",
      donate,
    });
  } catch (err) {
    logger.error("Error in sending donation request email", err);
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc   Cancel Request
// @route   POST /api/v1/request/:id/cancel

exports.requestCancel = async (req, res, next) => {
  try {
    const donation = await Donation.updateOne(
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

// @desc Update Request Status
// @route PUT /api/v1/request/edit/:id

exports.editRequest = async (req, res, next) => {
  const filter = { _id: req.params.id };
  const changes = req.body;
  try {
    const donation = await Donation.updateOne(filter, changes);
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while processing your request.",
    });
  }
};
