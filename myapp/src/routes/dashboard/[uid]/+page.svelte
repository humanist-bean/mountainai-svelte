<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';
    import Uploads from './Uploads.svelte';
    import {show_header} from '$lib/js/header.js';

    export let data;

    let intro_transition_ready = false;
    onMount(() => {intro_transition_ready= true; show_header();});


</script>
{#if intro_transition_ready}
    <div transition:fade>
        <h1>Upload History</h1>
        <Uploads uid={data.uid} />
    </div>
{/if}

<style>
    div > h1 {
        font-weight: bold;
    }
    
    @media (max-width: 400px) {
        div > h1 {
            font-size: 1.3rem;

        }
    }
</style>