const Item = require("../model/Item");

const createItem = async (req, res) => {
  const item = req.body;
  try {
    const insertItem = new Item({ ...item });
    const insertedItem = await insertItem.save();
    res.status(201).json(insertedItem);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const getItems = async (req, res) => {
  const { id } = req?.query;
  if (id) {
    try {
      const item = await Item.findById(id);
      if (item) res.status(200).json(item);
      else res.status(404).json({ result: "Item not found" });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: e.message });
    }
  } else {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
};

const getItemByID = async (req, res) => {
  // const { id } = req.query;
  // try {
  //   const item = await Item.findOne(id);
  //   res.status(200).json(item);
  // } catch (e) {
  //   console.log(e.message);
  //   res.status(500).json({ error: e.message });
  // }
};

const updateItem = async (req, res) => {
  const item = req.body;
  const { id } = req.query;
  try {
    await Item.findByIdAndUpdate(id, item);
    const updatedItem = await Item.findById(id);
    res.status(201).json(updatedItem);
    console.log(id);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.query;
  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: `Item with id ${id} deleted` });
    console.log(`Item with id ${id} deleted`);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};

module.exports = { createItem, getItemByID, getItems, updateItem, deleteItem };
