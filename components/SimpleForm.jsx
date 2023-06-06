import React, { useState } from "react";

function SimpleForm({ editElement, setElToEdit, type }) {
  const [inn, setInn] = useState(editElement.company_tin);
  const [name, setName] = useState(editElement.company_name);

  function changeInnHandler(e) {
    setInn(e.target.value);
  }

  function changeNameHandler(e) {
    setName(e.target.value);
  }

  function changeFirmHandler(e) {
    e.preventDefault();
    setElToEdit();
  }

  return (
    <form
      className="w-[450px] mt-[40px] h-[200px] flex flex-col"
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
        <p className="border-solid border-[1px] p-1 rounded-l-lg h-8">{type}</p>
        <input
          type="text"
          className="border-solid border-[1px] rounded-md h-8 px-2 w-[450px]"
          value={name}
          onChange={changeNameHandler}
        />
      </div>
      <button></button>
    </form>
  );
}

export default SimpleForm;
