<script>
	import Header from './Header.svelte';
	import './styles.css';
	import {transition} from '$lib/js/transitions.js';
	import {results_page} from '$lib/js/results_page.js';
	import {header} from '$lib/js/header.js';
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	//import {app} from '$lib/js/firebase.js';

	// Home Page Load and Component Svelte Transitions
	let intro_transition_ready = false;
	let transition_ready = false;
	
	onMount(() => {transition_ready = true; intro_transition_ready= true;});
	const unsub_transition = transition.subscribe((value) => {transition_ready = value;});

	// Variable for toggling the results page components with results_page store
	let toggle_results_page = false;
	const unsub_results = results_page.subscribe((value) => {toggle_results_page = value;});

	// Variable for toggling the header component with the header store
	let toggle_header = false;
	$:{toggle_header = $header}


	// Unsubscribe from stores upon component destruction to avoid memory leaks
	onDestroy(() => {unsub_transition(); unsub_results();});
	
</script>

{#if intro_transition_ready}
	<div transition:fade class="app">
		{#if (toggle_header && transition_ready)}
			<Header/>
		{/if}

		<main>
			<slot/>
		</main>

		<footer>
			<a href="https://humanist-bean.github.io"><p>@ Alder French 2023 </p></a>
		</footer>
	</div>
{/if}

<style>

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		justify-content: center;
        align-items: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		color:azure;
		font-weight: bold;
		font-size:0.66em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
