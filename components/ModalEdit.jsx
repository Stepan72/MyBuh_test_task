"use client";
import Button from "./Button";
import React, { useState, useRef } from "react";
import SimpleForm from "./SimpleForm";
const ownType = ["ТОО", "ИП", "Прочие"];

function ModalEdit({ editElement, setElToEdit }) {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="fixed top-[120px] left-[480px] w-[500px] h-[400px] z-50 overflow-hidden text-center bg-neutral-50 rounded-[10px] flex flex-col items-center">
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
            editElement={editElement}
            setElToEdit={setElToEdit}
            type={ownType[activeButton]}
          />
        )}
      </div>
    </div>
  );
}

export default ModalEdit;
