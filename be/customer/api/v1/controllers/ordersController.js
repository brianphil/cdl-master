const Order = require("../model/Orders");
const io = require("socket.io-client");
// const { socket } = require("../../../customer");
const createOrder = async (req, res) => {
  const socket = io("http://localhost:5003");

  const order = req.body;
  try {
    const insertOrder = new Order({ ...order });
    const insertedOrder = await insertOrder.save();
    socket.on("connect", (s) => {
      socket.emit("order-placed", insertedOrder);
      console.log("Connection established with ID: ", socket.id);
    });

    res.status(201).json(insertedOrder);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const getOrders = async (req, res) => {
  const { id } = req.query;
  if (id) {
    try {
      const order = await Order.findById(id);
      if (order) res.status(200).json(order);
      else res.status(404).json({ result: "Order not found" });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: e.message });
    }
  } else {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};

const getOrderByID = async (req, res) => {
  // const { id } = req.query;
  // try {
  //   const order = await order.findOne(id);
  //   res.status(200).json(order);
  // } catch (e) {
  //   console.log(e.message);
  //   res.status(500).json({ error: e.message });
  // }
};

const updateOrder = async (req, res) => {
  const order = req.body;
  const { id } = req.query;
  try {
    await order.findByIdAndUpdate(id, order);
    const updatedOrder = await Order.findById(id);
    res.status(201).json(updatedOrder);
    console.log(id);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.query;
  try {
    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: `Order with id ${id} deleted` });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const dispatchOrders = (orders) => {};

module.exports = {
  createOrder,
  getOrderByID,
  getOrders,
  updateOrder,
  deleteOrder,
};
