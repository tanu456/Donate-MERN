const NGOs = require("../models/ngo.model");
const bcrypt = require("bcryptjs");
const logger = require("../utils/logger");

exports.getAllNgos = async (req, res, next) => {
  try {
    const ngos = await NGOs.find({});
    res.status(200).send(ngos);
  } catch (err) {
    logger.error(err);

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
    logger.error(err);

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
    logger.error(err);

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

  const ngo = new NGOs({
    name: ngo_info.name,
    password: ngo_info.password,
    email: ngo_info.email,
    phone_number: ngo_info.phone_number,
    registration_number: ngo_info.registration_number,
    ngo_images: ngo_info.ngo_images,
    location: ngo_info.location,
    address: ngo_info.address,
    is_available: ngo_info.is_available,
    available_items: ngo_info.available_items
  });
  logger.debug("NGO created", ngo);

  try {
    const newNgo = await ngo.save();
    res.status(200).send({
      message: "NGO created Successfully",
      newNgo,
    });
  } catch (err) {
    logger.error(err);

    res.status(500).send({
      message: err.message || "Some error occurred while processing your request",
    });
  }
};

exports.editNgo = async (req, res, next) => {
  const filter = { _id: req.params.id };
  const changes = req.body;

  try{ 
    const ngo = await NGOs.updateOne(filter, changes);
    res.status(200).send(ngo);
  } catch (err) {
    logger.error(err);

    res.status(500).send({
      message: err.message || "Some error occurred while processing your request",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const ngo = await NGOs.findOne({ email }).lean();

  if (!ngo) {
    return res.json({ status: "error", error: "This email id is not registered" });
  }
  if (await bcrypt.compare(password, ngo.password)) {
    //the username,password combination is successfull
    return res.json({ status: "ok", message: "Successfully logged in"});
  }
  logger.info("Invalid password");

  return res.json({ status: "error", error: "Invalid password"});
}
