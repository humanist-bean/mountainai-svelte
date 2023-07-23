<script>
	import { fade } from 'svelte/transition';
    import { get } from 'svelte/store';
    import {transition_start, transition_end} from '$lib/js/transitions.js';
    import {prediction_store} from '$lib/js/prediction.js';
    import {getWikiInfoFromName} from '$lib/js/wiki.js';
    import {getWikiCache, uploadWikiInfoToFirestore} from '$lib/js/firebase.js'

    // ... (previous imports and setup)

    // Define an async function to handle the Wikipedia data retrieval
    async function fetchWikiData() {
    if ($prediction_store) {
        console.log("Prediction store set, attempting to get Wikipedia data");
        try {
        const wikiCache = await getWikiCache($prediction_store.class_id);
        if (wikiCache) {
            console.log("WikiInfo Retrieved from Firestore wikiCache");
            return wikiCache;
        } else {
            console.log("WikiInfo not in Firestore cache, retrieving it from Wikipedia and uploading to Firestore");
            const wikidata = await getWikiInfoFromName($prediction_store.class_id);
            await uploadWikiInfoToFirestore($prediction_store.class_id, wikidata.mainImageUrl, wikidata.extractedText, wikidata.topTitle);
            return Promise.resolve(wikidata);
        }
        } catch (error) {
        console.log('An error occurred:', error);
        return Promise.reject(error);
        }
    } else {
        console.log("Prediction store is undefined!");
        return Promise.reject(new Error("Prediction store is undefined"));
    }
    }

    let promise;
    $: { 
        if($prediction_store){
        promise = fetchWikiData();
        }
    }

</script>
{#if $prediction_store}
    <div class="prediction-container">
        <h1>Top Prediction Result: {$prediction_store.class_id.toUpperCase()} <br/> 
            Confidence: {($prediction_store.prediction_confidence * 100).toFixed(2)}%</h1>
    </div>
    {#await promise}
        <p>...waiting for contents from wikipedia</p>
    {:then wiki}
        <div transition:fade class="flex-container">
            <div>
                <h2 style="font-weight:bold;">
                    {wiki.topTitle}           
                </h2>
                <img class="top-mountain-image" height="20rem" src={wiki.mainImageUrl} alt={wiki.topTitle}> 
            </div>
            <div class="scroll-overflow">
                <h3>Description</h3>
                <p>
                    {wiki.extractedText}
                </p>
            </div> 
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
{:else}
    <div transition:fade>
       <h1> ... Waiting for Prediction Result, if waiting longer than 1min select new file or try smaller image size ... </h1>
    </div>
{/if}



  

<style>
    h1 {
        font-size: 1rem;
        font-weight: bold;
    }

    .prediction-container {
        display: flex;
        background-color: black;
        background: rgba(1, 0, 0, .15);
        width: fit-content;
        height: fit-content;
    }

    .flex-container {
        display: flex;
        background-color: black;
        background: rgba(1, 0, 0, .15);
        width: fit-content;
        height: fit-content;
    }

    .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        size: 25rem;
        font-size: 1rem;
        min-width: auto;
        min-height: 25rem;
        width: fit-content;
        height: fit-content;
        text-align: center;
        resize: none;
    }

    .flex-container > div > p {
        font-size: 12px;
        overflow: scroll;
        flex: 1;
        
    }

    .scroll-overflow{
        overflow:scroll;
        max-height: 22rem;
    }

    .top-mountain-image{
        height: 22rem;
        width: auto;
    }
</style>