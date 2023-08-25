import React, { createContext, useState } from "react";

const CartContextProvider = createContext({});

const CartContext = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <CartContextProvider.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </CartContextProvider.Provider>
  );
};

export default CartContext;
