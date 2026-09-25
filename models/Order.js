const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    pin: String,
  },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      qty: Number,
      img: String,
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "pending" },
  estimatedDelivery: { type: Date, default: () => new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);