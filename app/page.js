"use client";
import React, { useState, useEffect } from "react";
import FirmCard from "@/components/FirmCard";
const data = [1, 2, 3, 4, 5, 6, 7];
import { companies } from "@/data/companies";
import Backdrop from "@/components/Backdrop";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";

export default function Home() {
  const [firmsData, setFirmsData] = useState(companies);
  const [deleteState, setDeleteState] = useState(false);
  const [elToDel, setElToDel] = useState(undefined);
  const [editState, setEditState] = useState(false);
  const [elToEdit, setElToEdit] = useState(undefined);

  function editHandler(id) {
    // console.log(id);
    setEditState(true);
    setElToEdit(id);
  }

  function cancelEditHandler() {
    setEditState(false);
    setElToDel(null);
  }

  function deleteHandler(id) {
    setDeleteState(true);
    setElToDel(id);
  }

  function cancelDeleteHandler() {
    setDeleteState(false);
    setElToDel(null);
  }

  function confirmDeleteHandler() {
    const filteredFirms = firmsData.filter((el) => {
      return el.company_id !== elToDel;
    });
    setFirmsData(filteredFirms);
    console.log(filteredFirms);
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
