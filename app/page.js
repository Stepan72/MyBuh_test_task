"use client";
import React, { useState, useEffect } from "react";
import FirmCard from "@/components/FirmCard";
const data = [1, 2, 3, 4, 5, 6, 7];
import { companies } from "@/data/companies";
import Backdrop from "@/components/Backdrop";
import ModalDelete from "@/components/ModalDelete";

export default function Home() {
  const [firmsData, setFirmsData] = useState(companies);
  const [deleteState, setDeleteState] = useState(false);
  const [elToDel, setElToDel] = useState(undefined);
  function editHandler() {}

  function deleteHandler(id) {
    setDeleteState(true);
    setElToDel(id);
    // const filteredFirms = firmsData.filter((el) => {
    //   return el.company_id !== id;
    // });
    // setFirmsData(filteredFirms);
  }

  function cancelDeleteHandler() {
    console.log("CANCEL DELETE");
    // setDeleteState(false);
    // setElToDel(undefined);
  }

  function confirmDeleteHandler() {
    console.log("CONFIRM DELETE");
  }

  return (
    <div className="flex flex-col">
      <header className="m-10 mt-20">
        <h1 className="text-center">Мои организации</h1>
      </header>
      <div id="container" className="mx-64 flex flex-wrap gap-2">
        {firmsData.map((el, index) => {
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
      </div>
      {deleteState && (
        <div>
          <Backdrop />
          <ModalDelete
            cancelConfirm={cancelDeleteHandler}
            deleteConfirm={confirmDeleteHandler}
          />
        </div>
      )}
    </div>
  );
}
