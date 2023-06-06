import React from "react";

function FirmCard() {
  return (
    <div className="w-96 h-16 m-1 flex flex-row justify-between border drop-shadow-lg rounded-md">
      <div className="ml-5 w-16 p-2">Image</div>
      <div>Text</div>
      <div className="mr-5 py-5 flex flex-row">
        <p>but1</p>
        <p>but2</p>
      </div>
    </div>
  );
}

export default FirmCard;
