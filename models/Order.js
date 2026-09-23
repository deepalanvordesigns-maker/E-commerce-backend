// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//         quantity: { type: Number },
//         price: { type: Number },
//       },
//     ],
//     totalAmount: { type: Number, required: true },
//     status: { type: String, default: "pending" }, // pending, shipped, delivered
//     address: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);


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
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);