const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema;

const Items = new ItemSchema(
  {
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", Items);

module.exports = Item;
