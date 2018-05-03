import ax from "axios";
import { SpeciesDB, ImageDB, HelpCenterDB } from "./firebase";
import feathers from "@feathersjs/client";
import rest from "@feathersjs/rest-client";
import superagent from "superagent";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL =
  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I";

export function sendImage(content, options) {
  const payload = {
    requests: [
      {
        image: { content: content },
        features: options.features
      }
    ]
  };
  return ax.post(GOOGLE_VISION_API_URL, payload);
}

export async function getAllSpecies() {
  const dbRef = SpeciesDB.database().ref();
  const snap = await dbRef.once("value");
  return snap.val();
}


export const client = feathers()
// .configure(rest("https://invasive-node.appspot.com").superagent(superagent));
    .configure(rest("http://localhost:3030").superagent(superagent));
