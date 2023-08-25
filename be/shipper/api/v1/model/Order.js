const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema;

const Orders = new OrderSchema(
  {
    items: {
      type: Array,
      required: true,
    },
    receiptStatus: {
      type: Boolean,
      required: true,
    },
    customerID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", Orders);

module.exports = Order;
