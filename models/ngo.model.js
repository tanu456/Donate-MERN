const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true, unique: true },
    registration_number: { type: String, required: true, unique: true },
    ngo_images: { type: Array },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      pin_code: { type: Number, required: true },
      latitude: { type: String },
      longitude: { type: String },
    },
    is_available: { type: Boolean, required: true, default: true },
    is_verified: { type: Boolean, default: false },
    email_token: { type: String },
    available_items: [
      {
        category: { type: String, required: true },
        item_count: { type: Number, default: 0 },
      },
    ],
    description: { type: String }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NGOs", NGOSchema);
