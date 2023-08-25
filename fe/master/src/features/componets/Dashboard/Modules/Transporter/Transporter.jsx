import React, { useState } from "react";
import Main from "../Main";
const Transporter = () => {
  const [status, setStatus] = useState(false);
  const desc = "This module manages all the transporter operations";
  return (
    <>
      <Main title={"Transporter"} status={status} desc={desc} />
    </>
  );
};

export default Transporter;
