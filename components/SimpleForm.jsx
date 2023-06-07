import React, { useState, useContext } from "react";
import FirmContext from "@/context/firmContext";
function SimpleForm({ type, ownId, topSet }) {
  const { elToEdit, handleFirmsChange, setEditState } = useContext(FirmContext);
  const [inn, setInn] = useState(elToEdit.company_tin);
  const [name, setName] = useState(elToEdit.company_name);

  function changeInnHandler(e) {
    setInn(e.target.value);
  }

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  function changeFirmHandler(e) {
    e.preventDefault();
    handleFirmsChange({
      ...elToEdit,
      company_name: name,
      company_tin: inn,
      ownership_id: +ownId,
    });
    setEditState(false);
  }

  return (
    <form
      className={`w-[450px] h-max flex flex-col ${topSet}`}
      onSubmit={changeFirmHandler}
    >
      <p className="text-left text-sm text-gray-500 mb-2">Введите ИИН/БИН</p>
      <input
        type="text"
        className="border-solid border-[1px] rounded-md h-8 px-2"
        value={inn}
        onChange={changeInnHandler}
      />

      <p className="text-left text-sm text-gray-500 my-2">
        Введите название компании
      </p>
      <div className="flex flex-row items-center">
        <p className="border-solid border-[1px] p-[3px] rounded-l-lg h-8">
          {type}
        </p>
        <input
          type="text"
          className="border-solid border-[1px] rounded-r-lg  h-8 px-2 w-[450px]"
          value={name}
          onChange={changeNameHandler}
        />
      </div>
      <div className="flex justify-center mt-8 h-[80px] items-center  ">
        <button
          type="submit"
          className="text-white w-[160px] h-[40px] bg-green-600 rounded-md font-light    "
        >
          Сохранить
        </button>
      </div>
    </form>
  );
}

export default SimpleForm;
