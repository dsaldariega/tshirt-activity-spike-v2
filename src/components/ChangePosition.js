import React from "react";
import { RepeatWrapping } from "three";

function ChangePosition(props) {
  const { dispatch, partLists } = props;

  const handleHorizontalPosition = (e) => {
    const { value } = e.target;
    partLists.forEach((part) => {
      if (part.material.normalMap !== null) {
                part.material.normalMap.wrapS = RepeatWrapping;part.material.normalMap.repeat.x = 1.5;

        part.material.normalMap.center.x = parseFloat(value);
      }
    });
  };

  const handleVerticalPosition = (e) => {
    const { value } = e.target;
    partLists.forEach((part) => {
      if (part.material.normalMap !== null) {
                part.material.normalMap.wrapT = RepeatWrapping;part.material.normalMap.repeat.y = 1.5

        part.material.normalMap.center.y = parseFloat(value);
      }
    });
  };

  return (
    <div>
      X
      <input
        type="range"
        min="-1"
        max="1"
        step={0.01}
        // value={partPosition.normalMap === null ? 0 : partPosition.center.x}
        onChange={handleHorizontalPosition}
      />
      Y
      <input
        type="range"
        min="-1"
        max="1"
        step={0.01}
        // value={partPosition ? 0 : partPosition.center.y}
        onChange={handleVerticalPosition}
      />
    </div>
  );
}

export default ChangePosition;
