import React, { createContext } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5003");
export const SocketContextProvider = createContext({});
const SocketContext = ({ children }) => {
  return (
    <SocketContextProvider.Provider value={{ socket }}>
      {children}
    </SocketContextProvider.Provider>
  );
};

export default SocketContext;
