<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function clickedUploadBtn(){
        dispatch('clicked-upload-btn');
    }

    // Code For Image Upload on Button Click
    let input;
    let files = null;
    let container;
    let image;
    let placeholder;
    let showImage = false;

    /*
    $: if (files) {
            const fileText = files[0].text();
            fileText.then((text) => {
                template = text;
                console.log(text);
            });
            files = null;
    } */

    function onClick() {
        console.log("TOTOTO");
        input.click();
    }

    function handleFileUpload() {
        console.log("YOYOYOYO");
        if (files) {
        const fileText = files[0].text();
        fileText.then((text) => {
            template = text;
            console.log(text);
        });
        files = null;
        }
  }
</script>

<div>
    <!-- COMMENTED OUT SO WE CAN USE PLACEHOLDER BUTTON UNTIL BACKEND IS IMPLEMENTED
    <input type="file" id="upload" hidden/>
	<label for="upload">Choose file</label>
    -->
    <button on:click={()=>{onClick(); clickedUploadBtn();}} class="mtn-upload-btn" id="upload">
        Choose File
    </button>
    <input style="display:none" bind:this={input} bind:files={files} on:change={handleFileUpload} type="file" />
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
</style>