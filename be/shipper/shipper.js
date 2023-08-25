const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { Server } = require("socket.io");
const PORT = process.env.PORT;
const app = express();
const log = console.log;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(
//   "/api/v1/orders",
//   require(path.join(__dirname, "api", "v1", "routes", "ordersRoute"))
// );
// app.use(
//   "/api/v1/items",
//   require(path.join(__dirname, "api", "v1", "routes", "itemsRoute"))
// );
app.use(cors());
app.get("/", (req, res) => {
  res.json({ status: "ON" });
});

app.use(
  "/status",
  require(path.join(__dirname, "api", "v1", "routes", "status"))
);
app.use(
  "/api/v1/items",
  require(path.join(__dirname, "api", "v1", "routes", "items"))
);

const start = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    if (dbConnect) {
      log("Connected to database....");
      const ComServer = app.listen(PORT, async () => {
        log("Server running on port ", PORT);
      });
      const socketIO = new Server(ComServer, {
        cors: {
          origin: ["http://localhost:5000", "http://localhost:3002"],
        },
      });

      socketIO.on("connection", (socket) => {
        console.log("Customer connected!", socket.id);

        socket.on("order-placed", (order) => {
          socketIO.emit("send-notifier", order);
          console.log("New order received");
        });
      });
    }
  } catch (e) {
    log(new Error(e.message));
  }
};

start();
