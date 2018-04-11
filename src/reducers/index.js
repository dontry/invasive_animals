import { combineReducers } from "redux";
import images from "./detection";
import notifications from "./notifications";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  images,
  notifications,
  form: formReducer
});
