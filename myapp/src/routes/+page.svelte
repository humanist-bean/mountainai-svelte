<script>
	import MainMountain from './result/MainMountain.svelte';
	import MountainList from './result/MountainList.svelte';
	import Home from './Home.svelte';
	import {onMount, onDestroy} from 'svelte';
	import {results_page} from '$lib/js/results_page.js';
	import {transition} from '$lib/js/transitions.js';
	import { fade } from 'svelte/transition';

	/*
	// Control when the transition animation occurs to avoid component overlap
	let transition_ready = true;
	const unsub_transition = transition.subscribe((value) => {transition_ready = value;});

	// Toggle the results page components
	let toggle_results_page = false;
	const unsub_results = results_page.subscribe((value) => {toggle_results_page = value;});
	*/
	let intro_transition_ready = false;
    onMount(() => {intro_transition_ready= true;});

	// Unsubscribe from stores upon component destruction to avoid memory leaks
	//onDestroy(() => {unsub_transition(); unsub_results();});
</script>

<div transition:fade class="app">
	{#if (intro_transition_ready)}
		<Home/>
	{/if}

</div>

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