// Importar funciones de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoizr-HCNDNaklLmBgTGqfvRVukzfxiMQ",
  authDomain: "mini-playstore.firebaseapp.com",
  projectId: "mini-playstore",
  storageBucket: "mini-playstore.firebasestorage.app",
  messagingSenderId: "614694898128",
  appId: "1:614694898128:web:7eac3954c8887993a851d5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Iniciar sesión anónima (permite subir apps)
signInAnonymously(auth).then(() => {
  console.log("Sesión anónima iniciada ✅");
}).catch((error) => console.error("Error al iniciar sesión:", error));

export { db, collection, getDocs, addDoc, serverTimestamp, storage, ref, uploadBytes, getDownloadURL };