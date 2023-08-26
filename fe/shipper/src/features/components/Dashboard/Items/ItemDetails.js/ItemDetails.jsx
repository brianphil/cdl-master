import React, { useContext } from "react";
import "./ItemDetails.css";
import axios from "axios";
import { ItemDisplayContextProvider } from "../../../../context/ItemDisplayContext";
import { DELETE_URL } from "../../../../../config/config";
const ItemDetails = ({ item }) => {
  const { setActivePanel, setSelectedItem } = useContext(
    ItemDisplayContextProvider
  );
  const deleteItem = async (e, id) => {
    e.preventDefault();
    alert("Item has been deleted");
    const deleted = await axios.delete(DELETE_URL + id);
    if (deleted) setActivePanel("item-list");
  };
  return (
    <>
      <form>
        <h1>Item Details</h1>
        <h2>Description: {item.description} </h2>
        <h2>Quantity: {item.quantity}</h2>
        <h2>Price: Ksh{item.price}</h2>
        <div className="btn-modify">
          <button
            className="edit"
            onClick={() => {
              setActivePanel("edit-item");
              setSelectedItem(item);
            }}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={(e) => {
              deleteItem(e, item._id);
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default ItemDetails;
