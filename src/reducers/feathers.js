import reduxifyServices from "feathers-redux";
import {client} from "../utils/api"


export const reduxifiedServices = reduxifyServices(client, [
  "help_centers",
  "species",
  "species_images"
]);
