import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from "firebase/auth";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager 
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// REPLACE WITH YOUR ACTUAL FIREBASE CONFIG FROM CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyBcHy_ee5Vwd8qht2lx6yoov1b0Wq91IEU",
  authDomain: "project-b6381ba6-25b7-4169-8c5.firebaseapp.com",
  databaseURL: "https://project-b6381ba6-25b7-4169-8c5-default-rtdb.firebaseio.com",
  projectId: "project-b6381ba6-25b7-4169-8c5",
  storageBucket: "project-b6381ba6-25b7-4169-8c5.firebasestorage.app",
  messagingSenderId: "427442428387",
  appId: "1:427442428387:web:47ba0aaab53f9075d068d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with cross-platform persistence
const auth = initializeAuth(app, {
  persistence: Platform.OS === 'web' 
    ? browserLocalPersistence 
    : getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore with Persistent Cache
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: Platform.OS === 'web' ? persistentMultipleTabManager() : undefined
  })
});

export { auth, db };
