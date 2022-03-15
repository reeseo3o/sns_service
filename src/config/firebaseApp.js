import firebaseApp from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_ITE1dE1S5FO-zYATc-m2-m5ex2xYIyk',
  authDomain: 'sns-service-189e7.firebaseapp.com',
  databaseURL: 'https://sns-service-189e7-default-rtdb.firebaseio.com',
  projectId: 'sns-service-189e7',
  storageBucket: 'sns-service-189e7.appspot.com',
  messagingSenderId: '1067014276472',
  appId: '1:1067014276472:web:e50dbe8e73bc85b2c4748d',
  measurementId: 'G-FDCEQRQT93'
};

firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;
