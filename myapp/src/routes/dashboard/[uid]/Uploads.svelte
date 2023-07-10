<script>
    import {getUploads} from '$lib/js/firebase';
	import { onMount, onDestroy } from 'svelte';

    export let uid;
    let uploads = getUploads(uid);
</script>

<div class="flex-container">
    {#await uploads}
        <p>...loading uploads...</p>
    {:then uploads}
        {#each uploads as upload}
            <div>{upload.data().uploadName}</div>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

</div>

<style>
.flex-container {
  display: flex;
  background-color: #f1f1f1;
}

.flex-container > div {
  background-color: black;
  color: white;
  width: auto;
  padding: 5px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 15px;
}
</style>