import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const userId = localStorage.getItem("userId");

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
        document.getElementById("username").innerHTML = userName;
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  }
  getUserName(userId);

  