import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,

} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCFIWx3-CrJPxhIa_ii4ykxlwaaGLnLCpY",
    authDomain: "hacktoon-625de.firebaseapp.com",
    projectId: "hacktoon-625de",
    storageBucket: "hacktoon-625de.appspot.com",
    messagingSenderId: "1085246313684",
    appId: "1:1085246313684:web:cca726fed7c15263e15741",
    measurementId: "G-KXNNC7Z74J"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export {
    app,
    auth,
    db,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    addDoc,
    collection,
    signOut,
    doc,
    setDoc,
    getDoc,
    uploadBytes,
    getDownloadURL,
    updateDoc,
    ref,
    getStorage,
    storage
}