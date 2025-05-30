import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHaMo9uSpe_u495e6A8nxF3LseZNS5kqA",
    authDomain: "lakshmi-handlooms-b44f3.firebaseapp.com",
    projectId: "lakshmi-handlooms-b44f3",
    storageBucket: "lakshmi-handlooms-b44f3.firebasestorage.app",
    messagingSenderId: "905627045053",
    appId: "1:905627045053:web:3395815248c919ebfbfbd4",
    measurementId: "G-4FZ39K6KYQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    const signUp = document.getElementById("submit");
    signUp.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // const name = document.getElementById("name").value;
        // const phone = document.getElementById("phone").value;

        const auth = getAuth(app);
        const db = getFirestore(app);
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User created:", user);
            const userData={
                // name: name,
                // phone: phone,
                email: email
            };
            // Add user data to Firestore
            // setDoc(doc(db, "users", user.uid), userData).then(() => {
            //     console.log("User data saved to Firestore");

            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData).then(() => {
                console.log("User data saved to Firestore");
                // Optionally, redirect or show a success message
            }).then(() => {
                alert("User created successfully!");
                window.location.href = "index.html"; // Redirect to home page
            });
        }).catch((error) => {
            console.error("Error saving user data:", error);
        });
    }).catch((error) => {
        console.error("Error creating user:", error);
    });
const signIn = document.getElementById("signIn");
signIn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
                const user = userCredential.user;
                console.log("User signed in:", user);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    });

