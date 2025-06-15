import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    
    function getSubjectValue() {
        const subject = document.getElementById('subject');
        document.getElementById("hiddenSubject").value = subject.value;
    }
    
    document.getElementById("form").addEventListener("submit", getSubjectValue);



    // Firebase config
    const firebaseConfig = {
    apiKey: "AIzaSyDhUE0bpGkKn5CFFYRAztzIdX-g1gXahVY",
    authDomain: "portfolio-cecd2.firebaseapp.com",
    projectId: "portfolio-cecd2",
    storageBucket: "portfolio-cecd2.firebasestorage.app",
    messagingSenderId: "276075476239",
    appId: "1:276075476239:web:f3a77e473c93a804ab7a7a",
    measurementId: "G-TFHCK1TMK3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app); // Initialize Firestore

    // Handle form submission
    const form = document.querySelector('#form'); // Make sure your form has this ID

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const name = form.querySelector('[name="fullname"]').value;
        const email = form.querySelector('[name="email"]').value;
        const subject = form.querySelector('[name="subject"]').value;
        const message = form.querySelector('[name="message"]').value;

        try {
            await addDoc(collection(db, "contactMessages"), {
            name,
            email,
            subject,
            message,
            timestamp: new Date()
            });

            alert("Message stored successfully!");
            form.reset();
        } catch (error) {
            console.error("Error storing message:", error);
            alert("Failed to store message.");
        }
    });

});
