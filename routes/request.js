const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donation.controller");

// /api/v1/request
router.post("/", donationController.request);

// /api/v1/request/:id/cancel
router.post("/:id/cancel", donationController.requestCancel);

// /api/v1/request/:id/edit
router.put("/edit/:id", donationController.editRequest);

module.exports = router;
