"use client";
import React, { useState, useEffect, useContext } from "react";
import FirmCard from "@/components/FirmCard";
import { companies } from "@/data/companies";
import Backdrop from "@/components/Backdrop";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import FirmContext from "@/context/firmContext";

export default function Home() {
  const {
    firmsData,
    handleFirmsEdit,
    handleElToEdit,
    editState,
    setEditState,
  } = useContext(FirmContext);

  const [deleteState, setDeleteState] = useState(false);
  const [elToDel, setElToDel] = useState(undefined);

  //оставляю
  function editHandler(element) {
    setEditState(true);
    handleElToEdit(element);
  }
  // оставляю
  function cancelEditHandler() {
    setEditState(false);
    setElToDel(null);
  }
  /// оставляю
  function deleteHandler(id) {
    setDeleteState(true);
    setElToDel(id);
  }
  /// Оставляю
  function cancelDeleteHandler() {
    setDeleteState(false);
    setElToDel(null);
  }
  /// оставляю
  function confirmDeleteHandler() {
    const filteredFirms = firmsData.filter((el) => {
      return el.company_id !== elToDel;
    });
    handleFirmsEdit(filteredFirms);
    setElToDel(null);
    setDeleteState(false);
  }

  return (
    <div className="flex flex-col">
      <header className="m-10 mt-20">
        <h1 className="text-center">Мои организации</h1>
      </header>
      <ul id="container" className="mx-64 flex flex-wrap gap-2">
        {firmsData.map((el) => {
          return (
            <FirmCard
              key={el.company_id}
              id={el.company_id}
              name={el.company_name}
              innNumber={el.company_tin}
              logo={el.logo}
              editFun={editHandler}
              deleteFun={deleteHandler}
              element={el}
            />
          );
        })}
      </ul>
      {deleteState && (
        <div>
          <Backdrop cancel={cancelDeleteHandler} />
          <ModalDelete
            cancelConfirm={cancelDeleteHandler}
            deleteConfirm={confirmDeleteHandler}
          />
        </div>
      )}
      {editState && (
        <div>
          <Backdrop cancel={cancelEditHandler} />
          <ModalEdit />
        </div>
      )}
    </div>
  );
}
