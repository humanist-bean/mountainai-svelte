<script>
    import {getUploads, db, deleteUpload} from '$lib/js/firebase';
    import {prediction_store, createFileFromImageUrl} from '$lib/js/prediction.js';
    import {makePrediction} from '$lib/js/firebase.js';
    import {onSnapshot, query, collection, where} from 'firebase/firestore';
	import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { goto } from '$app/navigation';



    export let uid;
    let uploads;

    // Subscribe to firestore updates to show newly added mountinas
    const q = query(collection(db, "uploaded-images"), where("uid", "==", uid ));
    const unsub = onSnapshot(q, (querySnapshot) => {
        uploads = querySnapshot.docs;
    });
    // Get mountains on initial load because onSnapshot only loads upon 
    // changes to the collection
    uploads = getUploads(uid);
    
    // Remember to unsub from firestore snapshot on component destruction
    onDestroy(()=>{unsub();});

    function viewPrediction(upload) {
        // Create a Promise to handle the asynchronous operation
        const filePromise = createFileFromImageUrl(upload.data().imageURL, upload.data().uploadName);

        // Use .then() to handle the result of the Promise
        filePromise.then((file) => {
            // file is the resolved value from the createFileFromImageUrl Promise
            if (file) {
            // Make Prediction with MountainAI REST API
            makePrediction(file)
                .then((predictionData) => {
                    prediction_store.set(predictionData);
                    goto("/result");
                })
                .catch((error) => console.log("There was an error making the prediction: ", error));
            } else {
            // Handle the case where filePromise was rejected (error occurred in createFileFromImageUrl)
            console.log("Failed to create file from image URL.");
            }
        });
    }

    
</script>

<div transition:fade class="flex-container">
    {#await uploads}
        <p>...loading uploads...</p>
    {:then uploads}
        {#each uploads as upload}
            <div transition:fade>{upload.data().uploadName}
                <img src={upload.data().imageURL} alt={upload.data().uploadName}/>
                <button on:click={viewPrediction(upload)} >
                    View Prediction Results
                </button>
                <button on:click={deleteUpload(upload)} >
                    Delete
                </button>
            </div>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

</div>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
}

.flex-container > div {
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  width: auto;
  padding: 5px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 15px;
}

.flex-container > div > img {
    max-height: 20rem;
    max-width: 20rem;
    align-self: center;
}

button {
    margin:10px;
}
</style>