"use client";
import Button from "./Button";
import React, { useState, useRef, useContext } from "react";
import SimpleForm from "./SimpleForm";
import ComplexForm from "./ComplexForm";
import FirmContext from "@/context/firmContext";
const ownType = ["ТОО", "ИП", "Прочие"];
let ownTypeIndex;

function ModalEdit() {
  const { elToEdit } = useContext(FirmContext);
  //   console.log(elToEdit);
  if (elToEdit.ownership_id == 1) {
    ownTypeIndex = 0;
  } else if (elToEdit.ownership_id == 14) {
    ownTypeIndex = 1;
  } else {
    ownTypeIndex = 2;
  }
  const [activeButton, setActiveButton] = useState(ownTypeIndex);

  return (
    <div className="fixed top-[120px] left-[480px] w-[500px] h-max z-50 overflow-hidden text-center bg-neutral-50 rounded-[10px] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-[25px]">
        <h2 className="text-sky-900 font-medium mb-5">
          Редактировать данные организации
        </h2>
        <div className="flex flex-row w-[450px] h-[50px] gap-2">
          {ownType.map((el, index) => {
            return (
              <Button
                type="button"
                text={el}
                key={index}
                id={index}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            );
          })}
        </div>
        {(activeButton == 0 || activeButton == 1) && (
          <SimpleForm
            topSet="mt-[40px]"
            type={ownType[activeButton]}
            ownId={activeButton === 0 ? 1 : 14}
          />
        )}
        {activeButton == 2 && <ComplexForm />}
      </div>
    </div>
  );
}

export default ModalEdit;
