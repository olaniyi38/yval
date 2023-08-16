// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, addDoc, getFirestore, writeBatch, query, getDocs, collection } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2R69HQOcL-SxN9MvJNvkkZW_1tT2LwNA",
    authDomain: "yval-c2a0e.firebaseapp.com",
    projectId: "yval-c2a0e",
    storageBucket: "yval-c2a0e.appspot.com",
    messagingSenderId: "1060804191090",
    appId: "1:1060804191090:web:86141546d956f2b21e33eb",
    measurementId: "G-BCJKE4RE6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export async function fetchCollectionFromDb(collectionName) {
    const collectionRef = collection(db, collectionName)
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)
    return querySnapShot.docs.map((docSnapshot) => docSnapshot.data())
}

export async function fetchDocumentFromDb(docId, collectionName) {
    const newId = docId.replace(/%20/g, " ");

    const docRef = doc(db, collectionName, newId)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        return docSnapshot.data()
    }

    console.error("Document not found", newId)
}

