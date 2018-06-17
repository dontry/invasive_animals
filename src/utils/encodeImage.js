// Read the file into memory.
const fs = require("fs");
import path from "path";

// Covert the image data to a Buffer and base64 encode it.
export function encodeImageFromDir(imageDir) {
  const imageFile = fs.readFileSync(path.resolve(__dirname, imageDir));
  return new Buffer(imageFile).toString("base64");
}

export function encodeImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      const index = result.indexOf("base64,") + "base64,".length;
      const content = result.substr(index);
      resolve(content);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
}
