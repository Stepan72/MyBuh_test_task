"use client";
import React from "react";

const FirmContext = React.createContext({
  firmsData: [],
  ownershipsData: [],
  elToEdit: {},
  editState: false,
  handleFirmsEdit: () => {},
  handleElToEdit: () => {},
  handleFirmsChange: () => {},
  setEditState: () => {},
  setOwnershipsData: () => {},
});

export default FirmContext;
