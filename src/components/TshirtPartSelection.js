import React from "react";
import { setSelectedPart } from "../redux/actions";

function TshirtPartSelection(props) {
  const { dispatch, partLists, selectedPart } = props;
  console.log(
    "%c 🥪 partList: ",
    "font-size:20px;background-color: #42b983;color:#fff;",
    partLists
  );

  const handleSelectModelPart = (e) => {
    dispatch(setSelectedPart(e.target.value));
  };

  return (
    <div>
      <select value={selectedPart} onChange={handleSelectModelPart}>
        {partLists.map((part, index) => {
          return <option key={index}>{part.name}</option>;
        })}
      </select>
    </div>
  );
}

export default TshirtPartSelection;
