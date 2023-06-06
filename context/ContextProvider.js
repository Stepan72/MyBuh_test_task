"use client";
import React, { useState } from "react";
import FirmContext from "./firmContext";
import { companies } from "@/data/companies";

function ContextProvider({ children }) {
  const [firmsData, setFirmsData] = useState(companies);
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
    console.log(data);
    const firmsWithout = firmsData.filter((el) => {
      return el.company_id !== data.company_id;
    });
    setFirmsData((prevValue) => {
      return [...firmsWithout, data];
    });
  }

  const stateContext = {
    firmsData,
    handleFirmsEdit,
    elToEdit,
    handleElToEdit,
    handleFirmsChange,
    editState,
    setEditState,
  };

  return (
    <FirmContext.Provider value={stateContext}>{children}</FirmContext.Provider>
  );
}

export default ContextProvider;
