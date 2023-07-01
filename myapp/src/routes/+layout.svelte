<script>
	import Header from './Header.svelte';
	import Home from './Home.svelte';
	import MainMountain from './MainMountain.svelte';
	import MountainList from './MountainList.svelte';
	import './styles.css';
	import {transition, transition_start, transition_end} from '/src/routes/transitions.js'

	let transition_ready = true;
	transition.subscribe((value) => {transition_ready = value;});

	let results_page = false;
	
</script>

<div class="app">
	{#if (results_page && transition_ready)}
		<Header bind:results_page />
	{/if}

	<main>
		{#if (!results_page && transition_ready)}
			<Home bind:results_page />
		{/if}
		{#if (results_page && transition_ready)}
			<MainMountain />
			<MountainList />
		{/if}
		<slot/> <!-- Seems like slot is annoying since it has very limited functionality compared to components-->
	</main>

	<footer>
		<p>footer</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

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
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
