import { combineReducers } from "redux";
import images from "./images";
import notifications from "./notifications";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  images,
  notifications,
  form: formReducer
});
