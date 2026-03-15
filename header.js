/**
 * header.js — IT-Study
 * Barcha sahifaga <script type="module" src="header.js"></script> qo'shing.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app  = initializeApp({
  apiKey:            "AIzaSyDzd5Mq1ACloUlOtxMzpQ-M6mdzqAVhiBc",
  authDomain:        "it-study-a45fa.firebaseapp.com",
  projectId:         "it-study-a45fa",
  storageBucket:     "it-study-a45fa.firebasestorage.app",
  messagingSenderId: "973750187023",
  appId:             "1:973750187023:web:c38b839da825ffa0681f7a"
});
const auth = getAuth(app);

const userArea = document.getElementById("userArea");

if (userArea) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName || user.email;
      // Bosilganda profile.html ga o'tadi
      userArea.outerHTML = `
        <div class="profile-pill"
             onclick="location.href='profile.html'"
             style="cursor:pointer;"
             title="Profilga o'tish">
          <div class="av">${name[0].toUpperCase()}</div>
          <span>${name}</span>
        </div>`;
    } else {
      userArea.textContent = "Kirish";
      userArea.href        = "login.html";
    }
  });
}

// Logout funksiyasi — profile.html dan chaqiriladi
window.headerLogout = () => signOut(auth).then(() => {
  localStorage.removeItem("username");
  localStorage.removeItem("userEmail");
  location.href = "login.html";
});