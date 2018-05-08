import axios from "axios";
import { GOOGLE_VISION_APIKEY } from "./credentials";
import feathers from "@feathersjs/client";
import rest from "@feathersjs/rest-client";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_APIKEY}`;

const DEFAULT_OPTIONS = {
  features: [
    {
      type: "WEB_DETECTION",
      maxResults: 20
    },
    {
      type: "TYPE_UNSPECIFIED",
      maxResults: 20
    },
    {
      type: "LABEL_DETECTION",
      maxResults: 20
    },
    {
      type: "SAFE_SEARCH_DETECTION"
    }
  ]
};

export const DEFAULT_SAFE_SEARCH_PROPERTIES = [
  "adult",
  "spoof",
  "violence",
  "racy"
];

export async function sendImage(content, options = DEFAULT_OPTIONS) {
  const payload = {
    requests: [
      {
        image: { content: content },
        features: options.features
      }
    ]
  };
  const res = await axios.post(GOOGLE_VISION_API_URL, payload);
  return res.data.responses[0];
}

//https://cloud.google.com/vision/docs/detecting-safe-search#vision-safe-search-detection-gcs-protocol
export function checkImageSatefy(meta) {
  const annotation = meta.safeSearchAnnotation;
  for (const property in annotation) {
    if (
      annotation[property] === "VERY_LIKELY" ||
      annotation[property] === "LIKELY"
    ) {
      return false;
    }
  }
  return true;
}

//Create Feathersjs RESTFUL API
export const client = feathers()
  .configure(rest("https://invasive-node.appspot.com").axios(axios));
  // .configure(rest("http://localhost:3030").axios(axios));
