import { combineReducers } from "redux";
import tshirtmodelReducer from "./tshirtmodel";

const allReducers = combineReducers({
  tshirtmodel: tshirtmodelReducer,
});

export default allReducers;
