import { combineReducers } from "redux";
import detection from "./detection";
import notifications from "./notifications";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  detection,
  notifications,
  form: formReducer
});
