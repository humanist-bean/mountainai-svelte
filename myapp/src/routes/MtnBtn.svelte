<script>
    import { goto } from '$app/navigation';
    import {user_store} from '$lib/js/user.js';
    import {prediction_store, makePrediction, prediction_cache_id, getPredictionCacheId} from '$lib/js/prediction.js';
    import {uploadPhoto, cachePredictionResults} from '$lib/js/firebase.js';

    let loggedIn = false;
    let user_id;

    $: if ($user_store){
        loggedIn = true;
        user_id = $user_store.uid;
    } else {
        loggedIn = false;
        user_id = "0";
    }


    // Code For Image Upload on Button Click 
    let files; 
    // Get Prediction and set prediction store with File and Upload it to firebase if user signed in
    
    $: if (files && files[0]) {
        try{
            // Check if file size is too large, if so raise Alert and cancel upload
            const maxFileSizeInBytes = 1 * 1024 * 1024; // 1mb
            const fileSize = files[0].size;
            if (fileSize > maxFileSizeInBytes) {
                alert("File size exceeds the allowed limit. Please select a smaller file.");
                // Clear the file input field
                files = null;
                // Prevent form submission
                throw "File size exceeds limit.";
            }

            //Continue with file upload and prediction
            console.log(`Uploaded file for prediction: ${files[0].name}`);
            prediction_store.set(false); // Makes it so 'Waiting for prediciton' shows in /result
            prediction_cache_id.set(false);
            goto('/result'); // redirect user to avoid them clicking choose file fast repeatedly 
            
            // Make Prediction with MountainAI REST API
            makePrediction(files[0]).then( (predictionPromise) => {
                Promise.resolve(predictionPromise).then((predictionData) => {
                    prediction_store.set(predictionData);
                }).catch((error) => console.log("There was an error setting the prediction_store: ",error));    
            }).catch((error) => console.log("There was an error making the prediction: ",error));

            // If user is logged in save uploaded Photo and prediction results to firebase
            // TODO: add logic to save prediction result to uploaded Photo info
            if(loggedIn){
                //Setup prediction_cache_id so it can be passed to the firebase storage for later lookup
                const uploads_cache_id = getPredictionCacheId();
                console.log("Generated prediction cache id for upload: ", uploads_cache_id);
                uploadPhoto(files[0], loggedIn, user_id, uploads_cache_id).then((promise)=>{
                    Promise.resolve(promise).then((resolved)=>{
                        if (resolved){
                            console.log("Upload Photo promise resolved, attempting to set prediction_cache_id..");
                            prediction_cache_id.set(uploads_cache_id); // triggers cachePredictionResults call
                        } else {
                            console.log("WEIRD: The promise resolved to false for some reason...");
                        }
                    });
                });
            }

            files = null;
        } catch (error) {
            console.log("An error occurred in 'if files[0]': ", error);
        }

    }
    

    // Cache prediction results by adding them to uploaded-images doc for quick lookup from dashboard
    $: if (loggedIn && $prediction_cache_id && $prediction_store){
        cachePredictionResults($prediction_cache_id, $prediction_store, user_id);
    }



</script>

<div>
    <form class="mtn-upload-btn" method="POST">
        <label class="btn-label-hack-fix">
            Choose File
            <input class="hidden-input" name="mtn-img" bind:files id="upload" type="file" accept="image/*" hidden/>
        </label>
    </form>
</div>

<style>
    /* NOTE: .mtn-upload-btn is sensitive and its padding/margins are effected by 
    .btn-label-hack-fix */
    .mtn-upload-btn{
        background-color: black;
        font-family: sans-serif;
        border-radius: 0.7rem;
        /*display: flex; */
        width: fit-content;
        color: white;
        text-align: center;
        padding: 0.0rem;
        margin: 0.66rem;
        text-decoration: none;
        display: flex;
    }

    
    .mtn-upload-btn:hover{
        background-color: blue;
    }

    .hidden-input{
        height:100%;
    }

    /* This label controls the clicable part of the button that brings up the file selection window.
     For some reason, this button is working weird. Not sure if its due to Sveltekit
     or some css weirdness in a parent component, but neither stackoverflow or chatGPT has
     any good answer for why this label makes the "<input bind:files>" while other methods
     such as onclick functions don't. NOTE: padding here controls upload button size! */
    .btn-label-hack-fix{
        padding:0.66rem;
        cursor: pointer;
    }

    @media (max-width: 400px) {
        .mtn-upload-btn{
            font-size: .5rem;
        }
    }


</style>