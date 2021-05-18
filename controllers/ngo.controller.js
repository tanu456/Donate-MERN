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
    const ngo = await NGOs.find({ _id: req.id });
    res.status(200).send(ngo);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving entry.",
    });
  }
};
