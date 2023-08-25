const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema;

const Orders = new OrderSchema(
  {
    items: {
      type: Array,
      required: true,
    },
    placementStatus: {
      type: Boolean,
      required: true,
    },
    supplierID: {
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
