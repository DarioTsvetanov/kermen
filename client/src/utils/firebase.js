import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBszhtHKsTRegLJWhRJEKysrzIzOkWWDUE",
    authDomain: "kermen-3024b.firebaseapp.com",
    projectId: "kermen-3024b",
    storageBucket: "kermen-3024b.appspot.com",
    messagingSenderId: "238493323359",
    appId: "1:238493323359:web:3dcf88237619bc1992cbea"
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    }
    else console.log('logged out');
})

export default firebase;

export const auth = firebase.auth();