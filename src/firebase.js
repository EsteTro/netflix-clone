import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8qPb2OehH7QJ302Vkuh88zGHH0RIT3c4",
  authDomain: "netflix-clone-master-20343.firebaseapp.com",
  projectId: "netflix-clone-master-20343",
  storageBucket: "netflix-clone-master-20343.appspot.com",
  messagingSenderId: "1034628274322",
  appId: "1:1034628274322:web:b79e0c34c620f69db4ae4b",
  measurementId: "G-HYK4PHBZ20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
