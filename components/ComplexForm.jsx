import React, { useState, useContext, useEffect } from "react";
import SimpleForm from "./SimpleForm";
import { ownerships } from "@/data/ownerships";
import FirmContext from "@/context/firmContext";
const otherOwns = ownerships.filter((el) => {
  return el.parent_id == 2;
});

function ComplexForm() {
  const { elToEdit } = useContext(FirmContext);
  const [radioOption, setRadioOption] = useState(0);
  const [selectedType, setSelectedType] = useState({
    short: "АО",
    id: 6,
  });

  useEffect(() => {
    if (elToEdit.ownership_id === 15) {
      setRadioOption(1);
    } else if (elToEdit.ownership_id === 20) {
      setRadioOption(2);
    } else {
      setRadioOption(0);
    }
    let shortName = otherOwns.find((el) => {
      return el.id === elToEdit.ownership_id;
    });
    // console.log(shortName);
    let initId = otherOwns.find((el) => {
      return el.id == elToEdit.ownership_id;
    });
    // console.log(initId);
    if (shortName && initId) {
      setSelectedType({
        short: shortName.short,
        id: initId.id,
      });
    }
  }, []);

  //   console.log(radioOption);
  //   console.log(selectedType);

  function selectionHandler(e) {
    // console.log(e.target.value);
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
            checked={radioOption === 0}
            onChange={() => {
              setRadioOption(0);
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
            checked={radioOption === 1}
            onChange={() => {
              setRadioOption(1);
            }}
          />
          <label htmlFor="value2">Частная практика</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value3"
            checked={radioOption === 2}
            value={2}
            onChange={() => {
              setRadioOption(2);
            }}
          />
          <label htmlFor="value3">Физические лица</label>
        </div>
      </div>
      {radioOption !== 1 && radioOption !== 2 && (
        <div className="flex flex-col mb-5">
          <label className="text-left text-sm text-gray-500 mt-4 mb-2">
            Выберите форму собственности
          </label>
          <select value={selectedType.id} onChange={selectionHandler}>
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
            ownId={selectedType.id}
            type={selectedType.short}
          />
        </div>
      )}
      {radioOption == 1 && (
        <SimpleForm topSet="mt-[20px]" ownId={15} type="ЧП" />
      )}
      {radioOption == 2 && (
        <SimpleForm topSet="mt-[20px]" ownId={20} type="ФЛ" />
      )}
    </div>
  );
}

export default ComplexForm;
