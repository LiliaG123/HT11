import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVthqEceSCv-aXZ7pMHqs1Z25GWUtYNAw",
    authDomain: "team-undefined-bca8f.firebaseapp.com",
    projectId: "team-undefined-bca8f",
    storageBucket: "team-undefined-bca8f.firebasestorage.app",
    messagingSenderId: "787257862469",
    appId: "1:787257862469:web:3128395e729b7beaf0362c",
    measurementId: "G-SF5JCSBCDF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('signInBtn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User ID:", user.uid);

            // Store user ID for use across pages
            localStorage.setItem("userId", user.uid);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("userEmail", user.email);

            updateUI(user);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Sign out function
document.getElementById('signOutBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error(error);
    });
});

// Listen to authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('whenSignedIn').hidden = false;
        document.getElementById('whenSignedOut').hidden = true;
        document.getElementById('userDetails').textContent = `Hello, ${user.displayName}. Your UID is: ${user.uid}`;
    } else {
        document.getElementById('whenSignedIn').hidden = true;
        document.getElementById('whenSignedOut').hidden = false;
    }
});