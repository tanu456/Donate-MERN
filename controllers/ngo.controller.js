const NGOs = require("../models/ngo.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.getAllNgos = async (req, res, next) => {
  try {
    const ngos = await NGOs.find({});
    res.status(200).send(ngos);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving entries.",
    });
  }
};

exports.getNgoByQuery = async (req, res, next) => {
  try {
    const ngo = await NGOs.findOne(req.query);
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving entry.",
    });
  }
};

exports.deleteNgoById = async (req, res, next) => {
  try {
    await NGOs.remove({ _id: req.params.id });
    res.status(200).send({
      message: "NGO successfully deleted.",
    });
  } catch (err) {
    res.status(500).send({
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
    !ngo_info.phone_number ||
    !ngo_info.registration_number
  ) {
    return res.status(404).json({
      success: false,
      message: "Please enter all required fields.",
    });
  }

  //hashing password
  ngo_info.password = bcrypt.hashSync(ngo_info.password, 10);

  var ngo = new NGOs({
    name: ngo_info.name,
    password: ngo_info.password,
    email: ngo_info.email,
    phone_number: ngo_info.phone_number,
    registration_number: ngo_info.registration_number,
    ngo_images: ngo_info.ngo_images,
    location: ngo_info.location,
    address: ngo_info.address,
    is_available: ngo_info.is_available,
    available_items: ngo_info.available_items,
  });
  const token = jwt.sign({ email: ngo_info.email }, process.env.SECRET, {
    expiresIn: "1d",
  });
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
    res.status(200).send({
      message: "NGO created Successfully",
      ngo,
    });
  } catch (err) {
    res.status(500).send({
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
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while processing your request",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const ngo = await NGOs.findOne({ email }).lean();

  if (!ngo) {
    return res.json({ status: "error", error: "Invalid email-id" });
  }
  if (await bcrypt.compare(password, ngo.password)) {
    //the username,password combination is successfull
    const token = jwt.sign(
      {
        id: ngo._id,
        email: ngo.email,
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );
    return res.json({ status: "ok", data: token, id: ngo._id });
  }
  return res.json({ status: "error", error: "Invalid username/password" });
};
