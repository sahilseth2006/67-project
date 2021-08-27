import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCXkVQuXWgQKbFRfRNhyNffk5jWp0nhznw",
    authDomain: "pro67-c9236.firebaseapp.com",
    databaseURL: "https://pro67-c9236-default-rtdb.firebaseio.com",
    projectId: "pro67-c9236",
    storageBucket: "pro67-c9236.appspot.com",
    messagingSenderId: "312890754522",
    appId: "1:312890754522:web:bff88511e36f23f3572ce3"
  };
  
// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);

export default firebase.database();