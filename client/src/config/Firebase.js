import * as firebase from 'firebase/app';
import 'firebase/auth';  

const Firebase = firebase.initializeApp({
    apiKey: 'AIzaSyCQfBSFF0clkjj4NMHp8Mt0aKxDLxCjo-c',
    authDomain: 'capstone-project-71a51.firebaseapp.com',
    databaseURL: 'https://capstone-project-71a51.firebaseio.com',
    projectId: 'capstone-project-71a51',
    storageBucket: 'capstone-project-71a51.appspot.com',
    messagingSenderId: '1037745506647',
    appId: '1:1037745506647:web:c6c827d693f31e72755612',
    measurementId: 'G-CDMFH7ZNSW'
});

export default Firebase;