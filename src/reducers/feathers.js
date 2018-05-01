import { combineReducers } from "redux";
import feathers from "@feathersjs/client";
import rest from "@feathersjs/rest-client";
import hooks from "feathers-hooks";
import superagent from "superagent";
import reduxifyServices from "feathers-redux";

export const client = feathers()
  .configure(rest("https://invasive-node.appspot.com").superagent(superagent));

export const reduxifiedServices = reduxifyServices(client, [
  "help_centers",
  "species"
]);
