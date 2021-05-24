const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ngo: { type: mongoose.Schema.Types.ObjectId, ref: "NGOs" },
    address: { type: String, require: true },
    items: {
      clothes: {
        type: Boolean,
      },
      books: {
        type: Boolean,
      },
    },
    current_state: { type: String, default: "CREATED" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Request", RequestSchema);