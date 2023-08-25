const express = require("express");
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getOrderByID,
} = require("../controllers/ordersController");

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
// router.get("/:id", getOrderByID);
router.put("/", updateOrder);
router.delete("/", deleteOrder);

module.exports = router;
