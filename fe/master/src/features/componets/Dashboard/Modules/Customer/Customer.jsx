import React, { useState } from "react";
import Main from "../Main";
const Customer = () => {
  const [status, setStatus] = useState(false);
  const module = "CUSTOMER";
  const desc = "This module manages all the customer operations";
  return (
    <>
      <Main
        title={"Customer"}
        setStatus={setStatus}
        status={status}
        desc={desc}
        module={module}
      />
    </>
  );
};

export default Customer;
