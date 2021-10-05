import React from "react";
import { addPartlistsToState } from "../redux/actions";

function ApplyTexture(props) {
  const { dispatch, selectedTexture, partLists, selectedMode, selectedPart } =
    props;

  const applyTexture = () => {
    if (selectedMode === "Model") {
      partLists.forEach((part) => {
        part.material.normalMap = selectedTexture.normalMap;
        part.material.normalMap.needsUpdate = true;
        part.material.needsUpdate = true;
        dispatch(addPartlistsToState(partLists));
      });
    } else {
      const part = partLists.find((part) => {
        return part.name === selectedPart;
      });
      part.material.normalMap = selectedTexture.normalMap;
      part.material.normalMap.needsUpdate = true;
      part.material.needsUpdate = true;
      dispatch(addPartlistsToState(partLists));
    }

    // dispatch(applyTextureToModel(partLists));
  };
  const removeTexture = () => {
    partLists.forEach((part) => {
      part.material.normalMap = null;
      part.material.needsUpdate = true;
    });
    dispatch(addPartlistsToState(partLists));
  };

  return (
    <div>
      {selectedMode === "Model" ? (
        <div>
          <button onClick={applyTexture}>Apply texture to model</button>
          <button onClick={removeTexture}>Remove texture</button>
        </div>
      ) : (
        <div>
          <button onClick={applyTexture}>Apply texture to part</button>
          <button onClick={removeTexture}>Remove texture</button>
        </div>
      )}
    </div>
  );
}

export default ApplyTexture;
