import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZGI97VUoNeYD6DeyYsIBXxFbaBeZqhtM",
  authDomain: "react-proyecto-85e3b.firebaseapp.com",
  projectId: "react-proyecto-85e3b",
  storageBucket: "react-proyecto-85e3b.appspot.com",
  messagingSenderId: "7354990707",
  appId: "1:7354990707:web:11b52b7b2ccc491f952a06",
  measurementId: "G-3VMQEJH13R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

reportWebVitals();