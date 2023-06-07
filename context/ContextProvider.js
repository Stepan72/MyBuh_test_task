"use client";
import React, { useState } from "react";
import FirmContext from "./firmContext";

function ContextProvider({ children }) {
  const [firmsData, setFirmsData] = useState([]);
  const [ownershipsData, setOwnershipsData] = useState([]);
  const [elToEdit, setElToEdit] = useState(null);
  const [editState, setEditState] = useState(false);

  function handleFirmsEdit(data) {
    setFirmsData(data);
    console.log(data);
  }

  function handleElToEdit(element) {
    setElToEdit(element);
  }

  function handleFirmsChange(data) {
    // console.log(data);
    const firmsWithout = firmsData.filter((el) => {
      return el.company_id !== data.company_id;
    });
    setFirmsData((prevValue) => {
      return [...firmsWithout, data];
    });
    console.log([...firmsWithout, data]);
  }

  const stateContext = {
    firmsData,
    setFirmsData,
    handleFirmsEdit,
    elToEdit,
    handleElToEdit,
    handleFirmsChange,
    editState,
    setEditState,
    ownershipsData,
    setOwnershipsData,
  };

  return (
    <FirmContext.Provider value={stateContext}>{children}</FirmContext.Provider>
  );
}

export default ContextProvider;
