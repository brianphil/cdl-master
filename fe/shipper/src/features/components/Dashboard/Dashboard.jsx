import React from "react";
import Items from "./Items/Items";
import ItemDisplayContext from "../../context/ItemDisplayContext";

const Dashboard = () => {
  return (
    <ItemDisplayContext>
      <Items />
    </ItemDisplayContext>
  );
};

export default Dashboard;
