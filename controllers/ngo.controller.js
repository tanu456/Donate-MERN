const NGOs = require("../models/ngo.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const logger = require("../utils/logger");

exports.getAllNgos = async (req, res, next) => {
  try {
    const ngos = await NGOs.find({});
    res.status(200).json({ success: true, ngos });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

exports.getNgoByQuery = async (req, res, next) => {
  try {
    const ngo = await NGOs.findOne(req.query);
    res.status(200).json({ success: true, ngo });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occured while retrieving entry.",
    });
  }
};

exports.deleteNgoById = async (req, res, next) => {
  try {
    await NGOs.remove({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "NGO successfully deleted.",
    });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occured while deleting entry.",
    });
  }
};

exports.createNgo = async (req, res, next) => {
  const ngo_info = req.body;
  if (
    !ngo_info ||
    !ngo_info.name ||
    !ngo_info.password ||
    !ngo_info.email ||
    !ngo_info.phoneNumber ||
    !ngo_info.registrationNumber
  ) {
    return res.status(404).json({
      success: false,
      message: "Please enter all required fields.",
    });
  }
  if ( ngo_info.password != ngo_info.confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Confirm password doesn't match with your password",
    });
  }
  //hashing password
  ngo_info.password = await bcrypt.hashSync(ngo_info.password, 10);

  const token = jwt.sign({ email: ngo_info.email }, process.env.SECRET, {
    expiresIn: "1d",
  });
  logger.debug("Token", token);
  var ngo = new NGOs({
    name: ngo_info.name,
    password: ngo_info.password,
    email: ngo_info.email,
    phone_number: ngo_info.phoneNumber,
    registration_number: ngo_info.registrationNumber,
    ngo_images: ngo_info.ngo_images,
    email_token: token,
    is_verified: false,
    location: ngo_info.location,
    address: ngo_info.address,
    is_available: ngo_info.is_available,
    available_items: ngo_info.available_items,
    description: ngo_info.description
  });
  logger.debug("NGO created", ngo);
  //Email verification
  const url = "http://" + req.headers.host + "/api/v1/users/verify/" + token;
  try {
    ngo = await ngo.save();

    await sgMail.send({
      from: process.env.SGMAIL_EMAIL,
      to: ngo_info.email,
      subject: "Account Verification",
      text:
        "Hello " +
        ngo_info.name +
        ",\n\n" +
        "Please verify your account by clicking the link: \n " +
        url +
        "\n\nThank You!\n",
    });
    res.status(200).json({
      message: "NGO created Successfully",
      ngo,
    });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      message:
        err.message || "Some error occurred while processing your request",
    });
  }
};

exports.editNgo = async (req, res, next) => {
  const filter = { _id: req.params.id };
  const changes = req.body;
  try {
    const ngo = await NGOs.updateOne(filter, changes);
    res.status(200).json({ success: true, ngo });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message:
        err.message || "Some error occurred while processing your request",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const ngo = await NGOs.findOne({ email }).lean();

  if (!ngo) {
    return res.json({ success: false, error: "Invalid username/password" });
  }
  if (await bcrypt.compare(password, ngo.password)) {
    //the username,password combination is successfull
    if (!ngo.is_verified) {
      return res.status(401).json({
        success: false,
        message: "Your account has not been verified.",
      });
    }
    const token = jwt.sign(
      {
        id: ngo._id,
        email: ngo.email,
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );
    return res.json({ success: true, data: token, id: ngo._id });
  }
  return res.json({ success: true, error: "Invalid username/password" });
};

//Verify the link sent on email
exports.verify = async (req, res) => {
  const token = req.params.id;
  logger.debug(token);

  if (!token)
    return res.status(400).json({ success: false, message: "Token Missing" });

  try {
    const ngo = await NGOs.findOne({ email_token: token });
    if (!ngo)
      return res.status(404).json({ success: false, message: "No ngo found." });
    ngo.is_verified = true;
    ngo.email_token = undefined;
    await ngo.save();
    logger.info("Ngo Verified Successfully ", ngo);
    res.status(200).json({ success: true, message: "Verified Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
