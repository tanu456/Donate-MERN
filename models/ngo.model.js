const mongooose = require('mongoose');

const NGOSchema = new mongooose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String },
  phone_number: { type: String, required: true },
  ngo_images: { type: Array, default: [] },
  available_items: {
    clothes: {
      item_count: { type: Number, default: 0 }
    },
    books: {
      item_count: { type: Number, default: 0 }
    }
  },
});

module.exports = mongooose.model('NGOs', NGOSchema);
