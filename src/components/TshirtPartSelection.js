import React, { useState, useEffect } from "react";
import { setSelectedPart } from "../redux/actions";

function TshirtPartSelection(props) {
  const { dispatch, partList, selectedPart } = props;
  console.log(
    "%c 🥪 partList: ",
    "font-size:20px;background-color: #42b983;color:#fff;",
    partList
  );

  const handleSelectModelPart = (e) => {
    dispatch(setSelectedPart(e.target.value));
  };

  return (
    <div>
      <select value={selectedPart} onChange={handleSelectModelPart}>
        {partList.map((part) => {
          return <option key={part.uuid}>{part.name}</option>;
        })}
      </select>
    </div>
  );
}

export default TshirtPartSelection;
