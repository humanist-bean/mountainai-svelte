import { writable } from 'svelte/store';

export const prediction_store = writable(false); //store for prediction results
export const prediction_cache_id = writable(false); // store for storage cache id to cache prediction to uploaded-images

export async function createFileFromImageUrl(imageUrl, fileName) {
    try {
      // Step 1: Fetch the image from the URL
      const response = await fetch(imageUrl);
      const blob = await response.blob(); // Step 2: Convert to a Blob
  
      // Step 3: Create a new File object using the Blob
      const file = new File([blob], fileName, { type: blob.type });
      return file;
    } catch (error) {
      console.error('Error creating file from image URL:', error);
      return null;
    }


  }

// Get Prediction from MountainAI model by making POST call to Flask REST API
export async function makePrediction(file){
  // POST file to MountainAI REST API (Flask) for prediction
  console.log(`Attempting to send ${file.name} image to mountainAI for evaluation`);
  try{
    //const reader = new FileReader();
    // Create a FormData object and append the file to it
    const formData = new FormData();
    formData.append('file', file);
    
    // Local URL: http://127.0.0.1:5000/predict
    // Google App Engine URL: https://mountainai-392023.wl.r.appspot.com/predict
    // ngrok PORT Tunneling URL to host from local PC (NOTE: This changes with each ngrok http run): 
    // https://135d-2601-1c0-cc00-4840-f0ce-29af-2571-5cc6.ngrok-free.app/predict
    const response = await fetch('https://mountainai-392023.wl.r.appspot.com/predict', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log("Successfully sent Image to MountainAI and got response: ", data);
    return data;
  } catch (e) {
    console.error("Error sending image to MountainAI Server for prediction: ", e);
  }

}

export function getPredictionCacheId(){
  const max = 1000000000000;
  const min = 1;
  return Math.floor(Math.random() * (max - min) ) + min;
}



// Save prediction results to uploaded-images and Get (Should go here or firebase.js?)