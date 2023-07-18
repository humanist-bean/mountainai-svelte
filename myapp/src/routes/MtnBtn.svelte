<script>
    import {createEventDispatcher} from 'svelte';
    import { goto } from '$app/navigation';
    import {user_store} from '$lib/js/user.js';
    import {prediction_store} from '$lib/js/prediction.js';
    import {uploadPhoto, makePrediction} from '$lib/js/firebase.js';


    const dispatch = createEventDispatcher();

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
        console.log(files[0].name);
        prediction_store.set(false); // Makes it so 'Waiting for prediciton' shows in /result
        goto('/result'); // redirect user to avoid them clicking choose file fast repeatedly
        // Make Prediction with MountainAI REST API
        makePrediction(files[0]).then( (predictionData) => {
            prediction_store.set(predictionData);
        }).catch((error) => console.log("There was an error making the prediction: ",error));

        // If user is logged in save uploaded Photo and prediction results to firebase
        // TODO: add logic to save prediction result to uploaded Photo info
        if(loggedIn){
            uploadPhoto(files[0], loggedIn, user_id);
        }

        files = null;
    }

</script>

<div>
    <form class="mtn-upload-btn" method="POST">
        <label>
            Choose File
            <input class="hidden-input" name="mtn-img" bind:files id="upload" type="file" accept="image/*" hidden/>
        </label>
    </form>
</div>

<style>
    /* TODO: FIX THIS STUPID BUTTON IT ONLY WORKS IF YOU CLICK ON THE TEXT WITHIN IT */
    .mtn-upload-btn{
        background-color: black;
        font-family: sans-serif;
        border-radius: 0.7rem;
        /*display: flex; */
        width: fit-content;
        color: white;
        text-align: center;
        padding: 0.66rem;
        margin: 0.66rem;
        text-decoration: none;
    }

    
    .mtn-upload-btn:hover{
        background-color: blue;
    }

    .hidden-input{
        height:100%;
    }


</style>