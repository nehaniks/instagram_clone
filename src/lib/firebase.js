import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB28n7p5aoesjPYOIllLpwc2EF8CzgXstk",
  authDomain: "instagram-clone-55d58.firebaseapp.com",
  projectId: "instagram-clone-55d58",
  storageBucket: "instagram-clone-55d58.appspot.com",
  messagingSenderId: "812405596351",
  appId: "1:812405596351:web:db9f15d822f188461be60a",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
