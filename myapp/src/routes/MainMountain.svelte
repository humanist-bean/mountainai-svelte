<script>
	import { fade } from 'svelte/transition';
    import {transition_start, transition_end} from '/src/routes/transitions.js';
</script>

<div transition:fade class="flex-container"
on:introend={transition_end}
on:outrostart={transition_start}
on:outroend={transition_end}>
    <div>
        <h2>
            North Cascades            
        </h2>
        <img class="top-mountain-image" src="/src/lib/images/north-cascades-2.jpg" alt="North Cascades"> 
    </div>
    <div>
        <p>
            North Cascades National Park is in northern Washington State. Its a vast wilderness of conifer-clad mountains, glaciers and lakes. The North Cascades Highway passes viewpoints and leads to trails such as the steep Thunder Creek Trail. Boats dot Ross Lake. The remote community of Stehekin lies at the northern tip of deep Lake Chelan. The park shelters grizzly bears and gray wolves, plus more than 200 bird species.        
        </p>
    </div> 
</div>
  

<style>
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
        font-size: 3rem;
        min-width: auto;
        min-height: 25rem;
        width: fit-content;
        height: fit-content;
        text-align: center;
        resize: none;
    }

    .flex-container > div > p {
        font-size: 12px;
        overflow: visible;
        flex: 1;
        
    }

    .top-mountain-image{
        height: 22rem;
        width: auto;
    }
</style>