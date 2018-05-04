import axios from "axios";
import { SpeciesDB } from "./firebase";
import { GOOGLE_VISION_APIKEY } from "./credentials";
import feathers from "@feathersjs/client";
import rest from "@feathersjs/rest-client";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_APIKEY}`;

export function sendImage(content, options) {
  const payload = {
    requests: [
      {
        image: { content: content },
        features: options.features
      }
    ]
  };
  return axios.post(GOOGLE_VISION_API_URL, payload);
}

export async function getAllSpecies() {
  const dbRef = SpeciesDB.database().ref();
  const snap = await dbRef.once("value");
  return snap.val();
}

//Create Feathersjs RESTFUL API
export const client = feathers()
  // .configure(rest("https://invasive-node.appspot.com").superagent(superagent));
  .configure(rest("http://localhost:3030").axios(axios));
