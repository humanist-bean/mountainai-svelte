<script>
    import {createEventDispatcher} from 'svelte';
    import {addDoc} from 'firebase/firestore';

    const dispatch = createEventDispatcher();

    function uploadedFile(){
        dispatch('uploaded-file');
    }

    // Code For Image Upload on Button Click 

    let files;

    $: if (files && files[0]) {
        console.log(files[0].name);
        /*
        const fileText = files[0].text();
        fileText.then((text) => {
            console.log("IM RUNNING TOO");
            console.log(text);
            //template = text;
        });
        */
        files = null;
        uploadedFile();
    }

    async function uploadPhoto() {
		const response = await fetch('/');
		number = await response.json();
	}
</script>

<div>
    <!-- COMMENTED OUT SO WE CAN USE PLACEHOLDER BUTTON UNTIL BACKEND IS IMPLEMENTED
    <input type="file" id="upload" hidden/>
	<label for="upload">Choose file</label>  
    
    <button on:click={()=>{onClick(); clickedUploadBtn();}} class="mtn-upload-btn" id="upload">
        Choose File
    
    
    </button> -->
    <form class="mtn-upload-btn" method="POST" action="?/upload">
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