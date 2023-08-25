const express = require("express");
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  // getItemByID,
} = require("../controllers/itemsController");

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);
// router.get("/:id", getItemByID);
router.put("/", updateItem);
router.delete("/", deleteItem);

module.exports = router;
