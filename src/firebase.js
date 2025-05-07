import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB19RHdWXhUejfT2LKZKiKZ_p6sakFmK0c",
    authDomain: "graduation-62317.firebaseapp.com",
    projectId: "graduation-62317",
    storageBucket: "graduation-62317.firebasestorage.app",
    messagingSenderId: "936845010654",
    appId: "1:936845010654:web:c367d604e010e9f501044f",
    measurementId: "G-29DBZY9YEL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);