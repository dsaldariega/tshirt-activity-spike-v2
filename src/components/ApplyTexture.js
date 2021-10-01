import React from "react";
import { addPartlistToState } from "../redux/actions";

function ApplyTexture(props) {
  const { dispatch, selectedTexture, partList } = props;

  const applyTexture = () => {
    partList.forEach((part) => {
      part.material.normalMap = selectedTexture.normalMap;
    });
    dispatch(addPartlistToState(partList));
  };

  return (
    <div>
      <button onClick={applyTexture}>Apply texture to model</button>
    </div>
  );
}

export default ApplyTexture;
