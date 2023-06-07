"use client";
import React, { useState, useEffect, useContext } from "react";
import FirmCard from "@/components/FirmCard";
import Backdrop from "@/components/Backdrop";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import FirmContext from "@/context/firmContext";

export default function Home() {
  const {
    firmsData,
    setFirmsData,
    handleFirmsEdit,
    handleElToEdit,
    editState,
    setEditState,
    setOwnershipsData,
  } = useContext(FirmContext);

  const [deleteState, setDeleteState] = useState(false);
  const [elToDel, setElToDel] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      let response1 = await fetch(
        "https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json"
      );
      let data1 = await response1.json();
      setFirmsData(data1);
      let response2 = await fetch(
        "https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/ownerships.json"
      );
      let data2 = await response2.json();
      setOwnershipsData(data2);
    }
    fetchData();
  }, []);

  function editHandler(element) {
    setEditState(true);
    handleElToEdit(element);
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
