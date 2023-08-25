import React from "react";
import Shipper from "./Modules/Shipper/Shipper";
import Customer from "./Modules/Customer/Customer";
import Transporter from "./Modules/Transporter/Transporter";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="modules">
          <div className="module">
            <Shipper />
          </div>
          <div className="module">
            <Customer />
          </div>
          <div className="module">
            <Transporter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
