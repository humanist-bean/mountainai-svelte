<script>
	import MainMountain from './MainMountain.svelte';
	import MountainList from './MountainList.svelte';
	import Home from './Home.svelte';
	import {onDestroy} from 'svelte';
	import {results_page} from '$lib/js/results_page.js';
	import {transition} from '$lib/js/transitions.js';

	// Control when the transition animation occurs to avoid component overlap
	let transition_ready = true;
	const unsub_transition = transition.subscribe((value) => {transition_ready = value;});

	// Toggle the results page components
	let toggle_results_page = false;
	const unsub_results = results_page.subscribe((value) => {toggle_results_page = value;});

	// Unsubscribe from stores upon component destruction to avoid memory leaks
	onDestroy(() => {unsub_transition(); unsub_results();});
</script>

<div class="app">
	{#if (!toggle_results_page && transition_ready)}
		<Home/>
	{/if}
	{#if (toggle_results_page && transition_ready)}
		<MainMountain/>
		<MountainList/>
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