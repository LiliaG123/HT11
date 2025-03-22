import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
const db = getFirestore(app);  // Firestore instance

async function getMood(userId) {
    const userDocRef = doc(db, 'users', userId); 
    try {
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        console.log("working");
        const points = docSnapshot.data().points;
        console.log(points);
        let tracker = document.getElementById("tracker");
        if(points*5 > 500){
            tracker.style.width = "500px";
        }else{
            tracker.style.width = points*5 + "px";
        }
       
        if(points <= 25){
            document.getElementById("Revie").src = "../../pictures/revie/Cvetq(3).png";
        }
        if(points <=75 && points > 25){
            document.getElementById("Revie").src = "../../pictures/revie/Cvetq(2).png";
        }
        if(points > 75){
            document.getElementById("Revie").src = "../../pictures/revie/Cvetq4.png";
        }
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
}
getMood(userId);

async function getPoints(userId) {
    try {
        const userDocRef = doc(db, "users", userId);

        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
            const points = docSnapshot.data().points;
            console.log("User's points: ${points}");
            return points;
        } else {
            console.log("No such user document!");
            return null;
        }
    } catch (error) {
        console.error("Error reading user data:", error);
        return null;
    }
}
async function updatePoints(userId, points) {
    try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, {
          points: points
        });

        getMood(userId);

        console.log("User points updated successfully!");
    } catch (error) {
        console.error("Error updating user points:", error);
    }
}

async function enterData() {
    let sleep = document.getElementById("sleepInput").value;
    let meditate = document.getElementById("mediInput").value;
    let yoga = document.getElementById("yogaInput").value;
    let water = document.getElementById("waterInput").value;
    let pointsData = await getPoints(userId);
    let points = Number(pointsData);
    let flag = 0;

    if (isNaN(sleep) || sleep < 0) {
        //text = "Input not valid";
    } else {
        points += sleep * 5;
        flag = 1;
    }

    if (isNaN(meditate) || meditate < 0) {
        //text = "Input not valid";
    } else {
        points += meditate * 2;
        flag = 1;
    }

    if (isNaN(water) || water < 0) {
        //text = "Input not valid";
    } else {
        points += water * 5;
        flag = 1;
    }

    if (isNaN(yoga) || yoga < 0) {
        //text = "Input not valid";
    } else {
        points += yoga * 2;
        flag = 1;
    }

    updatePoints(userId, Number(points));
}

window.enterData = enterData;

