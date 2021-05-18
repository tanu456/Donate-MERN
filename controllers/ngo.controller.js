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

exports.getNgoById = async (req, res, next) => {
  try {
    const ngo = await NGOs.findOne({ _id: req.params.id });
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving entry.",
    });
  }
};

exports.getNgoByName = async (req, res, next) => {
  try {
    const ngo = await NGOs.findOne({ username: req.params.name });
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving entry.",
    });
  }
};

exports.getNgosByLocation = async (req, res, next) => {
  try {
    const ngos = await NGOs.find({ city: req.body.city });
    res.status(200).send(ngos);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving entries.",
    });
  }
};
