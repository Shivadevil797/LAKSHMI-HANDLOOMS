// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
// import {getFirestore,setDoc,doce} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8wOEJYeTQjzw0m-2NjdCEmqrfZcu1gwk",
//   authDomain: "lakshmi-handlooms.firebaseapp.com",
//   databaseURL: "https://lakshmi-handlooms-default-rtdb.firebaseio.com",
//   projectId: "lakshmi-handlooms",
//   storageBucket: "lakshmi-handlooms.firebasestorage.app",
//   messagingSenderId: "855482460043",
//   appId: "1:855482460043:web:9f5df7cd734158bd4bf18e",
//   measurementId: "G-8FENGSKXV9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const signUp = document.getElementById("signUp");
// signUp.addEventListener("click", (e) => {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
// //   const name = document.getElementById("name").value;
// //   const phone = document.getElementById("phone").value;

//   const auth = getAuth();
//   const db=getFirestore();

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log("User created:", user);
//       // Add user data to Firestore
//       const db = getFirestore(app);
//       setDoc(doc(db, "users", user.uid), {
//         // name: name,
//         // phone: phone,
//         email: email
//       }).then(() => {
//         console.log("User data saved to Firestore");
//       }).catch((error) => {
//         console.error("Error saving user data:", error);
//       });
//     })
//     .catch((error) => {
//       console.error("Error creating user:", error);
//     });
// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  const auth = getAuth(app);
  const db = getFirestore(app);
    const signUp = document.getElementById("submit");
    signUp.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // const name = document.getElementById("name").value;
        // const phone = document.getElementById("phone").value;
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User created:", user);
            // Add user data to Firestore
            setDoc(doc(db, "users", user.uid), {
                // name: name,
                // phone: phone,
                email: email
            }).then(() => {
                console.log("User data saved to Firestore");
            }).catch((error) => {
                console.error("Error saving user data:", error);
            });
            })
            .catch((error) => {
            console.error("Error creating user:", error);
            });
        }
    );
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

