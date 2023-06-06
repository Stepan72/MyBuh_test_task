import React, { useState } from "react";

function ComplexForm() {
  const [point, setPoint] = useState(0);
  console.log(point);
  return (
    <form className="mt-5">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value1"
            value={point}
            onClick={() => {
              setPoint(0);
            }}
          />
          <label htmlFor="value1">Юридические лица</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value2"
            value={point}
            onClick={() => {
              setPoint(1);
            }}
          />
          <label htmlFor="value2">Частная практика</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            name="Others"
            id="value3"
            value={point}
            onClick={() => {
              setPoint(2);
            }}
          />
          <label htmlFor="value3">Физические лица</label>
        </div>
      </div>
    </form>
  );
}

export default ComplexForm;
