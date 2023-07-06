<script>
import {createEventDispatcher} from 'svelte';

const dispatch = createEventDispatcher();

function clickedUploadBtn(){
    dispatch('clicked-upload-btn');
}
</script>

<div>
    <!-- COMMENTED OUT SO WE CAN USE PLACEHOLDER BUTTON UNTIL BACKEND IS IMPLEMENTED
    <input type="file" id="upload" hidden/>
	<label for="upload">Choose file</label>
    -->
    <button on:click={clickedUploadBtn} class="mtn-upload-btn" id="upload">
        Choose File
    </button>
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