import { Texture, TextureLoader } from "three";

const initialState = {
  selectedMode: "",
  selectedPart: "",
  selectedTexture: {},
  partList: [],
};

const tshirtmodelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PARTLIST_TO_STATE":
      return { ...state, partList: [...action.partList] };
    case "SET_SELECTED_MODE":
      return { ...state, selectedMode: action.selectedMode };
    case "SET_SELECTED_PART":
      return { ...state, selectedPart: action.selectedPart };
    case "SET_SELECTED_TEXTURE":
      console.log(
        "%c 🍖 action.selectedTexture: ",
        "font-size:20px;background-color: #93C0A4;color:#fff;",
        action.selectedTexture
      );
      return { ...state, selectedTexture: action.selectedTexture };

    // case "APPLY_TEXTURE_TO_MODEL":
    //     return {...state, partList: }
    default:
      return state;
  }
};

export default tshirtmodelReducer;
