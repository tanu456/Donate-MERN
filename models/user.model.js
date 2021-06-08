const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, unique: true },
    phone_number: { type: String, required: true, unique: true },
    donations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Donations" }
    ],
    aadhar_number: { type: String, required: true, unique: true },
    address: { type: String },
    is_verified: { type: Boolean, default: false },
    email_token: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
