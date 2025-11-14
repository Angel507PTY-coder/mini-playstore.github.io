// Importar funciones de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoizr-HCNDNaklLmBgTGqfvRVukzfxiMQ",
  authDomain: "mini-playstore.firebaseapp.com",
  projectId: "mini-playstore",
  storageBucket: "mini-playstore.firebasestorage.app",
  messagingSenderId: "614694898128",
  appId: "1:614694898128:web:7eac3954c8887993a851d5"
};

// Inicializar Firebase
console.log("🚀 Inicializando Firebase...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

console.log("✅ Firebase inicializado");

// Autenticación anónima
signInAnonymously(auth)
  .then(() => console.log("✅ Autenticación anónima exitosa"))
  .catch(error => console.error("❌ Error en autenticación:", error));

// Exportar servicios
export { 
  db, collection, getDocs, addDoc, serverTimestamp,
  storage, ref, uploadBytesResumable, getDownloadURL 
};