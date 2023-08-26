import React, { useContext } from "react";
import { useState } from "react";
import { SocketContextProvider } from "../../../context/SocketContext";
const Orders = () => {
  const { socket } = useContext(SocketContextProvider);
  const [newOrder, setNewOrders] = useState([]);

  socket.on("connect", (con) => {
    // console.log("Connected to server!", socket.id);
    socket.on("send-notifier", (note) => {
      setNewOrders((pre) => {
        return pre.length === 0 ? [note] : [...pre, note];
      });
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
