const initialState = {
  selectedMode: "",
  selectedPart: "",
  selectedTexture: {},
  partLists: [],
};

const tshirtmodelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PARTLIST_TO_STATE":
      return { ...state, partLists: [...action.partLists] };
    case "SET_SELECTED_MODE":
      return { ...state, selectedMode: action.selectedMode };
    case "SET_SELECTED_PART":
      return { ...state, selectedPart: action.selectedPart };
    case "SET_SELECTED_TEXTURE":
      return { ...state, selectedTexture: action.selectedTexture };
    // case "APPLY_TEXTURE_TO_PART":
    //   return {
    //     ...state,
    //     partList: (action.partList[action.index].material.map =
    //       action.textureImg),
    //   };
    case "APPLY_TEXTURE_TO_MODEL":
      return { ...state, partList: action.partList };

    default:
      return state;
  }
};

export default tshirtmodelReducer;
