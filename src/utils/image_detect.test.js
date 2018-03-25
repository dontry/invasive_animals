import vision from "@google-cloud/vision";


const client = new vision.ImageAnnotatorClient();
const imgURL = '';

client
    .labelDetection(imgURL)
    .then(res => {
        const labels = results[0].labelAnnotations;

        console.log('Labels:')
        for(const label of labels) {
            console.log(label.labelDetection);
        }
    })
    .catch(err => {
        console.error('ERROR:', err);
    })
