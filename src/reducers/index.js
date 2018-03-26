import { combineReducers } from "redux";
import images from "./images";
import notifications from './notifications';

export default combineReducers({
  images,
  notifications
});
