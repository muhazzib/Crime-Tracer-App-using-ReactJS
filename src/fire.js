import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
   
        apiKey: "AIzaSyCMC6Lr9_QENmAzqV09N7PrZai_fuiJ-rQ",
        authDomain: "crime-tracer.firebaseapp.com",
        databaseURL: "https://crime-tracer.firebaseio.com",
        projectId: "crime-tracer",
        storageBucket: "crime-tracer.appspot.com",
        messagingSenderId: "521511365382"
};
let fire = firebase.initializeApp(config);

export default fire;