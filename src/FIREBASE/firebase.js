import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALLzLGwpQmcgz2q60rsoqDW8x5LLxILQM",
    authDomain: "precious-pieces.firebaseapp.com",
    databaseURL: "https://precious-pieces.firebaseio.com",
    projectId: "precious-pieces",
    appId: "1:862877653946:web:64a087305e48471d009b83",
    measurementId: "G-NE4HBKLFVH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

