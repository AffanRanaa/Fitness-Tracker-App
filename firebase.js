// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpX4hkJFAn777iqyQs_XDkqe-tk5B6SMM",
  authDomain: "mad-project-e3e37.firebaseapp.com",
  projectId: "mad-project-e3e37",
  storageBucket: "mad-project-e3e37.appspot.com",
  messagingSenderId: "300237684173",
  appId: "1:300237684173:web:432ba2b932a728e3025884",
  measurementId: "G-V0W4TVP9XF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
