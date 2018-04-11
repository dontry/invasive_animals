import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD0kpwKo8KXcfUmCslP-2w_CjmUEOTq-C8",
  authDomain: "invasivespecies-500c6.firebaseapp.com",
  databaseURL: "https://invasivespecies-500c6.firebaseio.com",
  projectId: "invasivespecies-500c6",
  storageBucket: "invasivespecies-500c6.appspot.com",
  messagingSenderId: "431706292229"
};

firebase.initializeApp(config);

export default firebase;
