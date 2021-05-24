const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: "NGOs" },
  address: { type: String, require: true },
  current_state: { type: String, default: "CREATED" },
  item_images: { type: Array },
  items: [{
    category: { type: String, required: true },
    item_count: { type: Number, default: 0 }
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donations', DonationSchema);
