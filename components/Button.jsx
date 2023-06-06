import React from "react";

function Button({ type, text, id, activeButton, setActiveButton }) {
  const defaultButtonClass = "flex-1 bg-zinc-200 rounded-md";
  const activeButtonClass =
    "flex-1 bg-sky-700 text-white font-light rounded-md";

  return (
    <button
      type={type}
      className={`${
        activeButton == id ? activeButtonClass : defaultButtonClass
      }`}
      onClick={() => {
        setActiveButton(id);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
