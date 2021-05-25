const mongoose = require('mongoose');

const NGOSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  registration_number: { type: String, required: true },
  ngo_images: { type: Array },
  address: { type: String },
  is_available: { type: Boolean, required: true, default: true },
  available_items: [{
    category: { type: String, required: true },
    item_count: { type: Number, default: 0 }
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('NGOs', NGOSchema);
