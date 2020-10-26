import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiFdujJzpy9fO6kRZjNpjNGRo43Yb5t4Q",
  authDomain: "fir-d24ae.firebaseapp.com",
  databaseURL: "https://fir-d24ae.firebaseio.com",
  projectId: "fir-d24ae",
  storageBucket: "fir-d24ae.appspot.com",
  messagingSenderId: "511895674856",
  appId: "1:511895674856:web:b2288d2c71b980438b0e5d",
  measurementId: "G-Q0XYQ8KLZ4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
