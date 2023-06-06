"use client";
import React from "react";

const FirmContext = React.createContext({
  firmsData: [],
  elToEdit: {},
  editState: false,
  handleFirmsEdit: () => {},
  handleElToEdit: () => {},
  handleFirmsChange: () => {},
  setEditState: () => {},
});

export default FirmContext;
