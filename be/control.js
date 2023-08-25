const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("socket.io");
const PORT = process.env.PORT | 5011;

const comServer = app.listen(PORT, async () => {
  /**Intialize syatem checklist */
  console.log(`Engine running on port ${PORT}...`);
  //***Shipper Module */
  app.use("/", require(path.join(__dirname, "control", "routes", "process")));
});
const socketIO = new Server(comServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});
socketIO.on("connection", (socket) => {
  console.log("Client connected!");
  socket.on("disconnect", () => {
    console.log("Client disconnected!");
    socketIO.emit("update-status", { status: false });
  });
  socketIO.emit("update-status", { status: true });
});
