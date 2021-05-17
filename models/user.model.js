const mongoose = require('mongoose');

const UserSchema = new mongooose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String },
  phone_number: { type: String, required: true },
  donated_items: { type: Map, of: Number },
  aadhar_number: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Users', UserSchema);
