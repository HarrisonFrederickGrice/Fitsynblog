let firebaseConfig = {
    apiKey: "AIzaSyChowsfulXM1dXnOqqJOc4Q0Yj6n37BxKU",
    authDomain: "fitsynblog.firebaseapp.com",
    projectId: "fitsynblog",
    storageBucket: "fitsynblog.appspot.com",
    messagingSenderId: "82997781447",
    appId: "1:82997781447:web:54690df9cd86ff0d6e6fe2",
    measurementId: "G-SMB0ZHGZ2P"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();