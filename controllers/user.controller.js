const Users = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { config } = require("../config/auth.config");
const logger = require("../utils/logger");

//Make account on sendgrid and create api key and add in env file and verify sender
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// @desc    Get all users
// @route   GET /api/v1/users/all
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find({});
    res.status(200).json({ success: true, users });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Get User by query params
// @route   GET /api/v1/users/get?field=value&....
exports.getUsersByQuery = async (req, res, next) => {
  try {
    const users = await Users.findOne(req.query);
    res.status(200).json({ success: true, users });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Edit user by id
// @route   PUT /api/v1/users/:id
exports.editUser = async (req, res, next) => {
  const filter = { _id: req.params.id };
  const changes = req.body;
  try {
    const users = await Users.updateOne(filter, changes);
    res.status(200).json({ success: true, users });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

// @desc    Delete user by id
// @route   DELETE /api/v1/users/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const response = await Users.deleteOne({ _id: req.params.id });
    res.status(200).json({ success: true, response });
  } catch (err) {
    logger.error(err);
    res.status(500).json({
      success: false,
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};
exports.register = async (req, res) => {
  const personal_info = req.body;
  if (
    !personal_info ||
    !personal_info.name ||
    !personal_info.username ||
    !personal_info.password ||
    !personal_info.city ||
    !personal_info.phone_number ||
    !personal_info.aadhar_number
  ) {
    return res.status(404).json({
      success: false,
      msg: "Please enter all fields",
    });
  }
  try {
    //Email should be unique
    const user = await Users.findOne({ email: personal_info.email });
    if (user)
      return res.status(401).json({
        success: false,
        message:
          "The email address you have entered is already associated with another account.",
      });

    //hashing password
    personal_info.password = bcrypt.hashSync(personal_info.password, 10);

    //generating token which will be used for verifying user
    const token = jwt.sign({ email: personal_info.email }, process.env.SECRET, {
      expiresIn: "1d",
    });

    logger.debug("Token:", token);
    // create and save user
    const newUser = new Users({
      name: personal_info.name,
      username: personal_info.username,
      password: personal_info.password,
      city: personal_info.city,
      email: personal_info.email,
      email_token: token,
      phone_number: personal_info.phone_number,
      donated_items: personal_info.donated_items,
      aadhar_number: personal_info.aadhar_number,
    });

    newUser.save();
    logger.debug("New user creation", newUser);

    //Email verification
    const url = "http://" + req.headers.host + "/api/v1/users/verify/" + token;

    await sgMail.send({
      from: process.env.SGMAIL_EMAIL,
      to: personal_info.email,
      subject: "Account Verification",
      text:
        "Hello " +
        personal_info.name +
        ",\n\n" +
        "Please verify your account by clicking the link: \n " +
        url +
        "\n\nThank You!\n",
    });
    logger.info("Verification email sent successfully");
    res.status(200).json({ success: true });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ success: false, message: err.message });
 }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username }).lean();

  if (!user) {
    return res.json({ success: false, message: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful
    if (!user.is_verified) {
      return res.status(401).json({
        success: false,
        message: "Your account has not been verified.",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ success: false, data: token, id: user._id });
  }

  res
    .status(403)
    .json({ success: false, message: "Invalid username/password" });
};

//Verify the link sent on email
exports.verify = async (req, res) => {
  const token = req.params.id;

  if (!token)
    return res.status(400).json({ success: false, message: "Token Missing" });

  try {
    const user = await Users.findOne({ email_token: token });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "No user found." });
    user.is_verified = true;
    user.email_token = undefined;
    await user.save();
    logger.debug("Verifying user", user);
    res.status(200).json({ success: true, message: "Verified Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
