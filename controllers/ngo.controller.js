const NGOs = require("../models/ngo.model");

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
  console.log(req.body);
  var ngo = new NGOs({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    city: req.body.city,
    email: req.body.email,
    phone_number: req.body.phone_number,
    ngo_images: req.body.ngo_images,
    address: req.body.address,
    available: req.body.available,
    available_items: req.body.available_items
  });
  try {
    ngo = await ngo.save();
    console.log(ngo);
    res.status(200).send({
      message: "NGO created Successfully",
      ngo,
    });
  } catch (err) {
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
    res.status(500).send({
      message: err.message || "Some error occurred while processing your request",
    });
  }
};
