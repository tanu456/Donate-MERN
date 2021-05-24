const Request = require("../models/donation.model");
const Users = require("../models/user.model");
const NGOs = require("../models/ngo.model");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

//Make account on sendgrid and create api key and add in env file and verify sender
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// @desc    Request for donate
// @route   POST /api/v1/request
exports.request = async (req, res, next) => {
  
  const user =await Users.findOne({username : req.body.username});
  const ngo = await NGOs.findOne({name : req.body.ngo})
  
  var request = new Request(
    {
      user: user._id,
      ngo: ngo._id,
      address: req.body.address,
      items: req.body.items,
    }
  );
  console.log(request);
  try {
    
    request = await request.save();
    console.log("saved")
    await sgMail.send({
      from: "tanya_11710163@nitkkr.ac.in",
      to: ngo.email,
      subject: "Notification",
      text:
        "You have got a pickup request from "+req.body.username+"\n Please pickup from the address "+ req.body.address + 
        "\n\nThank You!\n",
    });

    console.log("Email sent Successfully");
    res.status(200).send({
      message: "Request Added Successfully and notified ngos",
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
      { $set: { current_state: "CANCELED" } }
    );

    res.status(200).send({
      message: "Request Canceled Successfully",
      request,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
