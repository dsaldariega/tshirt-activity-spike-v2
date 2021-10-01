import { TextureLoader } from "three";

export const addPartlistToState = (partList) => {
  return {
    type: "ADD_PARTLIST_TO_STATE",
    partList,
  };
};

export const setSelectedPart = (selectedPart) => {
  return {
    type: "SET_SELECTED_PART",
    selectedPart,
  };
};

export const setSelectedMode = (selectedMode) => {
  return {
    type: "SET_SELECTED_MODE",
    selectedMode,
  };
};

export const setSelectedTexture = (selectedTexture) => {
  const name = selectedTexture.name;
  const normalMap = new TextureLoader().load(selectedTexture.normalMap);
  const bumpMap = new TextureLoader().load(selectedTexture.bumpMap);
  return {
    type: "SET_SELECTED_TEXTURE",
    selectedTexture: { name, normalMap, bumpMap },
  };
};
