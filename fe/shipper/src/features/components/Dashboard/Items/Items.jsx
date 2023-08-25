import React, { useContext, useState } from "react";
import ListItems from "./ListItems/ListItems";
import { ItemDisplayContextProvider } from "../../../context/ItemDisplayContext";
import ItemDetails from "./ItemDetails.js/ItemDetails";
import NewItem from "./NewItem/NewItem";
import "./Items.css";
const Items = () => {
  const { activePanel, selectedItem, setActivePanel } = useContext(
    ItemDisplayContextProvider
  );
  switch (activePanel) {
    case "item-list": {
      return (
        <div>
          <ListItems />
        </div>
      );
    }
    case "add-items": {
      return (
        <div>
          <NewItem mode={"new"} data={{}} title={"Create New Item"} />
          <div
            onClick={() => {
              setActivePanel("item-list");
            }}
            className="back"
          >
            Back
          </div>
        </div>
      );
    }
    case "edit-item": {
      return (
        <div>
          <NewItem mode={"edit"} data={selectedItem} title={"Update Item"} />
          <div
            onClick={() => {
              setActivePanel("item-list");
            }}
            className="back"
          >
            Back
          </div>
        </div>
      );
    }
    case "view-item": {
      return (
        <div>
          <ItemDetails item={selectedItem} />
          <div
            onClick={() => {
              setActivePanel("item-list");
            }}
            className="back"
          >
            Back
          </div>
        </div>
      );
    }
  }
};

export default Items;
