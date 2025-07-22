// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkuXPT4_-k_4tDlzwvET7JLu6YX6x9wVs",
  authDomain: "callpilot-84e9a.firebaseapp.com",
  projectId: "callpilot-84e9a",
  storageBucket: "callpilot-84e9a.firebasestorage.app",
  messagingSenderId: "1038266381598",
  appId: "1:1038266381598:web:ff62ee27da7d3ba70a050f",
  measurementId: "G-FE74GYKSS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('🔥 Firebase initialized successfully');
export { app, analytics };