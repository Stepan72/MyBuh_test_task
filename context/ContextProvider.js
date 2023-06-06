"use client";
import React, { useState } from "react";
import FirmContext from "./firmContext";

function ContextProvider({ children }) {
  const [firmData, setFirmData] = useState([]);

  function handleCheck() {
    console.log("Check");
  }

  const stateContext = {
    firmData,
  };

  return (
    <FirmContext.Provider value={stateContext}>{children}</FirmContext.Provider>
  );
}

export default ContextProvider;
