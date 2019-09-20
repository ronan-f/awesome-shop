import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBC_mKIMFrKd-Zp4LZ8RyIijU1ohpIwJds",
  authDomain: "shop-db-1a2c5.firebaseapp.com",
  databaseURL: "https://shop-db-1a2c5.firebaseio.com",
  projectId: "shop-db-1a2c5",
  storageBucket: "",
  messagingSenderId: "247042474314",
  appId: "1:247042474314:web:5099cd2842d190754dc1b3"
};

firebase.initializeApp(config);