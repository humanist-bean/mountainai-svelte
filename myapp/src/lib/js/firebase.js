// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { getStorage, deleteObject, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// ALDER'S IMPORTANT NOTE / TODO: Firebase is weird in that it generally doesn't require that 
// we protect API keys which is typically the norm. However if I end up using 
// Firebase ML, then I WILL want to protect my API key with .env !!!
const firebaseConfig = {
  apiKey: "AIzaSyADDZbW75vUHeVXjwWxKVBLI_wM7aL3uxg",
  authDomain: "mountainai.firebaseapp.com",
  projectId: "mountainai",
  storageBucket: "mountainai.appspot.com",
  messagingSenderId: "272961028532",
  appId: "1:272961028532:web:cef804c895aa06164e32e1",
  measurementId: "G-YCM8DB9DLE"
};

// Initialize and Export Firebase app, auth, database (Firestore), and storage.
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Define and Export Database Access Functions

//Uploads photo to firebase and sends it to MountainAI
//pass in individual image file, e.g. 'uploadPhoto(files[0])'
export async function uploadPhoto(file, loggedIn, user_id) {
  // Set up the image data in json form
  const img_data = {
    uploadName: file.name,
    // placeholder mountain image URL and reference
    // replace with file URL from google cloud storage bucket
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    imageRef: "/uploaded-images/Mt Hood.jpg",
    hasUser: loggedIn,
    createdAt: serverTimestamp(),
    verifiedInput: false,
    verifiedResult: false,
    uid: user_id
  };

  
  if (loggedIn) {
    console.log(`User is logged in so send ${file.name} data to firestore's upload history`);
    try {
      // Upload the image to firebase storage and get image URL
      // TODO: get image url and set img_data.imageURL.
      
      uploadToFirebase(file, img_data);
      // Upload the image details to firestore
      //const docRef = await addDoc(collection(db, "uploaded-images"), img_data);
      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Fetch to test backend REST APIs work
  // Can eventually replace this with POST to MountainAI deployment
  console.log(`Attempting to send ${file.name} image to mountainAI for evaluation`);
  try{
    //const reader = new FileReader();

    // Create a FormData object and append the file to it
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData,
      /*headers: {
        'Content-Type': 'application/json'
      }*/
    });
    const data = await response.json();
    //console.log(data);
    console.log("Successfully sent Image to MountainAI and got response: ", data);
  } catch (e) {
    console.error("Error sending image to MountainAI Server for prediction: ", e);
  }

  /*
  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(img_data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  */
}

// Uploads photo to Firebase Storage and Firestore
// Works by uploading to storage first then getting the storage URL and 
// Sending that to firestore with addDoc along with other image details
async function uploadToFirebase(file, img_data){
  // create a storage reference and start uploading the image
  let time = new Date().toDateString();
  const imageReference = `uploaded-images/${time}.${file.name}`;
  const storageRef = ref(storage, imageReference);
  const uploadTask = uploadBytesResumable(storageRef, file);
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.error("Error uploading document to firebase storage: ", error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // Upload the image details to firestore
        img_data.imageURL = downloadURL;
        img_data.imageRef = imageReference;
        addDoc(collection(db, "uploaded-images"), img_data).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        });
      });
    }
  );
}

// Get uploaded mountain images and their data
// useful for loading data before changes to database
export async function getUploads(uid){
  const user_uploads_query = query(collection(db, "uploaded-images"), where("uid", "==", uid));
  const querySnapshot = await getDocs(user_uploads_query);
  // Return an array of the docs in the collection
  return querySnapshot.docs;
}

// Delete uploaded mountain image data from firestore and storage
export async function deleteUpload(upload){
  console.log("Deleting uploaded image and its data.");
  const imageId = upload.id; 

  if (upload.data().imageRef){
    // DELETE IMAGE FROM STORAGE
    // Create a reference to the file to delete
    const fileName = upload.data().imageRef;
    console.log(`Attempting to delete file from storage with name: ${fileName}`);
    const desertRef = ref(storage, fileName.toString());
    // Delete the file
    deleteObject(desertRef).then(() => {
      // File deleted from storage successfully
      console.log("File deleted from storage successfully: " + fileName);
    }).catch((error) => {
      console.error("Error deleting image from storage: ", error);
    });
  }

  // DELETE DOCUMENT FROM FIRESTORE
  console.log(`Attempting to delete document from firestore with docID: ${imageId}`);
  deleteDoc(doc(db, "uploaded-images", imageId)).then(() => {
    console.log("Image info deleted from firestore successfully");
  }).catch((error) => {
    console.error("Error deleting document from firestore: ", error);
  });

}

// NOTE: analytics causes a "can't find window" error, protecting with 'if window' for now
// source: https://stackoverflow.com/questions/69799682/firebase-analytics-with-next-js-window-not-defined
// TODO: comeback and fix the analytics 
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }


