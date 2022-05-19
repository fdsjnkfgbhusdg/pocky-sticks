// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDodFkfjSEF9Q9UTCRuCwwIVqgPOH0Az5s",
  authDomain: "hello-6b52b.firebaseapp.com",
  databaseURL: "https://hello-6b52b-default-rtdb.firebaseio.com",
  projectId: "hello-6b52b",
  storageBucket: "hello-6b52b.appspot.com",
  messagingSenderId: "399394191789",
  appId: "1:399394191789:web:ac7c3ee9249d835ea7c924",
  measurementId: "G-6H64LMK0YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const config = {
    apiKey: "AIzaSyDodFkfjSEF9Q9UTCRuCwwIVqgPOH0Az5s",
    authDomain: "hello-6b52b.firebaseapp.com",
    databaseURL: "https://hello-6b52b-default-rtdb.firebaseio.com",
    projectId: "hello-6b52b",
    storageBucket: "hello-6b52b.appspot.com",
    messagingSenderId: "399394191789",
    appId: "1:399394191789:web:ac7c3ee9249d835ea7c924",
    measurementId: "G-6H64LMK0YZ",
    CometChatAppId: "20679348f4c95ee2",
    CometChatRegion: "us",
    CometChatAuthKey: "476cc58d95826d8e124c78d714b1f3873dba5e2f",
    CometChatAPIKey: "476cc58d95826d8e124c78d714b1f3873dba5e2f",
    CometChatWidgetId: "35cb098e-9ba7-4710-91ef-d37af279acde"
  };