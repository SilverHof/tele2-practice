// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    getDocs 
} from "firebase/firestore";


export const firebaseSetup = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAAo9QTQsAgicQxE3v98Vsv5DRDTboiFTI",
      authDomain: "tele2-practice.firebaseapp.com",
      projectId: "tele2-practice",
      storageBucket: "tele2-practice.appspot.com",
      messagingSenderId: "995871636480",
      appId: "1:995871636480:web:b2e23a9c1364ce33ceace5"
    };
    
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // init service
    const dataBase = getFirestore();
    
    // collection reference
    const collectionRef = collection(dataBase, 'countries');
    
    // get collection data
    getDocs(collectionRef)
        .then((snapshot) => {
            let countries = [];
            snapshot.docs.forEach((doc) => {
                countries.push({
                    ...doc.data(),
                    id: doc.id
                })
            });
            console.log(countries);
            console.log(countries[2].name);
        })
        .catch(error => {
            console.log(error.message);        
        })
}