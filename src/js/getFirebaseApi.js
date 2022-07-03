import { initializeApp } from 'firebase/app';


export const getFirebaseApi = () => {
    // web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyAAo9QTQsAgicQxE3v98Vsv5DRDTboiFTI',
      authDomain: 'tele2-practice.firebaseapp.com',
      projectId: 'tele2-practice',
      storageBucket: 'tele2-practice.appspot.com',
      messagingSenderId: '995871636480',
      appId: '1:995871636480:web:b2e23a9c1364ce33ceace5'
    };
    
    
    // initialize Firebase
    const app = initializeApp(firebaseConfig);
}