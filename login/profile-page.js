const userId = localStorage.getItem("userId");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAVthqEceSCv-aXZ7pMHqs1Z25GWUtYNAw",
    authDomain: "team-undefined-bca8f.firebaseapp.com",
    projectId: "team-undefined-bca8f",
    storageBucket: "team-undefined-bca8f.firebasestorage.app",
    messagingSenderId: "787257862469",
    appId: "1:787257862469:web:3128395e729b7beaf0362c",
    measurementId: "G-SF5JCSBCDF"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getUserName(userId) {
    const userDocRef = doc(db, 'users', userId); 
    try {
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const userName = docSnapshot.data().username;
        document.getElementById("username").placeholder = userName;
        const userAge = docSnapshot.data().age;
        document.getElementById("age").placeholder = userAge;
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
}



getUserName(userId);

async function enterData() {
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let flag = 0;

    if (isNaN(username) || username == "") {
        flag = 0;
    } else {
        flag = 1;
    }

    if (isNaN(age) || age < 0) {
       flag = 0;
    } else {
        flag = 1;
    }

    // Store valid input in Firestore
    try {
        await setDoc(doc(db, "users", userId.toString()), {
            username: username, 
            age: age,
            points: 0
        });
        console.log("Input stored successfully in Firestore!");
    } catch (error) {
        console.error("Error storing input:", error);
    }
}

window.enterData = enterData;



