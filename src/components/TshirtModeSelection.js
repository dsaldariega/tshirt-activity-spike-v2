import React from "react";
import { setSelectedMode } from "../redux/actions";

function TshirtModeSelection(props) {
  const { dispatch, selectedMode } = props;
  const onSelectedModeChange = (e) => {
    dispatch(setSelectedMode(e.target.value));
  };
  return (
    <div>
      <input
        type="radio"
        value="Model"
        checked={selectedMode === "Model"}
        onChange={onSelectedModeChange}
      />
      Model
      <input
        type="radio"
        value="Part"
        checked={selectedMode === "Part"}
        onChange={onSelectedModeChange}
      />
      Part
    </div>
  );
}

export default TshirtModeSelection;
