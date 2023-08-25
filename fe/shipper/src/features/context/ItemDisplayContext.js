import React, { createContext, useState } from "react";

export const ItemDisplayContextProvider = createContext({});

const ItemDisplayContext = ({ children }) => {
  const [activePanel, setActivePanel] = useState("item-list");
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <ItemDisplayContextProvider.Provider
      value={{ activePanel, setActivePanel, selectedItem, setSelectedItem }}
    >
      {children}
    </ItemDisplayContextProvider.Provider>
  );
};

export default ItemDisplayContext;
