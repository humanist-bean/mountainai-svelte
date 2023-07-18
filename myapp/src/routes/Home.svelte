<script>
	import { onMount, onDestroy } from 'svelte';
	import MtnBtn from './MtnBtn.svelte';
	import Auth from './Auth.svelte';
	import MountainLogo from './MountainLogo.svelte'
	import { fade } from 'svelte/transition';
	import {transition_start, transition_end} from '$lib/js/transitions.js';
	import {show_results_page} from '$lib/js/results_page.js';
	import {hide_header} from '$lib/js/header.js';

	onMount(() => {hide_header();});

	let logo_size = 11;
</script>

<svelte:head>
	<title>MountainAI</title>
	<meta name="description" content="Mountain AI Svelte Practice Project by Alder French" />
</svelte:head>

<section transition:fade
on:introend={transition_end}
on:outrostart={transition_start}
on:outroend={transition_end}>
	<h1>
		<span class="welcome">
			<MountainLogo {logo_size}/>
		</span>

		Upload image of mountain to identify with AI.
	</h1>

	<h2 class="center-content">
		<!-- IMPORTANT NOTE ON 'transtion_start();': It needs to be attached to this button,
		because if its attached to 'introstart' instead then the animations for the home page
		transition out and main mountain transition occur simoultaneously and the transition doesn't work! -->
		<MtnBtn on:uploaded-file={() => {show_results_page(); transition_start();}}/>
		<Auth />
	</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.center-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
		font-weight: bold;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

</style>
