import { writable } from 'svelte/store';

export const prediction_store = writable(false);

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