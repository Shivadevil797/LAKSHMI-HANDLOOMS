import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHaMo9uSpe_u495e6A8nxF3LseZNS5kqA",
    authDomain: "lakshmi-handlooms-b44f3.firebaseapp.com",
    projectId: "lakshmi-handlooms-b44f3",
    storageBucket: "lakshmi-handlooms-b44f3.appspot.com",
    messagingSenderId: "905627045053",
    appId: "1:905627045053:web:3395815248c919ebfbfbd4",
    measurementId: "G-4FZ39K6KYQ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log("User created:", user);
//     alert("Signup successful! You can now login.");
//     window.location.href = "./login.html"; // redirect to login page
//   })
//   .catch((error) => {
//     console.error("Signup error:", error.message);
//     alert("Signup failed: " + error.message);
//   });

window.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Firebase Configuration
const firebaseConfig = {
    apiKey: "AlzaSyBHaMo9uSpe_u4956e6A8nxF3LseZN5skqA",
    authDomain: "lakshmi-handlooms-b44f3.firebaseapp.com",
    projectId: "lakshmi-handlooms-b44f3",
    storageBucket: "lakshmi-handlooms-b44f3.appspot.com",
    messagingSenderId: "905627045053",
    appId: "1:905627045053:web:339851248c919ebfbfbd4",
    measurementId: "G-4FZ396K6XY"
};


// // Registration function
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Registration successful! You can now log in.');
            window.location.href = "./index.html";  // Redirect to login page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            });
        });
    });
});
