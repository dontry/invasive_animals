import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0kpwKo8KXcfUmCslP-2w_CjmUEOTq-C8",
  authDomain: "invasivespecies-500c6.firebaseapp.com",
  databaseURL: "https://invasivespecies-500c6.firebaseio.com",
  projectId: "invasivespecies-500c6",
  storageBucket: "invasivespecies-500c6.appspot.com",
  messagingSenderId: "431706292229"
};

const patrick_species_config = {
  apiKey: "AIzaSyCEiBjDhDeseCifLgG8intXTJJ_9qpp1gg",
  authDomain: "invasiveanimal-g4.firebaseapp.com",
  databaseURL: "https://invasiveanimal-g4.firebaseio.com",
  projectId: "invasiveanimal-g4",
  storageBucket: "invasiveanimal-g4.appspot.com",
  messagingSenderId: "832596993581"
};

const patrick_image_config = {
  // Initialize Firebase
  apiKey: "AIzaSyBtw56QCjkazr8SmFkFlHH65R0_ZL3ddTo",
  authDomain: "animal-images.firebaseapp.com",
  databaseURL: "https://animal-images.firebaseio.com",
  projectId: "animal-images",
  storageBucket: "animal-images.appspot.com",
  messagingSenderId: "328148993504"
};

export const SpeciesDB = firebase.initializeApp(patrick_species_config);
export const ImageDB = firebase.initializeApp(patrick_image_config, 'image');

export default firebase;
