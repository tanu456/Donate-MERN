const mongooose = require('mongoose');

const DonationSchema = new mongooose.Schema({
  donor: { type: mongooose.ObjectId, required: true },
  ngo: { type: mongooose.ObjectId, required: true },
  isDelivered: { type: Boolean, default: false },
  item_images: { type: Array },
  items: {
    category: { type: String, required: true },
    item_count: { type: Number, default: 0 }
  },
}, {
  timestamps: true,
});

module.exports = mongooose.model('Donations', DonationSchema);
