import React from "react";
import { useState } from "react";
import io from "socket.io-client";
const Orders = () => {
  const socket = io("http://localhost:5003");
  const [newOrder, setNewOrders] = useState([]);

  socket.on("connect", (con) => {
    console.log("Connected to server!");
    socket.on("send-notifier", (note) => {
      setNewOrders([{ ...newOrder }, note]);
      console.log("Update received!", newOrder);
    });
  });
  return (
    <div>
      <h1>Orders</h1>
      <h3>New Orders: {newOrder.length}</h3>
    </div>
  );
};

export default Orders;
