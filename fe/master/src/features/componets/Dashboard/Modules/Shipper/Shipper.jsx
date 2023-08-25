import React, { useState } from "react";
import Main from "../Main";

const Shipper = () => {
  const [status, setStatus] = useState(false);
  const module = "SHIPPER";
  const desc = "This module manages all the shipper operations";
  return (
    <>
      <Main
        title={"Shipper"}
        status={status}
        setStatus={setStatus}
        desc={desc}
        module={module}
      />
    </>
  );
};

export default Shipper;
