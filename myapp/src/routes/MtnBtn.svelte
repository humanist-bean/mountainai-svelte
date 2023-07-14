<script>
    import {createEventDispatcher} from 'svelte';
    import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
    import {user_store} from '$lib/js/user.js';
    import {uploadPhoto} from '$lib/js/firebase.js';


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

    function uploadedFile(){
        dispatch('uploaded-file');
    }

    // Code For Image Upload on Button Click 

    let files;

    $: if (files && files[0]) {
        console.log(files[0].name);
        uploadPhoto(files[0], loggedIn, user_id);
        files = null;
        uploadedFile();
    }

</script>

<div>
    <!-- COMMENTED OUT SO WE CAN USE PLACEHOLDER BUTTON UNTIL BACKEND IS IMPLEMENTED
    <input type="file" id="upload" hidden/>
	<label for="upload">Choose file</label>  
    
    <button on:click={()=>{onClick(); clickedUploadBtn();}} class="mtn-upload-btn" id="upload">
        Choose File
    
    
    </button> -->
    <form class="mtn-upload-btn" method="POST">
        <label>
            Choose File
            <input class="hidden-input" name="mtn-img" bind:files id="upload" on:change={uploadedFile} type="file" hidden/>
        </label>
    </form>
</div>

<style>
    .mtn-upload-btn{
        background-color: black;
        font-family: sans-serif;
        border-radius: 0.7rem;
        cursor: pointer;
        display: flex;
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