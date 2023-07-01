<script>
	import Counter from './Counter.svelte';
	import MtnBtn from './MtnBtn.svelte';
	import MountainLogo from './MountainLogo.svelte'
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { fade } from 'svelte/transition';
	import {transition_start, transition_end} from '/src/routes/transitions.js';

	export let results_page = false;
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

	<h2>
		<!-- IMPORTANT NOTE ON 'transtion_start();': It needs to be attached to this button,
		because if its attached to 'introstart' instead then the animations for the home page
		transition out and main mountain transition occur simoultaneously and the transition doesn't work! -->
		<MtnBtn on:clicked-upload-btn={()=> {results_page = true; transition_start();}}/>
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

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

</style>
