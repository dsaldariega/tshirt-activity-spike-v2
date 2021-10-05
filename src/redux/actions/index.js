import { TextureLoader } from "three";

export const addPartlistsToState = (partLists) => {
  return {
    type: "ADD_PARTLIST_TO_STATE",
    partLists,
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

export const applyTextureToModel = (partLists) => {
  return {
    type: "APPLY_TEXTURE_TO_MODEL",
    partLists,
  };
};

export const applyTextureToPart = (index, partList, textureImg) => {
  return {
    type: "APPLY_TEXTURE_TO_PART",
    index,
    partList,
    textureImg,
  };
};
