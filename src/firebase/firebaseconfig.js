import firebase from 'firebase';

const firebaseConfig = {
	  apiKey: "AIzaSyApSvHpaG4Xid_exbOEO56QZ7NZQi9HAvs",
	  authDomain: "auth-webwed.firebaseapp.com",
	  projectId: "auth-webwed",
	  storageBucket: "auth-webwed.appspot.com",
	  messagingSenderId: "17267509482",
	  appId: "1:17267509482:web:80671d4061153ab256af93",
	  measurementId: "G-JB0WS1CBG4"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
