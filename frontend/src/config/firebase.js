import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDLckagGtjh3BLAJ1zFEOSldVD8gyeJNOY",
  authDomain: "donatemern.firebaseapp.com",
  projectId: "donatemern",
  storageBucket: "donatemern.appspot.com",
  messagingSenderId: "621340818062",
  appId: "1:621340818062:web:aae5646c98a9e5e4aee7df",
  measurementId: "G-ST8LB0DE2Z"
};

  firebase.initializeApp(firebaseConfig);
//analytics is optional
  firebase.analytics();


// we need only storage from firebase 
const storage = firebase.storage()

export {
    storage , firebase as default 
}
