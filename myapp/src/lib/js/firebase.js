// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore";
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
export async function uploadPhoto(file, loggedIn, user_id, uploads_cache_id) {

  // Store image and image details in firebase
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
    uid: user_id,
    predictionCacheId: uploads_cache_id
  };
  
  if (loggedIn) {
    console.log(`User is logged in so send ${file.name} data to firestore's upload history`);
    try {
      // Upload the image to firebase storage and image data to firestore
      await uploadSearchPhotoToFirebase(file, img_data);
      return Promise.resolve(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

}

// Uploads photo to Firebase Storage and Firestore
// Works by uploading to storage first then getting the storage URL and 
// Sending that to firestore with addDoc along with other image details
async function uploadSearchPhotoToFirebase(file, img_data){
  // create a storage reference and start uploading the image
  const currentDateInSeconds = Math.floor(Date.now() / 1000);
  let time = currentDateInSeconds;
  //let time = new Date().toDateString(); // THIS CREATES PROBLEMS IF USER UPLOADS IMG
  // WITH SAME NAME ON SAME DAY!!!
  
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

// Function to cache wikipedia info by sending it to firestore 
// so we can load mountain results faster 
// NOTE: COOL USE CASE OF CLIENT SIDE WEB SCRAPING!!!
// THANKS FOR THE IDEA CODY ANDERSON!
export async function uploadWikiInfoToFirestore(predict_result, wiki_img_url, wiki_top_text, wiki_page_name){
  // Set up the wiki data in json form
  const wiki_data = {
    predictionMtnName: predict_result,
    wikiImageURL: wiki_img_url,
    wikiMtnSummary: wiki_top_text,
    wikiPageName: wiki_page_name,
    createdAt: serverTimestamp(),
  };

  addDoc(collection(db, "wiki-cache"), wiki_data).then((docRef) => {
    console.log("Uploaded wiki info to firwstore wiki cache - Document written with ID: ", docRef.id);
  }).catch((error) => {
    console.error("Error uploading wiki info to firestore cache: ", error);
  });
}

// Function to check wiki cache for use before performing client side wiki scraping
// Args: mtn_name (string of mountain name returned by MountainAI prediction)
// Returns: wiki_img_url, wiki_top_text
// Usage: check if return values are false, if so scrape wiki, if not display them
export async function getWikiCache(mtn_name){
  const wikiCacheQuery = query(collection(db, "wiki-cache"), where("predictionMtnName", "==", mtn_name));
  const querySnapshot = await getDocs(wikiCacheQuery);
  // Return an array of the docs in the collection
  if(querySnapshot.docs.length > 0){
    console.log("Found wiki info in firestore cache, returning in Promise.");
    const wikiImg = await querySnapshot.docs[0].data().wikiImageURL;
    const wikiText = await querySnapshot.docs[0].data().wikiMtnSummary;
    const wikiTitle = await querySnapshot.docs[0].data().wikiPageName;
    const wikiCache = {
      mainImageUrl: wikiImg,
      extractedText: wikiText,
      topTitle: wikiTitle
    }
    return new Promise((resolve, reject) =>{
        try{
            resolve(wikiCache);
        } catch(e){
            console.log('An error occurred in getWikiCache:', e);
            reject(e);
        }
    });
  } else {
    console.log("Didn't find wiki info in firestore cache, returning promise that resolves to false.")
    return new Promise((resolve, reject) =>{
      try{
          resolve(false);
      } catch(e){
          console.log('An error occurred in getWikiCache:', e);
          reject(e);
      }
    });
  }

}

// Cache Prediction Results to Uploaded Image in firestore For quick future lookup from dashboard
// Should be called IF user is logged in and uploads a picture for analysis
export async function cachePredictionResults(prediction_cache_id, prediction_results, user_id){
  console.log(`Attempting to cache prediction results to users upload using prediction_cache_id: \
  ${prediction_cache_id} and prediction_results: ${prediction_results} `);
  const userUploadsQuery = query(collection(db, "uploaded-images"), where("predictionCacheId", "==", prediction_cache_id));
  const querySnapshot = await getDocs(userUploadsQuery);  
  console.log("TEST - length of docs is: ", querySnapshot.docs.length);
  const docId = querySnapshot.docs[0].id;
  console.log("TEST: here is document 0's docID: ", docId);
  const uploadRef = doc(db, "uploaded-images", querySnapshot.docs[0].id);
  try{
    await updateDoc(uploadRef, {
      predictionResults: prediction_results,
    });
    console.log("Successfully cached Prediction Results to upload data on firestore!")
  }catch(e){
    console.log('An error occurred in cachePredictionREsults while updating upload doc:', e);
    reject(e);
}
  
}

// Returns Promise That resolves with Cached Prediction Data 
export async function getPredictionCache(prediction_cache_id){
  console.log("Attempting to retrieve upload's cached prediction results from firestore");
  console.log("TEST: ", prediction_cache_id);
  const userUploadsQuery = query(collection(db, "uploaded-images"), where("predictionCacheId", "==", prediction_cache_id));
  const querySnapshot = await getDocs(userUploadsQuery);
  // Return an array of the docs in the collection
  if(querySnapshot.docs.length > 0){
    console.log("Found prediction info in firestore cache, returning in Promise.");
    const predictionCache = await querySnapshot.docs[0].data().predictionResults;
    return new Promise((resolve, reject) =>{
        try{
            resolve(predictionCache);
        } catch(e){
            console.log('An error occurred in getWikiCache:', e);
            reject(e);
        }
    });
  } else {
    console.log("Didn't find prediction info in Firestore uploaded-images, returning promise that resolves to false.")
    return new Promise((resolve, reject) =>{
      try{
          resolve(false);
      } catch(e){
          console.log('An error occurred in getPredictionCache:', e);
          reject(e);
      }
    });
  }
}


// NOTE: analytics causes a "can't find window" error, protecting with 'if window' for now
// source: https://stackoverflow.com/questions/69799682/firebase-analytics-with-next-js-window-not-defined
// TODO: comeback and fix the analytics 
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }


