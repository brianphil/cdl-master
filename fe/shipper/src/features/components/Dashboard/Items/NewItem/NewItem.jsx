import React, { useContext, useState } from "react";
import axios from "axios";
import "./NewItem.css";
import { ItemDisplayContextProvider } from "../../../../context/ItemDisplayContext";

const POST_URL = "http://localhost:5003/api/v1/items";

const NewItem = ({ mode, data, title }) => {
  const { setActivePanel } = useContext(ItemDisplayContextProvider);
  const [description, setDescription] = useState(data ? data.description : "");
  const [quantity, setQuantity] = useState(data ? data.quantity : "");
  const [price, setPrice] = useState(data ? data.price : "");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const saveItem = async (e) => {
    e.preventDefault();
    const createItem = await axios.post(POST_URL, {
      description,
      quantity,
      price,
    });
    if (createItem) {
      alert("Item created succesfully!");
      setActivePanel("item-list");
    }
  };
  const updateItem = async (e) => {
    e.preventDefault();
    const updateItem = await axios.put(POST_URL + `?id=${data._id}`, {
      description,
      quantity,
      price,
    });
    if (updateItem) {
      alert("Item updated succesfully!");
    }
  };
  return (
    <form>
      <h1>{title}</h1>
      <label htmlFor="description">Description</label>
      <input
        onChange={handleDescription}
        value={description ? description : data.description}
        id="description"
        type="text"
        placeholder="Tomato Sauce"
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        onChange={handleQuantity}
        value={quantity ? quantity : data.quantity}
        id="quantity"
        type="text"
        placeholder="150"
      />
      <label htmlFor="price">Price</label>
      <input
        onChange={handlePrice}
        value={price ? price : data.price}
        id="price"
        type="text"
        placeholder="562.00"
      />
      <button
        className="btn-action"
        onClick={(e) => {
          if (mode === "new") {
            saveItem(e);
          } else if (mode === "edit") {
            updateItem(e);
          }
        }}
      >
        {mode === "new" ? "Create Item" : "Update Item"}
      </button>
    </form>
  );
};

export default NewItem;
