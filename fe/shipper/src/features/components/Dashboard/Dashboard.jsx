import React from "react";
import Items from "./Items/Items";
import "./Dashboard.css";
import ItemDisplayContext from "../../context/ItemDisplayContext";
import Orders from "./Orders/Orders";

const Dashboard = () => {
  return (
    <ItemDisplayContext>
      <div className="dashboard">
        <Items />
        <Orders />
      </div>
    </ItemDisplayContext>
  );
};

export default Dashboard;
