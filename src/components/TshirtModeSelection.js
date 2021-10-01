import React from "react";
import { setSelectedMode } from "../redux/actions";

function TshirtModeSelection(props) {
  const { dispatch, selectedMode } = props;
  console.log('%c 🍮 selectedMode: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', selectedMode);

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
      By part
    </div>
  );
}

export default TshirtModeSelection;
