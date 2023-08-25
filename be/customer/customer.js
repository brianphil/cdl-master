const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
const log = console.log;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/api/v1/orders",
  require(path.join(__dirname, "api", "v1", "routes", "ordersRoute"))
);
app.use(
  "/api/v1/items",
  require(path.join(__dirname, "api", "v1", "routes", "itemsRoute"))
);
app.get("/", (req, res) => {
  res.json({ status: "ON" });
});

const start = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    if (dbConnect) {
      log("Connected to database....");
      app.listen(PORT, async () => {
        log("Server running on port ", PORT);
      });
    }
  } catch (e) {
    console.log(new Error(e.message));
  }
};

start();
