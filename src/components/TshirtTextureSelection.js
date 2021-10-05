import React from "react";
import { setSelectedTexture } from "../redux/actions";
import { maps } from "./../utils/maps";

function TshirtTextureSelection(props) {
  const { dispatch, selectedTexture } = props;
  const handleChangeNormalTexture = (e) => {
    dispatch(setSelectedTexture(maps[e.target.value]));
  };
  return (
    <div>
      <select
        value={maps.findIndex((map) => map.name === selectedTexture.name)}
        onChange={handleChangeNormalTexture}
      >
        {maps.map((map, index) => {
          return (
            <option key={index} value={index}>
              {map.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TshirtTextureSelection;
