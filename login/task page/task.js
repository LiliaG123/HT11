import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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

async function enterData() {
    let sleep = document.getElementById("sleepInput").value;
    let meditate = document.getElementById("mediInput").value;
    let yoga = document.getElementById("yogaInput").value;
    let water = document.getElementById("waterInput").value;
    let points = 0;
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
    // Store valid input in Firestore
    try {
        await setDoc(doc(db, "user_inputs", Date.now().toString()), {
            input_value: points,
            timestamp: new Date()
        });
        console.log("Input stored successfully in Firestore!");
    } catch (error) {
        console.error("Error storing input:", error);
    }
}

window.enterData = enterData;

