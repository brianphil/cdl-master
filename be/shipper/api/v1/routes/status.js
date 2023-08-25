const express = require("express");
const { getItems } = require("../controllers/itemsController");
const route = express.Router();

route.get("/", getItems);

module.exports = route;
