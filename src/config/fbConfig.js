import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDTm409Tw9hHx842iSUHoSBZI1klKQRNXY",
  authDomain: "marioplan-650fa.firebaseapp.com",
  databaseURL: "https://marioplan-650fa.firebaseio.com",
  projectId: "marioplan-650fa",
  storageBucket: "marioplan-650fa.appspot.com",
  messagingSenderId: "272274904785",
  appId: "1:272274904785:web:19cfe9e9b3369ca7cdd7f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampInSnapshots : true});

export default firebase;