import React from "react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export default function ImgBox({ imgURL }) {
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const toggleCheckbox = () => {
    setCheckboxStatus(!checkboxStatus);
  };
  return (
    <>
      <img
        className="h-auto border border-violet-500 max-w-full rounded-lg relative"
        src={imgURL}
        alt=""
      />
      <div
        className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer"
        onClick={toggleCheckbox}
      >
        <div className="absolute top-3 left-3">
          <input
            checked={checkboxStatus}
            onChange={toggleCheckbox}
            type="checkbox"
            className="absolute w-6 h-6 cursor-pointer opacity-100"
          />
        </div>
      </div>
    </>
  );
}
