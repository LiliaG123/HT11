import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

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
    const userDocRef = doc(db, 'undefined', userId); 
    try {
      const docSnapshot = await getDoc(userDocRef);
      if (docSnapshot.exists()) {
        const points = docSnapshot.data().dailyPoints;
        let tracker = document.getElementById("tracker");
        if(points*5 > 500){
            tracker.style.width = "500px";
        }else{
            tracker.style.width = points*5 + "px";
        }
       
        if(points <= 25){
            document.getElementById("Revie").src = "../pictures/revie/Cvetq(3).png";
            document.getElementById("currentMood").innerHTML = "I am a little bit disappointed. I am so desperate for your help!";
        }
        if(points <=75 && points > 25){
            document.getElementById("Revie").src = "../pictures/revie/Cvetq(2).png";
            document.getElementById("currentMood").innerHTML = "You are fine but I need more attention. Would you do your tasks to help me!";
        }
        if(points > 75){
            document.getElementById("Revie").src = "../pictures/revie/Cvetq4.png";
            document.getElementById("currentMood").innerHTML = "I am so happy! You are doing great! I am proud of you!";
        }
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  }
  getUserName('user');

  

/*const mood = {
    sad: true,
    happy: false,
    dying: false
}

let message = '';

if (mood.happy) {
    message = ('I am so happy! You are doing great! I am proud of you');
} else if (mood.sad) {
    message = ('You are fine but I need more attention. Would you do your tasks to help me?');
} else if (mood.dying) {
    message = 'I am a little bit disappointed. I am so desperate for your help!';
}

document.body.innerHTML = message;*/



    
