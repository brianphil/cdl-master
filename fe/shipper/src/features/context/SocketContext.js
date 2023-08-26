import React, { createContext } from "react";
import io from "socket.io-client";
import { SOCKET_BASE_URL } from "../../config/config";
const socket = io(SOCKET_BASE_URL);
export const SocketContextProvider = createContext({});
const SocketContext = ({ children }) => {
  return (
    <SocketContextProvider.Provider value={{ socket }}>
      {children}
    </SocketContextProvider.Provider>
  );
};

export default SocketContext;
