// Read the file into memory.
const fs = require("fs");

// Covert the image data to a Buffer and base64 encode it.
export default imageDir => {
  const imageFile = fs.readFileSync(imageDir);
  return new Buffer(imageFile).toString("base64");
};
