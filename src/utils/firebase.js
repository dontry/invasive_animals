import * as firebase from "firebase";
import { 
  FIREBASE_SPECIES_APIKEY,
  FIREBASE_IMAGE_APIKEY,
  FIREBASE_HELP_CENTER_APIKEY
 } from "./credentials";

const config = {
  apiKey: FIREBASE_SPECIES_APIKEY authDomain: "invasivespecies-500c6.firebaseapp.com",
  databaseURL: "https://invasivespecies-500c6.firebaseio.com",
  projectId: "invasivespecies-500c6",
  storageBucket: "invasivespecies-500c6.appspot.com",
  messagingSenderId: "431706292229"
};

const patrick_species_config = {
  apiKey: FIREBASE_SPECIES_APIKEY,
  authDomain: "invasiveanimal-g4.firebaseapp.com",
  databaseURL: "https://invasiveanimal-g4.firebaseio.com",
  projectId: "invasiveanimal-g4",
  storageBucket: "invasiveanimal-g4.appspot.com",
  messagingSenderId: "832596993581"
};

const patrick_image_config = {
  apiKey: FIREBASE_IMAGE_APIKEY,
  authDomain: "animal-images.firebaseapp.com",
  databaseURL: "https://animal-images.firebaseio.com",
  projectId: "animal-images",
  storageBucket: "animal-images.appspot.com",
  messagingSenderId: "328148993504"
};

var patrick_help_center_config = {
  apiKey:  FIREBASE_HELP_CENTER_APIKEY,
  authDomain: "helpcenter-g4.firebaseapp.com",
  databaseURL: "https://helpcenter-g4.firebaseio.com",
  projectId: "helpcenter-g4",
  storageBucket: "helpcenter-g4.appspot.com",
  messagingSenderId: "614740582032"
};

export const SpeciesDB = firebase.initializeApp(patrick_species_config);
export const ImageDB = firebase.initializeApp(patrick_image_config, "image");
export const HelpCenterDB = firebase.initializeApp(
  patrick_help_center_config,
  "help_center"
);

export default firebase;
