import React, { useState } from "react";
import SimpleForm from "./SimpleForm";
import { ownerships } from "@/data/ownerships";
const otherOwns = ownerships.filter((el) => {
  return el.parent_id == 2;
});

function ComplexForm() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectionOption, setSelectionOption] = useState(6);
  const [selectedType, setSelectedType] = useState({ short: "AO", id: 6 });

  //   console.log(selectedOption);
  //   console.log(selectionOption);

  function selectionHandler(e) {
    // console.log(e.target.value);
    setSelectionOption(e.target.value);
    let indexSelection = otherOwns.findIndex((el) => {
      return el.id == e.target.value;
    });
    // console.log(indexSelection);
    let selectedInOtherOwns = otherOwns[indexSelection];
    setSelectedType(selectedInOtherOwns);
    // console.log(selectedInOtherOwns);
  }

  return (
    <div className="mt-5 ">
      <div className="flex flex-col gap-1 w-[450px]">
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value1"
            value={0}
            checked={selectedOption === 0}
            onChange={() => {
              setSelectedOption(0);
            }}
          />
          <label htmlFor="value1">Юридические лица</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value2"
            value={1}
            checked={selectedOption === 1}
            onChange={() => {
              setSelectedOption(1);
            }}
          />
          <label htmlFor="value2">Частная практика</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value3"
            checked={selectedOption === 2}
            value={2}
            onChange={() => {
              setSelectedOption(2);
            }}
          />
          <label htmlFor="value3">Физические лица</label>
        </div>
      </div>
      {selectedOption === 0 && (
        <div className="flex flex-col mb-5">
          <label className="text-left text-sm text-gray-500 mt-4 mb-2">
            Выберите форму собственности
          </label>
          <select value={selectionOption} onChange={selectionHandler}>
            {otherOwns.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.full}
                </option>
              );
            })}
          </select>
          <SimpleForm
            topSet="mt-[20px]"
            activeButton={selectedType.id}
            type={selectedType.short}
          />
        </div>
      )}
      {selectedOption === 1 && (
        <SimpleForm topSet="mt-[20px]" activeButton={15} type="ЧП" />
      )}
      {selectedOption === 2 && (
        <SimpleForm topSet="mt-[20px]" activeButton={20} type="ФЛ" />
      )}
    </div>
  );
}

export default ComplexForm;
