const mongooose = require('mongoose');

const NGOSchema = new mongooose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String },
  phone_number: { type: String, required: true },
  ngo_images: { type: Array },
  address: { type: String },
  available: { type: Boolean, required: true, default: true },
  available_items: { type: Map, of: Number, default: 0 },
}, {
  timestamps: true,
});

module.exports = mongooose.model('NGOs', NGOSchema);
