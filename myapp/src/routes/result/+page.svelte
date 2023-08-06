<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';
    import MainMountain from './MainMountain.svelte';
    import MountainList from './MountainList.svelte';
    import {show_header} from '$lib/js/header.js';

    let intro_transition_ready = false;
    onMount(() => {intro_transition_ready= true; show_header();});

</script>
{#if intro_transition_ready}
    <div transition:fade class="app">
        <MainMountain />
        <h3 style="color:black; font-size: 0.75rem;">Coming soon: List of top N guesses after top result, placeholder for now...</h3>
        <MountainList/>
    </div>
{/if}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: center;
        align-items: center;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>