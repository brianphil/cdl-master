import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ListItems.css";
import { ItemDisplayContextProvider } from "../../../../context/ItemDisplayContext";
import { ITEM_URL } from "../../../../../config/config";
const ListItems = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const itemList = await axios.get(ITEM_URL);
    setItems(itemList.data);
  };
  const { setActivePanel, setSelectedItem } = useContext(
    ItemDisplayContextProvider
  );
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="items">
      <h1>Items Catalogue</h1>
      <div className="new-item-div">
        <button
          className="btn-new-item"
          onClick={() => setActivePanel("add-items")}
        >
          Add New Item
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((items) => {
            return (
              <tr key={items._id}>
                <td>{items.description}</td>
                <td>{items.quantity}</td>
                <td>{items.price}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedItem(items);
                      setActivePanel("view-item");
                    }}
                    className="btn"
                  >
                    Open Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;
