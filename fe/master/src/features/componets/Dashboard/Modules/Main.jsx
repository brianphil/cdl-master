import React, { useState } from "react";
import "./Main.css";
import io from "socket.io-client";
const Main = ({ title, status, setStatus, desc, module }) => {
  const handleStart = () => {
    switch (module) {
      case "CUSTOMER":
        {
        }
        break;
      case "SHIPPER":
        {
          const socket = io("http://localhost:5011");
          socket.on("connect", (s) => {
            console.log("Connected to server!");
          });
          socket.on("update-status", (stat) => {
            const s = stat.status;
            setStatus(s);
          });
        }
        break;
      case "TRANSPORTER":
        {
        }
        break;
      default:
        return;
    }
  };
  const handleStop = () => {};

  return (
    <>
      <div className="module-title">{title}</div>
      <div className="module-status">
        <div className="status-title">{status ? "Online" : "Offline"}</div>
        <div
          className={
            status
              ? "status module-status-icon-on"
              : "status module-status-icon-off"
          }
        ></div>
      </div>
      <div className="desc">{desc}</div>
      <div className="control-btn">
        <button className="btn start-btn" onClick={handleStart}>
          {status ? "Running" : "Start"}
        </button>
        <button className="btn pause-btn">Pause</button>
        <button className="btn stop-btn" onClick={handleStop}>
          Stop
        </button>
      </div>
    </>
  );
};

export default Main;
