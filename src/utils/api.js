import ax from "axios";

//API_KEY AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I
const GOOGLE_VISION_API_URL =
  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC-PWrqdqmyEc89eBv4rAfyWiqLcVZTV8I";

export function sendImage(content, options) {
  const payload = {
    "requests": [
      {
        "image": { "content": content },
        "features": options.features
      }
    ]
  };
  return ax.post(GOOGLE_VISION_API_URL, payload);
}

 

