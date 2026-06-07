import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, initializeAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { Platform } from "react-native";

// Force absolute raw strings with no environment variable lookups

const firebaseConfig = {
  apiKey: "AIzaSyCR1ecOkEiBdkamGDl1aIWoOhuLdy54XRU",
  authDomain: "my-blastx-text.firebaseapp.com",
  projectId: "my-blastx-text",
  storageBucket: "my-blastx-text.firebasestorage.app",
  messagingSenderId: "256290661203",
  appId: "1:256290661203:web:7fd8d85145f73a379537a6",
  measurementId: "G-6ZMFTSD68N"
};
// Initialize app directly
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: browserLocalPersistence
});

const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

export { auth, db };