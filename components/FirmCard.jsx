"use client";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function FirmCard({ name, innNumber, logo }) {
  return (
    <div
      className="h-20 m-1 flex flex-row justify-between border shadow-lg rounded-md hover:border-blue-500"
      style={{ width: "28rem" }}
    >
      <div className="flex flex-row">
        <div className="ml-5 w-20 p-2">
          <img
            className="p-2"
            src={logo ? logo : "/building.png"}
            alt="firm-image"
          />
        </div>
        <div className="ml-4 w-56 my-3 gap-1 flex flex-col justify-center">
          <div>
            <p className="text-sm text-gray-500">{name}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-sm text-gray-500">ИНН/БИН</p>
            <p className="text-sm text-gray-500">{innNumber}</p>
          </div>
        </div>
      </div>
      <div className="mr-6 py-5 flex flex-row gap-3 items-center">
        <FaEdit size={20} className="text-blue-400" />
        <FaTrashAlt size={20} className="text-red-400" />
      </div>
    </div>
  );
}

export default FirmCard;
