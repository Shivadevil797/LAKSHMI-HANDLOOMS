// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wOEJYeTQjzw0m-2NjdCEmqrfZcu1gwk",
  authDomain: "lakshmi-handlooms.firebaseapp.com",
  projectId: "lakshmi-handlooms",
  storageBucket: "lakshmi-handlooms.firebasestorage.app",
  messagingSenderId: "855482460043",
  appId: "1:855482460043:web:9f5df7cd734158bd4bf18e",
  measurementId: "G-8FENGSKXV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submitbutton = document.getElementById("submit-button");

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating user ....");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  // alert("Form submitted! Email: " + email + ", Password: " + password);
  // Handle form submission
});
