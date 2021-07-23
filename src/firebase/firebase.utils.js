import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCLKpet5F7rOWMe1aZcDXzuaXyhgO6qwAk",
    authDomain: "ecommerce-db-56146.firebaseapp.com",
    projectId: "ecommerce-db-56146",
    storageBucket: "ecommerce-db-56146.appspot.com",
    messagingSenderId: "339427338833",
    appId: "1:339427338833:web:2c10f66a5927560564a670",
    measurementId: "G-6L073BTGTB"
}; 

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
