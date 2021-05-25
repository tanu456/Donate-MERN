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
  
  var request = new Request({
    user: user._id,
    ngo: ngo._id,
    location: req.body.location,
    current_state: req.body.current_state,
    item_images: req.body.item_images,
    pickup_person: req.body.pickup_person,
    items: req.body.items,
  });
  console.log(request);

  try {
    
    request = await request.save();
    console.log("saved")
    await sgMail.send({
      from: "ngo.donation.108@gmail.com",
      to: ngo.email,
      subject: "Notification",
      text:
        "You have got a pickup request from "+req.body.username+"\n Please pickup from the address "+ req.body.location + 
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
