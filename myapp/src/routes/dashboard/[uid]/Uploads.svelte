<script>
    import {getUploads, db} from '$lib/js/firebase';
    import {onSnapshot, query, collection, where} from 'firebase/firestore';
	import { onMount, onDestroy } from 'svelte';

    export let uid;
    let uploads;

    // Subscribe to firestore updates to show newly added mountinas
    const q = query(collection(db, "uploaded-images"), where("uid", "==", uid ));
    const unsub = onSnapshot(q, (querySnapshot) => {
    console.log("Current uploads data: ", querySnapshot.data);
    uploads = querySnapshot.docs;
    });
    // Get mountains on initial load because onSnapshot only loads upon 
    // changes to the collection
    uploads = getUploads(uid);
    
    // Remember to unsub from firestore snapshot on component destruction
    onDestroy(()=>{unsub();});
    
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