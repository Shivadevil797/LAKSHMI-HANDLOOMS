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

window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registrationForm = document.getElementById("registrationForm");

  // 🔐 LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User signed in:", userCredential.user);
          alert("Login successful!");
          window.location.href = "../index.html";
        })
        .catch((error) => {
          console.error("Login error:", error.code, error.message);
          switch (error.code) {
            case 'auth/user-not-found':
              alert("No user found with this email.");
              break;
            case 'auth/wrong-password':
              alert("Wrong password.");
              break;
            case 'auth/invalid-email':
              alert("Invalid email format.");
              break;
            default:
              alert("Login failed: " + error.message);
          }
        });
    });
  }

  // 📝 REGISTRATION
  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User created:", userCredential.user);
          alert("Registration successful!");
          window.location.href = "./index.html";
        })
        .catch((error) => {
          console.error("Registration error:", error.code, error.message);
          alert(`Error: ${error.message}`);
        });
    });
  }
});


//////////////////////
// window.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.getElementById("loginForm","RegistrationForm");
//     loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value;
//     console.log("Email:", email);
//     console.log("Password:", password);
//     if (!email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

// // // Registration function
// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             alert('Registration successful! You can now log in.');
//             window.location.href = "./index.html";  // Redirect to login page
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(`Error: ${errorMessage}`);
//         });
// });

//       // Sign in with Firebase Authentication
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User signed in:", user);
//         alert("Login successful!");
//         window.location.href = "../index.html"; // redirect to home
//       })
//       .catch((error) => {
//         console.error("Error message:", error.message);
//         alert("Login failed: " + error.message);
//       });
//         switch (error.code) {
//           case 'auth/user-not-found':
//             alert("No user found with this email. Please sign up first.");
//             break;
//         case 'auth/wrong-password':
//           alert("Incorrect password. Please try again.");
//           break;
//         case 'auth/invalid-email':
//           alert("Invalid email format. Please check and try again.");
//           break;
//         default:
//           alert("Login failed: " + error.message);
//     }
//   });
// });



// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log("User created:", user);
//     alert("Signup successful! You can now login.");
//     window.location.href = "./register.html"; // redirect to login page
//   })
//   .catch((error) => {
//     console.error("Signup error:", error.message);
//     alert("Signup failed: " + error.message);
//   });

//     const submitBtn = document.getElementById("submitBtn");
//     submitBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
    
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("User created:", user);

//             const userData={
//                 email: email
//             };
//             const docRef = doc(db, "users", user.uid);
//             return setDoc(docRef, userData);
//         }).then(() => {
//             console.log("User data saved to Firestore");
//             alert("User created successfully!");
//             window.location.href = "index.html"; // Redirect to home page
//         }).catch((error) => {
//             console.error("Error saving user data:", error);
//         });
//     });

// const submit = document.getElementById("signIn");
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//                 const user = userCredential.user;
//                 console.log("User signed in:", user);
//             })
//             .catch((error) => {
//                 console.error("Error signing in:", error);
//             });
//     });

