import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

reportWebVitals();