import { combineReducers } from "redux";
import detection from "./detection";
import notifications from "./notifications";
import { reduxifiedServices } from "./feathers";
import email from "./email";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  detection,
  notifications,
  email,
  form: formReducer,
  helpCenters: reduxifiedServices.help_centers.reducer,
  species: reduxifiedServices.species.reducer,
  speciesImages: reduxifiedServices.species_images.reducer
});
